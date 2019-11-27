package main

import (
	"net"

	"github.com/gorilla/websocket"
)

// Chat structure.
type Chat struct {
	ID       uint32
	FromUser net.Conn
	RoomID   uint32
	Message1 string
	Message2 string
}

// Command structure.
type Command struct {
	ID         uint32
	FromUser   *websocket.Conn
	Command    string
	Parameters []string
}

// List of servers structure.
type List struct {
	Name  []string
	AddrS []string
}
