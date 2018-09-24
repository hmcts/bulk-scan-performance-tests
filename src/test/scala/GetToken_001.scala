package BulkUpload.Login

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._


class BulkScan extends Simulation {

	val httpConf = http
    	.baseURL("https://core-api-mgmt-sprod.azure-api.net")

	object GetSasToken {

		val header_01 = Map("Ocp-Apim-Subscription-Key" -> "0bd0296e813e428d9e2a24ad6ef3b2c1")

		val gettoken = exec(http("001_GetToken")
			.get("/bulk-scan/token/sscs")
			.proxy(Proxy("proxyout.reform.hmcts.net", 8080))
			.headers(header_01)
			.check(jsonPath("$.sas_token")
				.saveAs("SaS_Token")))
	}

	object SendFile {

		val header_02 = Map("x-ms-blob-type" -> "BlockBlob")
		val header_03 = Map("Content-Type" -> "application/zip")

		val FileUpload = exec(http("002_FileUpload")
			.put("https://rpebspsprod.blob.core.windows.net/sscs/1_24-06-2018-00-00-00.zip?${SaS_Token}")
			.proxy(Proxy("proxyout.reform.hmcts.net", 8080))
			.headers(header_02)
			.headers(header_03)
			.bodyPart(RawFileBodyPart("1_24-06-2018-00-00-00.zip", "/Users/jonathanmcadam/1_24-06-2018-00-00-00.zip")
				.fileName("/Users/jonathanmcadam/1_24-06-2018-00-00-00.zip")
				.transferEncoding("binary")).asMultipartForm
		)
	}
  
	val scn = scenario("Bulk Upload").exec(GetSasToken.gettoken, SendFile.FileUpload)
	setUp(scn.inject(atOnceUsers(1)).protocols(httpConf))
}