import io.gatling.core.Predef.csv

//Script variables defined below

val ccdfilepath = "/Users/jonathanmcadam/Documents/Work/MOJ/dataForTesting/ccdCases/"
val sscsfilepath = "/Users/jonathanmcadam/Documents/Work/MOJ/dataForTesting/sscsCases/"
val ccdfeeder = csv("/Users/jonathanmcadam/Documents/Work/MOJ/dataForTesting/ccdCases/ccdData.csv")
val sscsfeeder = csv("/Users/jonathanmcadam/Documents/Work/MOJ/dataForTesting/sscsCases/sscsData.csv")
val header_01 = Map("Ocp-Apim-Subscription-Key" -> "expired-key")
