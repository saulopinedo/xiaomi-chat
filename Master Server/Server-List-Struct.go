package main

// List of servers structure.
type List struct {
	Name  []string
	AddrS []string
}

type webMessage struct {
	msgType int
	msg     []byte
}
