var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "433",
        "ok": "433",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6812",
        "ok": "6812",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3623",
        "ok": "3623",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3190",
        "ok": "3190",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3623",
        "ok": "3623",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5217",
        "ok": "5217",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6493",
        "ok": "6493",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6748",
        "ok": "6748",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 50
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
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "0.25",
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
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "433",
        "ok": "433",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "433",
        "ok": "433",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "433",
        "ok": "433",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "433",
        "ok": "433",
        "ko": "-"
    },
    "percentiles2": {
        "total": "433",
        "ok": "433",
        "ko": "-"
    },
    "percentiles3": {
        "total": "433",
        "ok": "433",
        "ko": "-"
    },
    "percentiles4": {
        "total": "433",
        "ok": "433",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
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
        "total": "0.125",
        "ok": "0.125",
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
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "6812",
        "ok": "6812",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6812",
        "ok": "6812",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6812",
        "ok": "6812",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6812",
        "ok": "6812",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6812",
        "ok": "6812",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6812",
        "ok": "6812",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6812",
        "ok": "6812",
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
        "total": "0.125",
        "ok": "0.125",
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
