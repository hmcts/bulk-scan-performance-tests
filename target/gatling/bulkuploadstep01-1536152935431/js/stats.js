var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "21",
        "ok": "10291",
        "ko": "21"
    },
    "maxResponseTime": {
        "total": "10291",
        "ok": "10291",
        "ko": "21"
    },
    "meanResponseTime": {
        "total": "5156",
        "ok": "10291",
        "ko": "21"
    },
    "standardDeviation": {
        "total": "5135",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "5156",
        "ok": "10291",
        "ko": "21"
    },
    "percentiles2": {
        "total": "7724",
        "ok": "10291",
        "ko": "21"
    },
    "percentiles3": {
        "total": "9777",
        "ok": "10291",
        "ko": "21"
    },
    "percentiles4": {
        "total": "10188",
        "ok": "10291",
        "ko": "21"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 50
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.182",
        "ok": "0.091",
        "ko": "0.091"
    }
},
contents: {
"req_gettoken-9f3c0": {
        type: "REQUEST",
        name: "GetToken",
path: "GetToken",
pathFormatted: "req_gettoken-9f3c0",
stats: {
    "name": "GetToken",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "10291",
        "ok": "10291",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10291",
        "ok": "10291",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "10291",
        "ok": "10291",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "10291",
        "ok": "10291",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10291",
        "ok": "10291",
        "ko": "-"
    },
    "percentiles3": {
        "total": "10291",
        "ok": "10291",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10291",
        "ok": "10291",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.091",
        "ok": "0.091",
        "ko": "-"
    }
}
    },"req_fileupload-5f7a0": {
        type: "REQUEST",
        name: "FileUpload",
path: "FileUpload",
pathFormatted: "req_fileupload-5f7a0",
stats: {
    "name": "FileUpload",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "21",
        "ok": "-",
        "ko": "21"
    },
    "maxResponseTime": {
        "total": "21",
        "ok": "-",
        "ko": "21"
    },
    "meanResponseTime": {
        "total": "21",
        "ok": "-",
        "ko": "21"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "21",
        "ok": "-",
        "ko": "21"
    },
    "percentiles2": {
        "total": "21",
        "ok": "-",
        "ko": "21"
    },
    "percentiles3": {
        "total": "21",
        "ok": "-",
        "ko": "21"
    },
    "percentiles4": {
        "total": "21",
        "ok": "-",
        "ko": "21"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
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
        "count": 1,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.091",
        "ok": "-",
        "ko": "0.091"
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
