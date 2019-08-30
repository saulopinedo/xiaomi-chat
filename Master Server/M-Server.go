package main

import (
	"bufio"
	"crypto/rand"
	"encoding/gob"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math/big"
	"net"
	"os"
	"os/exec"
	"strings"
	"sync"
	"time"
)

func head() {
	fmt.Println(" _____________________________")
	fmt.Println("|                             |")
	fmt.Println("|     XIAOMI Chat System      |")
	fmt.Println("|  Developed by Saulo Pinedo  |")
	fmt.Println("|             ---             |")
	fmt.Println("|        Master Program       |")
	fmt.Println("|_____________________________|")
	fmt.Println()
}

func get(conn net.Conn) (message string, err error) {
	message, err = bufio.NewReader(conn).ReadString('\n')
	message = strings.TrimRight(message, "\r\n")
	return
}

func main() {

	// 1. Pre-definindo as variaveis fundamentais:
	servercounter := uint8(0)
	mutex := &sync.Mutex{}
	var enc *gob.Encoder

	// 1.1. Associacoes entre servidores e atributos:
	serverName := make(map[net.Conn]string)
	serverAddrS := make(map[net.Conn]string)
	serverAddrC := make(map[net.Conn]string)

	// 1.2 Canais de controle:
	newConnection := make(chan net.Conn)
	deadConnection := make(chan net.Conn)

	// 2. Lendo configuracoes:
	jsonFile, err := os.Open(`m-properties.json`)
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

	// 4. Preparando a conexao dos servidores e dos clientes:
	serverListener, err := net.Listen("tcp", ":"+config.PortServers)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	clientListener, err := net.Listen("tcp", "127.0.0.1:"+config.PortClients)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	fmt.Println("Master Server is ready!")
	fmt.Println()

	// 5. Redirecionando clientes repetidamente:
	go func(cl net.Listener) {
		for {
			conn, err := cl.Accept()
			if err != nil {
				fmt.Println(err)
				continue
			}
			clientname, _ := get(conn)
			fmt.Printf("A client has arrived: %s | ", clientname)
			fmt.Println(conn.RemoteAddr())
			fmt.Println("Trying to redirect him to an available multicast server...")

			go func(conn net.Conn, cname string) {
				for {
					if servercounter == 0 {
						_, err := fmt.Fprintf(conn, "0\n")
						if err != nil {
							fmt.Printf("The client '%s' has disconnected.\n\n", cname)
							return
						}
						time.Sleep(5000 * time.Millisecond)
						continue
					}

					n := int64(servercounter)
					nBig, _ := rand.Int(rand.Reader, big.NewInt(n))
					n = nBig.Int64()
					slot := int(n)

					i := 0
					for c := range serverAddrC {
						if i == slot {
							fmt.Fprintf(conn, "%s:%s\n", serverName[c], serverAddrC[c])
							fmt.Printf("DONE. '%s' went to %s!\n\n", cname, serverName[c])
							conn.Close()
							break
						} else {
							i++
						}
					}
					break
				}
			}(conn, clientname)
		}
	}(clientListener)

	// 6. Recebendo servidores:
	go func(sl net.Listener) {
		for {
			conn, err := serverListener.Accept()
			if err != nil {
				fmt.Println("There was an unsuccessful connection attempt.")
				fmt.Println()
				continue
			}
			newConnection <- conn
		}
	}(serverListener)

	// 7. Conectando e enviando a lista estruturada de servidores para eles proprios:
	go func() {
		for {
			select {
			case conn := <-newConnection:
				str, _ := get(conn)
				sub := strings.Split(str, ":")

				var Name, Address []string
				fmt.Printf("A multicast server has arrived: %s | %s\n\n", sub[0], sub[1])
				serverName[conn] = sub[0]
				serverAddrS[conn] = sub[1] + ":" + sub[2]
				serverAddrC[conn] = sub[1] + ":" + sub[3]
				servercounter++

				for c := range serverName {
					Name = append(Name, serverName[c])
				}
				for c := range serverAddrS {
					Address = append(Address, serverAddrS[c])
				}

				for c := range serverName {
					mutex.Lock()
					enc = gob.NewEncoder(c)
					enc.Encode(List{Name, Address})
					mutex.Unlock()
				}

				go func(c net.Conn) {
					for {
						mutex.Lock()
						enc = gob.NewEncoder(c)
						err := enc.Encode(List{nil, nil})
						mutex.Unlock()
						if err != nil {
							deadConnection <- c
							return
						}
						time.Sleep(1000 * time.Millisecond)
					}
				}(conn)
			}
			time.Sleep(500 * time.Millisecond)
		}
	}()

	for {
		select {
		case conn := <-deadConnection:
			var Name, Address []string
			fmt.Printf("The server %s is offline now.\n\n", serverName[conn])
			delete(serverName, conn)
			delete(serverAddrS, conn)
			delete(serverAddrC, conn)
			servercounter--
			conn.Close()

			for c := range serverName {
				Name = append(Name, serverName[c])
			}
			for c := range serverAddrS {
				Address = append(Address, serverAddrS[c])
			}
			for c := range serverName {
				go func(c net.Conn) {
					mutex.Lock()
					enc = gob.NewEncoder(c)
					enc.Encode(List{Name, Address})
					mutex.Unlock()
				}(c)
			}
		}
	}
}
