package main

import "net"

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
	FromUser   net.Conn
	Command    string
	Parameters []string
}

// List of servers structure.
type List struct {
	Name  []string
	AddrS []string
}
