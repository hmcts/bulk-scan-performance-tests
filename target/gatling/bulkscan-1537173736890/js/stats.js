var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1440",
        "ok": "1440",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "593",
        "ok": "593",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "415",
        "ok": "415",
        "ko": "-"
    },
    "percentiles1": {
        "total": "554",
        "ok": "554",
        "ko": "-"
    },
    "percentiles2": {
        "total": "596",
        "ok": "596",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1231",
        "ok": "1231",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1398",
        "ok": "1398",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5,
        "percentage": 83
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 17
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.75",
        "ok": "0.75",
        "ko": "-"
    }
},
contents: {
"req_001-gettoken-86e8c": {
        type: "REQUEST",
        name: "001_GetToken",
path: "001_GetToken",
pathFormatted: "req_001-gettoken-86e8c",
stats: {
    "name": "001_GetToken",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "605",
        "ok": "605",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "337",
        "ok": "337",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "198",
        "ok": "198",
        "ko": "-"
    },
    "percentiles1": {
        "total": "272",
        "ok": "272",
        "ko": "-"
    },
    "percentiles2": {
        "total": "439",
        "ok": "439",
        "ko": "-"
    },
    "percentiles3": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "percentiles4": {
        "total": "598",
        "ok": "598",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.375",
        "ok": "0.375",
        "ko": "-"
    }
}
    },"req_002-fileupload-53d76": {
        type: "REQUEST",
        name: "002_FileUpload",
path: "002_FileUpload",
pathFormatted: "req_002-fileupload-53d76",
stats: {
    "name": "002_FileUpload",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "540",
        "ok": "540",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1440",
        "ok": "1440",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "849",
        "ok": "849",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "418",
        "ok": "418",
        "ko": "-"
    },
    "percentiles1": {
        "total": "567",
        "ok": "567",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1004",
        "ok": "1004",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1353",
        "ok": "1353",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1423",
        "ok": "1423",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2,
        "percentage": 67
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 33
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.375",
        "ok": "0.375",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
