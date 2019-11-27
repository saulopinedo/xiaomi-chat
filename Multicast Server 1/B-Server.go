package main

import (
	"bufio"
	"bytes"
	"encoding/gob"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net"
	"net/http"
	"os"
	"os/exec"
	"strings"
	"sync"
	"time"

	"github.com/getsentry/raven-go"
	"github.com/streadway/amqp"
)

func PanicOnError(err error) {
	if err != nil {
		raven.CaptureErrorAndWait(err, nil)
		log.Panic(err)
	}
}

func PrintOnError(err error) {
	if err != nil {
		raven.CaptureError(err, nil)
		log.Println(err)
	}
}

func serialize(message Chat) ([]byte, error) {
	var b bytes.Buffer
	encoder := gob.NewEncoder(&b)
	err := encoder.Encode(message)
	return b.Bytes(), err
}

func deserialize(b []byte) (Chat, error) {
	var msg Chat
	buf := bytes.NewBuffer(b)
	decoder := gob.NewDecoder(buf)
	err := decoder.Decode(&msg)
	return msg, err
}

func get(reader io.Reader) (message string, err error) {
	message, err = bufio.NewReader(reader).ReadString('\n')
	message = strings.TrimRight(message, "\r\n")
	return
}

func reconnect(config Properties) (serverConn net.Conn, ip string) {
	fmt.Println("Trying to connect to Master Server...")
	fmt.Println("It will not possible to know other new servers until this moment.")
	fmt.Println()
	time.Sleep(1000 * time.Millisecond)
	for {
		sc, err := net.Dial("tcp", config.MasterIP+":"+config.MasterPort)
		serverConn = sc
		sW := bufio.NewWriter(serverConn)
		if err != nil {
			time.Sleep(5000 * time.Millisecond)
			continue
		} else {
			fmt.Println("Connected to Master Server!")
			fmt.Println("Now, new global servers can be known.")
			fmt.Println()

			if config.PublicServer == false {
				ip = "127.0.0.1"
				sW.WriteString(config.ThisServerName + ":" + ip + ":" +
					config.PortServers + ":" + config.PortClients + "\n")
				sW.Flush()
			} else if config.PublicServer == true {
				var buf bytes.Buffer
				resp, _ := http.Get("http://myexternalip.com/raw")
				io.Copy(&buf, resp.Body)
				resp.Body.Close()
				ip = buf.String()
				sW.WriteString(config.ThisServerName + ":" + ip + ":" +
					config.PortServers + ":" + config.PortClients + "\n")
				sW.Flush()
			}
			break
		}
	}
	return
}

func head() {
	fmt.Println(" _____________________________")
	fmt.Println("|                             |")
	fmt.Println("|     XIAOMI Chat System      |")
	fmt.Println("|  Developed by Saulo Pinedo  |")
	fmt.Println("|             ---             |")
	fmt.Println("|      Broadcast Program      |")
	fmt.Println("|_____________________________|\n")
}

func main() {

	// 0. Inicializando servicos adicionais;
	raven.SetDSN("https://277886f557384520a086cfedea9930cf@sentry.io/1831452")

	// 0.1. blabla2
	raven.SetDefaultLoggerName("saulopinedo")
	raven.SetDebug(true)
	raven.SetEnvironment("staging")
	raven.SetRelease("Xiaomi")
	raven.SetSampleRate(1.0)

	// 1. Pre-definindo as variaveis fundamentais;
	clientCount := 0
	var serverConn net.Conn
	var ip string
	var mutex sync.Mutex

	// 1.1. Associacoes entre clientes e atributos;
	nameClients := make(map[net.Conn]string)
	chanClients := make(map[net.Conn]uint32)

	// 1.2. Associacoes entre canais de mensagens e atributos;
	nameChannels := make(map[uint32]string)
	passChannels := make(map[uint32]string)

	// 1.2. Banco de enderecos de servidores;
	chanAddresses := make(map[uint32][]string)
	serverAddresses := make(map[string]string)

	// 1.2. Canais de controle;
	newConnection := make(chan net.Conn)
	deadConnection := make(chan net.Conn)

	// 1.3. Canais de mensagens;
	sysMessageGlobal := make(chan Chat)
	messageQueue := make(chan Chat)
	Message := make(chan Chat)
	commandQueue := make(chan Command)

	// 2. Lendo configuracoes;
	jsonFile, err := os.Open(`b-properties.json`)
	PanicOnError(err)
	defer jsonFile.Close()

	byteValueJSON, _ := ioutil.ReadAll(jsonFile)
	config := Properties{}
	json.Unmarshal(byteValueJSON, &config)

	channelCount := config.IDchanBegin
	nameChannels[0] = "Global"

	// 3. Preparando o cabecalho;
	cmd := exec.Command("cmd", "/c", "cls")
	cmd.Stdout = os.Stdout
	cmd.Run()
	head()

	// 4.1. Estabelendo conexao com o servico RabbitMQ;
	rabbit, err := amqp.Dial("amqp://guest:guest@localhost:5672/")
	PanicOnError(err)
	defer rabbit.Close()

	// 4.2. Dedicando canal de servico RabbitMQ;
	ch, err := rabbit.Channel()
	PanicOnError(err)
	defer ch.Close()

	// 4.3. Dedicando exchange;
	err = ch.ExchangeDeclare("syslog", "fanout", true, false, false, false, nil)
	PanicOnError(err)

	err = ch.ExchangeDeclare("msglog", "fanout", true, false, false, false, nil)
	PanicOnError(err)

	err = ch.ExchangeDeclare("setlog", "fanout", true, false, false, false, nil)
	PanicOnError(err)

	// 4.4. Dedicando filas de mensagens;
	sysqueue, err := ch.QueueDeclare("", false, false, true, false, nil)
	PanicOnError(err)

	msgqueue, err := ch.QueueDeclare("", false, false, true, false, nil)
	PanicOnError(err)

	setqueue, err := ch.QueueDeclare("", false, false, true, false, nil)
	PanicOnError(err)

	// 4.5. Criando vinculacoes;
	err = ch.QueueBind(sysqueue.Name, "", "syslog", false, nil)
	PanicOnError(err)

	err = ch.QueueBind(msgqueue.Name, "", "msglog", false, nil)
	PanicOnError(err)

	err = ch.QueueBind(setqueue.Name, "", "setlog", false, nil)
	PanicOnError(err)

	// 5. Conectando e recebendo lista estruturada de servidores do Master Server;
	go func() {
		mutex.Lock()
		serverConn, ip = reconnect(config)
		mutex.Unlock()
		for {
			var list List
			dec := gob.NewDecoder(serverConn)
			err := dec.Decode(&list)
			if err != nil && err.Error() != "gob: unknown type id or corrupted data" {
				fmt.Println("The Master Server is offline now.")
				mutex.Lock()
				serverConn, ip = reconnect(config)
				mutex.Unlock()
				continue
			} else if list.Name == nil {
				continue
			}

			for name := range serverAddresses {
				delete(serverAddresses, name)
			}
			for i := 0; i < len(list.Name); i++ {
				serverAddresses[list.Name[i]] = list.AddrS[i]
			}
			delete(serverAddresses, config.ThisServerName)
			chanAddresses[0] = list.AddrS
		}
	}()

	// 7. Recebendo mensagens estruturadas de servidores;
	msgClient, err := ch.Consume(msgqueue.Name, "", true, false, false, false, nil)
	PanicOnError(err)
	msgSystem, err := ch.Consume(sysqueue.Name, "", true, false, false, false, nil)
	PanicOnError(err)
	msgConfig, err := ch.Consume(setqueue.Name, "", true, false, false, false, nil)
	PanicOnError(err)

	// Se for uma mensagem de cliente, proceder:
	go func() {
		for d := range msgClient {
			msg, _ := deserialize(d.Body)
			Message <- msg
		}
	}()

	// Se for uma mensagem global de sistema:
	go func() {
		for d := range msgSystem {
			msg, _ := deserialize(d.Body)
			for c := range nameClients {
				if msg.Message2 != nameClients[c] {
					_, err := fmt.Fprintf(c, "system:"+msg.Message1+"\n")
					if err != nil {
						deadConnection <- c
					}
				}
			}
		}
	}()

	// Se forem atributos de canal, proceder:
	go func() {
		for d := range msgConfig {
			msg, _ := deserialize(d.Body)
			if str, ok := chanAddresses[msg.RoomID]; ok {
				str = append(str, msg.Message2)
				chanAddresses[msg.RoomID] = str
				str2 := strings.Split(msg.Message1, ":")
				nameChannels[msg.RoomID] = str2[0]
				passChannels[msg.RoomID] = str2[1]
				fmt.Println(msg) //
			} else {
				str = append(str, msg.Message2)
				chanAddresses[msg.RoomID] = str
				str2 := strings.Split(msg.Message1, ":")
				nameChannels[msg.RoomID] = str2[0]
				passChannels[msg.RoomID] = str2[1]
				fmt.Println(msg) //
			}
		}
	}()

	// 8. Preparando para receber conexoes de novos clientes;
	clientListener, err := net.Listen("tcp", ":"+config.PortClients)
	PanicOnError(err)

	// 9. Recebendo novos clientes;
	go func(cl net.Listener) {
		for {
			conn, err := cl.Accept()
			if err != nil {
				raven.CaptureError(err, nil)
				log.Println(err)
				continue
			}
			clientName, _ := get(conn)
			nameClients[conn] = clientName
			newConnection <- conn
		}
	}(clientListener)

	// 10. Qual alternativa tomar?
	go func() {
		for {
			select {
			// 10.1. Se um novo cliente se conectar, proceder:
			case conn := <-newConnection:
				fmt.Println("A new client has arrived: " + nameClients[conn])
				sysMessageGlobal <- Chat{2, nil, 0, fmt.Sprint("{System} " +
					nameClients[conn] + " is online now."), nameClients[conn]}
				chanClients[conn] = 0
				clientCount++
				time.Sleep(100 * time.Millisecond)

				// 9.1.2. Recebendo mensagens desse cliente indefinidamente;
				go func(conn net.Conn) {
					for {
						message, err := get(conn)
						if err != nil {
							break
						}
						if message[0:1] != "/" {
							// ID 0 significa um tipo de mensagem.
							messageQueue <- Chat{0, nil, chanClients[conn], message, nameClients[conn]}
						} else {
							message = strings.TrimLeft(message, "/")
							sub := strings.Split(message, " ")
							// ID nos comandos nao possuem um significado.
							commandQueue <- Command{0, conn, sub[0], sub[1:]}
						}
					}

					// 9.1.2.1. Se o loop quebrar, significa que o cliente se desconectou;
					deadConnection <- conn
				}(conn)
			// 10.2. Se existe uma mensagem para os clientes locais, proceder:
			case msg := <-Message:
				for conn := range chanClients {
					if msg.RoomID == chanClients[conn] && msg.Message2 != nameClients[conn] {
						go func(msg Chat, conn net.Conn) {
							if msg.ID == 0 {
								_, err := fmt.Fprint(conn, msg.Message2+":"+msg.Message1+"\n")
								if err != nil {
									deadConnection <- conn
								}
							} else if msg.ID == 2 {
								_, err := fmt.Fprint(conn, "system:"+msg.Message1+"\n")
								if err != nil {
									deadConnection <- conn
								}
							}
						}(msg, conn)
					}
				}

			}
		}
	}()

	go func() {
	Selection1:
		for {
			select {
			// 10.3. Se o sistema enviar uma mensagem global, proceder:
			case message := <-sysMessageGlobal:
				msg, err := serialize(message) // Implementar tratamento de erro!
				err = ch.Publish("syslog", "", false, false, amqp.Publishing{
					ContentType: "text/plain",
					Body:        msg,
				})
				PrintOnError(err)

				for c := range nameClients {
					if message.Message2 != nameClients[c] {
						_, err := fmt.Fprintf(c, "system:"+
							message.Message1+"\n")
						if err != nil {
							deadConnection <- c
						}
					}
				}
			// 10.4. Se existe um comando para ser processado, proceder:
			case cmd := <-commandQueue:
				fmt.Printf("%s sent a command.\n", nameClients[cmd.FromUser])
				switch cmd.Command {
				case "show":
					// Verificando se o comando possui mais argumentos do que o necessario:
					if len(cmd.Parameters) > 0 {
						_, err := fmt.Fprint(cmd.FromUser, "system:{System} You entered too many arguments!\n")
						if err != nil {
							deadConnection <- cmd.FromUser
						}
						continue Selection1
					}
					// Verificando se existem canais para serem exibidos:
					if len(nameChannels) == 0 {
						_, err := fmt.Fprint(cmd.FromUser, "system:{System} There is no channels available!\n")
						if err != nil {
							deadConnection <- cmd.FromUser
						}
						continue Selection1
					}
					// Enviando os canais disponiveis para o cliente:
					var b bytes.Buffer
					for i := range nameChannels {
						b.WriteString(nameChannels[i] + ":")
					}
					names := b.String()
					names = strings.TrimRight(names, ":")
					_, err := fmt.Fprint(cmd.FromUser, "show:"+names+"\n")
					if err != nil {
						deadConnection <- cmd.FromUser
					}
				case "join":
					// Verificando se o comando possui seus argumentos necessarios:
					if len(cmd.Parameters) == 0 {
						_, err := fmt.Fprint(cmd.FromUser, "system:{System} This command requires some arguments.\n")
						if err != nil {
							deadConnection <- cmd.FromUser
						}
						continue Selection1
					}
					// Verificando se o comando possui mais argumentos do que o necessario:
					if len(cmd.Parameters) > 2 {
						_, err := fmt.Fprint(cmd.FromUser, "system:{System} You entered too many arguments!\n")
						if err != nil {
							deadConnection <- cmd.FromUser
						}
						continue Selection1
					}
					// Verificando se cliente ja esta conectado ao canal:
					if cmd.Parameters[0] == nameChannels[chanClients[cmd.FromUser]] {
						_, err := fmt.Fprint(cmd.FromUser, "system:{System} You're already subscribed to this channel!\n")
						if err != nil {
							deadConnection <- cmd.FromUser
						}
						continue Selection1
					}
					// Atribuindo o canal ao cliente:
					for i := range nameChannels {
						if cmd.Parameters[0] == nameChannels[i] {
							if passChannels[i] == "" || cmd.Parameters[1] == passChannels[i] {
								// Enviar para o antigo canal:
								messageQueue <- Chat{2, nil, chanClients[cmd.FromUser],
									fmt.Sprint("{System} " + nameClients[cmd.FromUser] +
										" left your channel."), nameClients[cmd.FromUser]}
								chanClients[cmd.FromUser] = i
								// Enviar para o novo canal:
								messageQueue <- Chat{2, nil, chanClients[cmd.FromUser],
									fmt.Sprint("{System} " + nameClients[cmd.FromUser] +
										" joined your channel."), nameClients[cmd.FromUser]}
								// Enviar para o remetente do comando:
								_, err := fmt.Fprint(cmd.FromUser, "system:{System} All done!\n")
								if err != nil {
									deadConnection <- cmd.FromUser
								}
								continue Selection1
							}
						}
					}
					// Se os casos anteriores falharam, o canal nao existe:
					_, err := fmt.Fprint(cmd.FromUser, "system:{System} This channels does not exist!\n")
					if err != nil {
						deadConnection <- cmd.FromUser
					}
				case "create":
					// Verificando se o comando possui seus argumentos necessarios:
					if len(cmd.Parameters) == 0 {
						_, err := fmt.Fprint(cmd.FromUser, "system:{System} This command requires some arguments.\n")
						if err != nil {
							deadConnection <- cmd.FromUser
						}
						continue Selection1
					}
					// Verificando se o comando possui mais argumentos do que o necessario:
					if len(cmd.Parameters) > 2 {
						_, err := fmt.Fprint(cmd.FromUser, "system:{System} You entered too many arguments!\n")
						if err != nil {
							deadConnection <- cmd.FromUser
						}
						continue Selection1
					}
					// Verificando se a sala ja existe:
					for i := range nameChannels {
						if cmd.Parameters[0] == nameChannels[i] {
							_, err := fmt.Fprint(cmd.FromUser, "system:{System} This channel already does exist!\n")
							if err != nil {
								deadConnection <- cmd.FromUser
							}
							continue Selection1
						}
					}
					// Criando uma nova sala nesse servidor:
					nameChannels[channelCount] = cmd.Parameters[0]
					if len(cmd.Parameters) == 2 {
						passChannels[channelCount] = cmd.Parameters[1]
					} else {
						passChannels[channelCount] = ""
					}
					chanClients[cmd.FromUser] = channelCount
					// Notificando o cliente de que a operacao foi realizada com sucesso:
					_, err := fmt.Fprint(cmd.FromUser, "system:{System} All done! Now you are on your own channel.\n")
					if err != nil {
						deadConnection <- cmd.FromUser
					}
					// Informando aos outros servidores sobre a existencia da sala criada:
					msgByte, _ := serialize(Chat{1, nil, channelCount, nameChannels[channelCount] + ":" + passChannels[channelCount], ip + ":" + config.PortServers}) // Implementar tratamento de erro!
					err = ch.Publish("setlog", "", false, false, amqp.Publishing{
						ContentType: "text/plain",
						Body:        msgByte,
					})
					PrintOnError(err)
					channelCount++
				case "nick":
					// Verificando se o comando possui seus argumentos necessarios:
					if len(cmd.Parameters) == 0 {
						_, err := fmt.Fprint(cmd.FromUser, "system:{System} This command requires an argument!\n")
						if err != nil {
							deadConnection <- cmd.FromUser
						}
						continue Selection1
					}
					// Verificando se o comando possui mais argumentos do que o necessario:
					if len(cmd.Parameters) > 1 {
						_, err := fmt.Fprint(cmd.FromUser, "system:{System} You entered too many arguments!\n")
						if err != nil {
							deadConnection <- cmd.FromUser
						}
						continue Selection1
					}
					// Verificando se esse nome e valido:
					if cmd.Parameters[0] == nameClients[cmd.FromUser] {
						_, err := fmt.Fprint(cmd.FromUser, "system:{System} This is your name already!\n")
						if err != nil {
							deadConnection <- cmd.FromUser
						}
						continue Selection1
					}
					// Atribuindo o novo nick para o cliente:
					messageQueue <- Chat{2, nil, chanClients[cmd.FromUser],
						fmt.Sprint("{System} " + nameClients[cmd.FromUser] +
							" now is " + cmd.Parameters[0]), cmd.Parameters[0]}
					nameClients[cmd.FromUser] = cmd.Parameters[0]
					_, err := fmt.Fprint(cmd.FromUser, "system:{System} All done!\n")
					if err != nil {
						deadConnection <- cmd.FromUser
					}
				default:
					_, err := bufio.NewWriter(cmd.FromUser).WriteString("system:{System} Sorry, but this command does not exist!\n")
					if err != nil {
						deadConnection <- cmd.FromUser
					}
				}
			}
		}
	}()

	for {
		select {
		// 10.5. Se um cliente se desconectar, proceder:
		case conn := <-deadConnection:
			fmt.Println(nameClients[conn] + " is gone.")
			sysMessageGlobal <- Chat{2, nil, 0, fmt.Sprint("{System} " +
				nameClients[conn] + " is offline now."), ""}
			delete(nameClients, conn)
			delete(chanClients, conn)
			clientCount--
		// 10.6. Se existe uma mensagem para ser entregue, proceder:
		case msg := <-messageQueue:
			if msg.ID == 0 {
				fmt.Printf("%s sent a message on room [%s].\n", msg.Message2,
					nameChannels[msg.RoomID])
			}
			Message <- msg

			msgByte, _ := serialize(msg) // Implementar tratamento de erro!
			err := ch.Publish("msglog", "", false, false, amqp.Publishing{
				ContentType: "text/plain",
				Body:        msgByte,
			})
			PrintOnError(err)
		}
	}
}
