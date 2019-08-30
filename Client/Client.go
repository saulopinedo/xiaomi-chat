package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net"
	"os"
	"os/exec"
	"strings"
	"time"
)

func get(reader io.Reader) (message string, err error) {
	message, err = bufio.NewReader(reader).ReadString('\n')
	message = strings.TrimRight(message, "\r\n")
	return
}

func connect(config Properties, cname string) (name, addr string) {
	var server string
	fmt.Println("Trying to connect to Master Server, hold on...")
	time.Sleep(1000 * time.Millisecond)
Connect:
	for {
		serverConn, err := net.Dial("tcp", config.MasterIP+":"+config.MasterPort)
		if err != nil {
			time.Sleep(5000 * time.Millisecond)
			continue
		}
		fmt.Fprintf(serverConn, cname+"\n")

		fmt.Println("Connection established! Getting a new server address...")
		time.Sleep(1000 * time.Millisecond)
		for {
			server, err = get(serverConn)
			if err != nil {
				fmt.Println("The connection to Master Server was lost!")
				fmt.Println()
				fmt.Println("Trying to connect to Master Server, hold on...")
				continue Connect
			}
			if server == "0" {
				time.Sleep(5000 * time.Millisecond)
				continue
			}
			sub := strings.Split(server, ":")
			name = sub[0]
			addr = sub[1] + ":" + sub[2]
			fmt.Printf("Got it! %s | %s\n", name, addr)
			fmt.Println()
			serverConn.Close()
			break
		}
		break
	}
	return
}

func check(err error, sname, cname string, config Properties) net.Conn {
	if err != nil {
		fmt.Printf("The server '%s' is now offline. \n", sname)
		servername, serveraddr := connect(config, cname)
		serverconn, err := net.Dial("tcp", serveraddr)
		if err != nil {
			fmt.Printf("The target server '%s' is not online. Shutting down.\n", servername)
			os.Exit(1)
		}
		fmt.Fprintf(serverconn, "%s", cname)
		return serverconn
	}
	return nil
}

func head() {
	fmt.Println(" _____________________________")
	fmt.Println("|                             |")
	fmt.Println("|     XIAOMI Chat System      |")
	fmt.Println("|  Developed by Saulo Pinedo  |")
	fmt.Println("|             ---             |")
	fmt.Println("|        Client Program       |")
	fmt.Println("|_____________________________|\n")
}

func main() {

	// 1. Pre-definindo as variaveis fundamentais;
	var sname, saddr, cname string

	// 2. Lendo configuracoes;
	jsonFile, err := os.Open(`c-properties.json`)
	if err != nil {
		panic(err)
	}
	defer jsonFile.Close()

	byteValueJSON, _ := ioutil.ReadAll(jsonFile)
	config := Properties{}
	json.Unmarshal(byteValueJSON, &config)

	// 3. Preparando o cabecalho:
	cmd := exec.Command("cmd", "/c", "cls")
	cmd.Stdout = os.Stdout
	cmd.Run()
	head()

	// 4. Perguntando ao cliente o seu nome:
	fmt.Print("What is your nickname? ")
	cname, _ = get(os.Stdin)
	fmt.Println()

	// 5. Tentando se conectar com o Master Server:
	sname, saddr = connect(config, cname)

	// 6. Tentando redirecionar a conexao:
	serverconn, err := net.Dial("tcp", saddr)
	if err != nil {
		fmt.Printf("The target server '%s' is not online. Shutting down.\n", sname)
		os.Exit(1)
	}

	// 7. Enviando para o servidor o nome do cliente:
	fmt.Fprintf(serverconn, cname+"\n")

	// 8. Enviando para o servidor a mensagem do cliente repetidamente:
	go func(conn net.Conn) {
		var message string
		for {
			message, err = get(os.Stdin)
			_, err := fmt.Fprintf(conn, message+"\n")
			if err != nil {
				conn = check(err, sname, cname, config)
				serverconn = conn
			}
		}
	}(serverconn)

	// 9. Recebendo do servidor as mensagens de sistema ou de clientes:
	for {
		message, err := get(serverconn)
		if err != nil {
			serverconn = check(err, sname, cname, config)
			continue
		}
		sub := strings.Split(message, ":")
		if sub[0] == "system" {
			fmt.Println(sub[1])
			continue
		}
		if sub[0] == "show" {
			fmt.Print("Available chat rooms: ")
			for i := 1; i < len(sub); i++ {
				if i == len(sub)-1 {
					fmt.Println(sub[i] + ".")
				} else {
					fmt.Print(sub[i] + ", ")
				}
			}
			continue
		}
		fmt.Println("<" + sub[0] + "> " + sub[1])
	}
}
