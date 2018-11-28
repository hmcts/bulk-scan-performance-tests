#!/bin/sh

#INPUT_ZIP_NAME=$1
PRIVATE_KEY_FILE_NAME=/Users/jonathanmcadam/simple-gatling-tests-framework/bulk-scan-performance-tests/src/test/resources/data/test_private_key.pem
ENVELOPE_FILE_NAME=envelope.zip
SIGNATURE_FILE_NAME=signature
workingDir=/Users/jonathanmcadam/simple-gatling-tests-framework/bulk-scan-performance-tests/src/test/resources/data/
csvDataFile=/Users/jonathanmcadam/simple-gatling-tests-framework/bulk-scan-performance-tests/src/test/resources/data/zip_files/MyData.csv

#cd workingDir

while IFS=, read -r f1
do
	#cd to the working directory
	cd "$workingDir"

	INPUT_ZIP_NAME="$(echo "$f1"|tr -d '\r')"
	echo ${INPUT_ZIP_NAME}

	cp /Users/jonathanmcadam/simple-gatling-tests-framework/bulk-scan-performance-tests/src/test/resources/data/zip_files/${INPUT_ZIP_NAME} /Users/jonathanmcadam/simple-gatling-tests-framework/bulk-scan-performance-tests/src/test/resources/data/signed_zip_files/${ENVELOPE_FILE_NAME}
	cd signed_zip_files
	openssl dgst -sha256 -sign ${PRIVATE_KEY_FILE_NAME} -out ${SIGNATURE_FILE_NAME} ${ENVELOPE_FILE_NAME}
	zip -m ${INPUT_ZIP_NAME} ${ENVELOPE_FILE_NAME} ${SIGNATURE_FILE_NAME}
	cd ..

done < ${csvDataFile}
