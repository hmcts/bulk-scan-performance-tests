package BulkScan.Login

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import scala.concurrent.duration._

class BulkScan extends Simulation {

	//Script variables defined below
	val localfilepath = "/Users/jonathanmcadam/simple-gatling-tests-framework/bulk-scan-performance-tests/src/test/resources/data/zip_files/"
	val feeder = csv("/Users/jonathanmcadam/simple-gatling-tests-framework/bulk-scan-performance-tests/src/test/resources/data/zip_files/MyData.csv").queue
	val header_01 = Map("Ocp-Apim-Subscription-Key" -> "b78fb11dad304396982bb647ff4d979b")
	val header_02 = Map("x-ms-blob-type" -> "BlockBlob", "Content-Type" -> "application/zip")
	val httpConf = http.baseURL("https://core-api-mgmt-sprod.azure-api.net")
	val url2 = "https://bulkscan.sprod.platform.hmcts.net"

		object GetSasToken {

			val gettoken = exec(http("001_GetToken")
				.get("/bulk-scan/token/sscs")
				.proxy(Proxy("proxyout.reform.hmcts.net", 8080))
				.headers(header_01)
				.check(jsonPath("$.sas_token").saveAs("SaS_Token")))
				.exitHereIfFailed
		}

		object SendFile {

			val FileUpload = exec(_.set("filepath", localfilepath))
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
			.repeat(1)(
				exec(GetSasToken.gettoken, SendFile.FileUpload))

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