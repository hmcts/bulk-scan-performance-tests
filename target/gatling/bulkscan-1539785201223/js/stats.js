var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "13",
        "ok": "13",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "673",
        "ok": "673",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5074",
        "ok": "5074",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2322",
        "ok": "2322",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1470",
        "ok": "1470",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1896",
        "ok": "1896",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3119",
        "ok": "3119",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4965",
        "ok": "4965",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5052",
        "ok": "5052",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2,
        "percentage": 15
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 23
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8,
        "percentage": 62
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.182",
        "ok": "1.182",
        "ko": "-"
    }
},
contents: {
"req_002-fileupload-53d76": {
        type: "REQUEST",
        name: "002_FileUpload",
path: "002_FileUpload",
pathFormatted: "req_002-fileupload-53d76",
stats: {
    "name": "002_FileUpload",
    "numberOfRequests": {
        "total": "13",
        "ok": "13",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "673",
        "ok": "673",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5074",
        "ok": "5074",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2322",
        "ok": "2322",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1470",
        "ok": "1470",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1896",
        "ok": "1896",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3119",
        "ok": "3119",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4965",
        "ok": "4965",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5052",
        "ok": "5052",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2,
        "percentage": 15
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 23
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8,
        "percentage": 62
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.182",
        "ok": "1.182",
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
