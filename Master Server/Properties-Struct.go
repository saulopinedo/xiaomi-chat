package main

// Properties structure.
type Properties struct {
	PublicServer bool   `json:"PublicServer"`
	PortServers  string `json:"PortServers"`
	PortClients  string `json:"PortClients"`
}

// Data structure
type Data struct {
	A map[string]string
	B map[string]string
	C uint8
}
