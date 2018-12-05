#---- DECLARE VARIABLES HERE ----#

workingDir=/Users/jonathanmcadam/simple-gatling-tests-framework/bulk-scan-performance-tests/src/test/resources/data/
zipLocation=/Users/jonathanmcadam/simple-gatling-tests-framework/bulk-scan-performance-tests/src/test/resources/data/zip_files/
pdfFile1=1111001.pdf
pdfFile2=1111002.pdf
pdfLocation=/Users/jonathanmcadam/simple-gatling-tests-framework/bulk-scan-performance-tests/src/test/resources/data/
csvFile=CaseListData_05122018.csv
jurisdiction=SSCS
csvDataFile=/Users/jonathanmcadam/simple-gatling-tests-framework/bulk-scan-performance-tests/src/test/resources/data/zip_files/MyData.csv

#---- END OF VARIABLE DECLARATION ----#

#create a unique int that increments through each loop
var=1

while IFS=, read -r f1
do
	#cd to the working directory
	cd "$workingDir"

	#print the case number from each row
	#echo "The case number from the CSV is ${f1} that we are using"

	#create the unique folder name using the looped var and required folder structure name
	#case=$(printf ${f1})
	case="$(echo "$f1"|tr -d '\r')"
	folder="_05-12-2018-00-00-00"
	caseFolder=$var$folder

	#create the directory for each zip file using mkdir
	mkdir "${caseFolder}"
	echo "Created dir with name $caseFolder"

	#cd into the new directory
	cd "${caseFolder}"

	#create the metadata.json file with the required content (template and case number var)
	cat >./metadata.json <<EOF
	{
	  "case_number": "${case}",
	  "jurisdiction": "${jurisdiction}",
	  "classification": "exception",
	  "po_box": "SSCSPO",
	  "delivery_date": "23-06-2018 00:00:00.000000",
	  "opening_date": "24-06-2018 00:00:00.000000",
	  "zip_file_createddate": "24-02-2018 00:00:00.000000",
	  "zip_file_name": "${caseFolder}.zip",
	  "scannable_items": [
	    {
	        "document_control_number": "1111001",
	        "document_type": "SSCS1",
	        "scanning_date": "24-06-2018 00:00:00.000000",
	        "manual_intervention": "string",
	        "next_action": "forward",
	        "next_action_date": "25-06-2018 00:00:00.000000",
	        "file_name": "1111001.pdf",
	        "notes": ""
	      },
    	{
	        "document_control_number": "1111002",
	        "document_type": "SSCS2",	        
	        "scanning_date": "24-06-2018 00:00:00.000000",
	        "manual_intervention": "string",
	        "next_action": "forward",
	        "next_action_date": "25-06-2018 00:00:00.000000",
	        "file_name": "1111002.pdf",
	        "notes": "Cheque will be forwarded to court to bank it"
      	}
	  ],
	  "payments": [
	      {
	        "document_control_number": "1111001",
	        "method": "Cheque",
	        "amount": "100.00",
	        "currency": "GBP",
	        "account_number": "11223344",
	        "payment_instrument_number": "1000000",
	        "sort_code": "112233"
	      }
	  ],
	  "non_scannable_items": [
	      {
	        "item_type": "CD",
	       	"document_control_number": "1111003",
	        "notes": "4GB USB memory stick"
	      }
	  ]
	}
EOF

	#copy the required PDF files into the new dir
	cp ${pdfLocation}${pdfFile1} ${pdfFile1}
	cp ${pdfLocation}${pdfFile2} ${pdfFile2}

	#zip the folder
	#zip -r ${caseFolder}.zip ${caseFolder}
	zip -r ${caseFolder}.zip ${pdfFile1} ${pdfFile2} metadata.json

	#move the zip file to a separate folder to collate all data in one location
	mv ${caseFolder}.zip ${zipLocation}

	#move back up a dir
	cd ..

	#remove the zip folder we created earlier as we no longer require them
	rm -rf ${caseFolder}

	#add the zip file name to the csv data file MyData.csv
	echo ${caseFolder}.zip >> $csvDataFile

	#increase the value of i
	var=$((var+1))

done < ${csvFile}
