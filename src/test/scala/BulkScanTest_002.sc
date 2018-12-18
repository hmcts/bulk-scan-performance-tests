package BulkScan.Login

  import io.gatling.core.Predef._
  import io.gatling.http.Predef._
  import scala.concurrent.duration._
  import io.gatling.core.scenario.Simulation

  class BulkScan extends Simulation {

    //Script variables defined below

    val localfilepath = "/data/zip_files/"
    val feeder = csv("/data/zip_files/MyData.csv").queue
    val header_01 = Map("Ocp-Apim-Subscription-Key" -> "EXPIRED-KEY")
    val header_02 = Map("x-ms-blob-type" -> "BlockBlob")
    val httpConf = http.baseURL("https://core-api-mgmt-sprod.azure-api.net")
    val url2 = "https://bulkscansprod.blob.core.windows.net"

    object GetSasToken {

      object GetSasToken {

        val gettoken = exec(http("001_GetToken")
          .get(httpConf + "/bulk-scan/token/sscs")
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
