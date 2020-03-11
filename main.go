package main

import (
	"encoding/json"
	"net/http"
	"os"
)

func main() {
	fileServer := http.FileServer(http.Dir("../src/cusapp"))
	http.Handle("/", fileServer)
	http.HandleFunc("/company/information", EditCompanyInformation)
	http.ListenAndServe(":321", nil)
}

// EditCompanyInformation() edits company information in '/json_database/company_info.json'
func EditCompanyInformation(w http.ResponseWriter, r *http.Request) {
	// allowing POST method only
	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	// create or overwrite company_info.json
	companyInformationFile, createErr := os.Create("../src/cusapp/json_database/company_info.json")
	if createErr != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	defer companyInformationFile.Close()

	// read post form containing a new company information
	companyInformation := map[string]interface{}{}
	json.NewDecoder(r.Body).Decode(&companyInformation)

	// write new company information to 'company_info.json' file
	json.NewEncoder(companyInformationFile).Encode(companyInformation)
}
