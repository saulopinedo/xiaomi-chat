package main

// Properties structure.
type Properties struct {
	PublicServer     bool
	PortServers      string
	PortClients      string
	ConnectionString string
}

// Data structure
type Data struct {
	A map[string]string
	B map[string]string
	C uint8
}
