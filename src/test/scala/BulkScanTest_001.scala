package BulkScan.Login

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.ChainBuilder
import java.util.concurrent.atomic.AtomicBoolean

class BulkScan extends Simulation {

	//Script variables defined below
	val httpConf = http.baseURL("https://core-api-mgmt-sprod.azure-api.net")
	val url2 = "https://bulkscansprod.blob.core.windows.net"
	val zipfilename = "1_24-06-2018-00-00-50.zip" //should no longer be required as controlled by csv
	val localfilepath = "/Users/jonathanmcadam/simple-gatling-tests-framework/src/test/resources/data/"

	object GetSasToken {

		val header_01 = Map("Ocp-Apim-Subscription-Key" -> "0bd0296e813e428d9e2a24ad6ef3b2c1")

		val gettoken = exec(http("001_GetToken")
			.get("/bulk-scan/token/sscs")
			.proxy(Proxy("proxyout.reform.hmcts.net", 8080))
			.headers(header_01)
			.check(jsonPath("$.sas_token").saveAs("SaS_Token")))
			.exitHereIfFailed
	}

	object SendFile {

			val feeder = csv("BulkScan_Feeder_001.csv").random

			val header_02 = Map("x-ms-blob-type" -> "BlockBlob", "Content-Type" -> "application/zip")

			val FileUpload = //scenario("Bulk Scan").repeat(10) {
			//exec(_.set("fileName", zipfilename))
				exec(_.set("filepath", localfilepath))
					.feed(feeder)
					.exec(http("002_FileUpload")
						.put(url2 + "/sscs/${zipfile}?${SaS_Token}")
						.proxy(Proxy("proxyout.reform.hmcts.net", 8080))
						.headers(header_02)
						.bodyPart(RawFileBodyPart("${zipfile}", "${filepath}${zipfile}")
							.fileName("${filepath}${zipfile}")
							.transferEncoding("binary")).asMultipartForm
						.check(status.is(201))
					)
	}

	val scn = scenario("Bulk Scan")
		.exec(GetSasToken.gettoken, SendFile.FileUpload)

	setUp(scn
			//.inject(atOnceUsers(10))
			.inject(rampUsers(1) over(1))
			.protocols(httpConf))
			.maxDuration(1 minute)

		.assertions(
			global.responseTime.max.lt(800),
			global.successfulRequests.percent.gt(90)
	)
}

/*

Create more zips - done
Parameterise URLs - done
Parameterise zip data - done
Parameterise filename & path - done
Transaction naming - tbc
Check if possible to remove zip file via script, to make test repeatable - not possible via API
Create feeder & csv file for multiple users/data - csv to check
Scenario setup, duration??

 */