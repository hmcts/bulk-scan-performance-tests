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
        "total": "127",
        "ok": "127",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1375",
        "ok": "1375",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "598",
        "ok": "598",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "453",
        "ok": "453",
        "ko": "-"
    },
    "percentiles1": {
        "total": "478",
        "ok": "478",
        "ko": "-"
    },
    "percentiles2": {
        "total": "880",
        "ok": "880",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1279",
        "ok": "1279",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1356",
        "ok": "1356",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4,
        "percentage": 67
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 17
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
        "total": "0.857",
        "ok": "0.857",
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
        "total": "127",
        "ok": "127",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "413",
        "ok": "413",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "226",
        "ok": "226",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "132",
        "ok": "132",
        "ko": "-"
    },
    "percentiles1": {
        "total": "138",
        "ok": "138",
        "ko": "-"
    },
    "percentiles2": {
        "total": "276",
        "ok": "276",
        "ko": "-"
    },
    "percentiles3": {
        "total": "386",
        "ok": "386",
        "ko": "-"
    },
    "percentiles4": {
        "total": "408",
        "ok": "408",
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
        "total": "0.429",
        "ok": "0.429",
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
        "total": "542",
        "ok": "542",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1375",
        "ok": "1375",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "970",
        "ok": "970",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "340",
        "ok": "340",
        "ko": "-"
    },
    "percentiles1": {
        "total": "992",
        "ok": "992",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1184",
        "ok": "1184",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1337",
        "ok": "1337",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1367",
        "ok": "1367",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 33
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 33
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
        "total": "0.429",
        "ok": "0.429",
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
