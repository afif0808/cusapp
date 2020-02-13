package main

import (
	"log"
	"net/http"
)

func main() {
	fileServer := http.FileServer(http.Dir("../src/cusapp"))
	http.Handle("/", fileServer)
	log.Println("Listening...")
	http.ListenAndServe(":321", nil)
}
