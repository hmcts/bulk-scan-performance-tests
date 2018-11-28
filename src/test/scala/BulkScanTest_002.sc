package BulkScan.Login

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import io.gatling.core.scenario.Simulation

class BulkScan extends Simulation {

  //Script variables defined below

  val localfilepath = "/Users/jonathanmcadam/simple-gatling-tests-framework/bulk-scan-performance-tests/src/test/resources/data/zip_files/"
  val feeder = csv("/Users/jonathanmcadam/simple-gatling-tests-framework/bulk-scan-performance-tests/src/test/resources/data/zip_files/MyData.csv").queue
  val header_01 = Map("Ocp-Apim-Subscription-Key" -> "0bd0296e813e428d9e2a24ad6ef3b2c1")
  val header_02 = Map("x-ms-blob-type" -> "BlockBlob", "Content-Type" -> "application/zip")
  val httpConf = http.baseURL("https://core-api-mgmt-sprod.azure-api.net")
  val url2 = "https://bulkscansprod.blob.core.windows.net"

  object GetSasToken {

    //val header_01 = Map("Ocp-Apim-Subscription-Key" -> "b78fb11dad304396982bb647ff4d979b")
    //val httpConf = http.baseURL("https://core-api-mgmt-sprod.azure-api.net")
    //val url2 = "https://bulkscansprod.blob.core.windows.net"
    //val zipfilename = "1_24-06-2018-00-00-50.zip"
    //val localfilepath = "/Users/jonathanmcadam/simple-gatling-tests-framework/src/test/resources/data/"

    object GetSasToken {

      //val header_01 = Map("Ocp-Apim-Subscription-Key" -> "0bd0296e813e428d9e2a24ad6ef3b2c1")

      val gettoken = exec(http("001_GetToken")
        .get("/bulk-scan/token/sscs")
        .proxy(Proxy("proxyout.reform.hmcts.net", 8080))
        .headers(header_01)
        .check(jsonPath("$.sas_token").saveAs("SaS_Token")))
        .exitHereIfFailed
    }

    object SendFile {

      val FileUpload = //scenario("Bulk Scan").repeat(10) {
      //exec(_.set("fileName", zipfilename))
        exec(_.set("filepath", localfilepath))
          .feed(feeder)
          .exec(http("002_FileUpload")
            //.put(url2 + "/sscs/${zipfile}?${SaS_Token}")
            //.put(url2 + "/sscs/${zipfile}?sig=2%2FBp1DLeN8u%2BVAgjWMojnFpHTywOF6aPBfNU%2FsFi96A%3D&se=2018-10-31T10%3A01%3A36Z&sv=2018-03-28&sp=wl&sr=c")
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