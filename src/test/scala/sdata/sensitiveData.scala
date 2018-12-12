package sdata

import io.gatling.core.Predef._

//Script variables defined below
object SensitiveData {

  val ccdfilepath = "data/ccdCases/"
  val sscsfilepath = "data/sscsCases/"
  val ccdfeeder = csv("data/ccdData.csv")
  val sscsfeeder = csv("data/sscsData.csv")
  val header_01 = Map("Ocp-Apim-Subscription-Key" -> "b78fb11dad304396982bb647ff4d979b")

}