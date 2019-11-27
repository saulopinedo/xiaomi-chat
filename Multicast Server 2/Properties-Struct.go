package main

// Properties structure.
type Properties struct {
	PublicServer   bool   `json:"PublicServer"`
	ThisServerName string `json:"ThisServerName"`
	PortServers    string `json:"PortServers"`
	PortClients    string `json:"PortClients"`
	MasterIP       string `json:"MasterIP"`
	MasterPort     string `json:"MasterPort"`
	IDchanBegin    uint32 `json:"idchanBegin"`
	IDchanEnd      uint32 `json:"idchanEnd"`
}
