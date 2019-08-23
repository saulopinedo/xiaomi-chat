package main

// Properties structure.
type Properties struct {
	PublicServer     bool
	ThisServerName   string
	PortServers      string
	PortClients      string
	MasterIP         string
	MasterPort       string
	idchanBegin      uint32
	idchanEnd        uint32
	ConnectionString string
}
