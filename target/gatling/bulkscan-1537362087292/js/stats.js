var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1115",
        "ok": "1115",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "25868",
        "ok": "25868",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7594",
        "ok": "7594",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8681",
        "ok": "8681",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2396",
        "ok": "2396",
        "ko": "-"
    },
    "percentiles2": {
        "total": "9206",
        "ok": "9206",
        "ko": "-"
    },
    "percentiles3": {
        "total": "24139",
        "ok": "24139",
        "ko": "-"
    },
    "percentiles4": {
        "total": "25522",
        "ok": "25522",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 9,
        "percentage": 90
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.357",
        "ok": "0.357",
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
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1115",
        "ok": "1115",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1554",
        "ok": "1554",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1462",
        "ok": "1462",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "173",
        "ok": "173",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1546",
        "ok": "1546",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1548",
        "ok": "1548",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1553",
        "ok": "1553",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1554",
        "ok": "1554",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 20
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4,
        "percentage": 80
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.179",
        "ok": "0.179",
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
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3238",
        "ok": "3238",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "25868",
        "ok": "25868",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "13726",
        "ok": "13726",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8689",
        "ok": "8689",
        "ko": "-"
    },
    "percentiles1": {
        "total": "9661",
        "ok": "9661",
        "ko": "-"
    },
    "percentiles2": {
        "total": "22025",
        "ok": "22025",
        "ko": "-"
    },
    "percentiles3": {
        "total": "25099",
        "ok": "25099",
        "ko": "-"
    },
    "percentiles4": {
        "total": "25714",
        "ok": "25714",
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
        "count": 5,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.179",
        "ok": "0.179",
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
