package BulkScan.Login

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import scala.concurrent.duration._
import test.scala._

class BulkScan extends Simulation {

	//Script variables defined below
	//***Copy in below values from sensitive data for running test***
	//val ccdfilepath = "{ccdCases}"
	//val sscsfilepath = "{sscsCases}"
	//val ccdfeeder = csv("{ccdData.csv}")
	//val sscsfeeder = csv("{sscsData.csv}")
	//val header_01 = Map("Ocp-Apim-Subscription-Key" -> "{token}")
	val header_02 = Map("Content-Type" -> "", "x-ms-blob-type" -> "BlockBlob", "Accept-Encoding" -> "gzip,deflate")
	val url1 = "https://core-api-mgmt-sprod.azure-api.net"
	val httpConf = http.baseURL("https://bulkscan.sprod.platform.hmcts.net")

	object GetSasToken {

			val gettoken = exec(http("001_GetToken")
				.get(url1 + "/bulk-scan/token/sscs")
				.proxy(Proxy("proxyout.reform.hmcts.net", 8080))
				.headers(header_01)
				.check(jsonPath("$.sas_token").saveAs("SaS_Token")))
				.exitHereIfFailed

				.pause(1)
		}

		object SendFile {

			val SSCSUpload = exec(_.set("sscsfilepath", sscsfilepath))
				.feed(sscsfeeder)
				.exec(http("002_SSCSFileUpload")
				.put("/sscs/${sscszipfile}?${SaS_Token}")
				.header("x-ms-blob-type", "BlockBlob")
				.header("Content-Type", "")
				.body(RawFileBody("${sscsfilepath}${sscszipfile}")
				)
			)

			.pause(1)

			val CCDUpload = exec(_.set("ccdfilepath", ccdfilepath))
				.feed(ccdfeeder)
				.exec(http("003_CCDFileUpload")
					.put("/sscs/${ccdzipfile}?$${SaS_Token}")
					.header("x-ms-blob-type", "BlockBlob")
					.header("Content-Type", "")
					.body(RawFileBody("${ccdfilepath}${ccdzipfile}")
					)
				)

			.pause(1)
		}

		val scn = scenario("Bulk Scan")
			.repeat(100)(
				exec(
					GetSasToken.gettoken,
					SendFile.SSCSUpload
					//SendFile.CCDUpload
				)
			)

		setUp(scn
			//.inject(atOnceUsers(10))
			.inject(rampUsers(1) over(1))
			.protocols(httpConf))
			.maxDuration(30 minute)

			/*.assertions(
				global.responseTime.max.lt(800),
				global.successfulRequests.percent.gt(90))*/
	}