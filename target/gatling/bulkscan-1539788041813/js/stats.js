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
        "total": "775",
        "ok": "775",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14686",
        "ok": "14686",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2986",
        "ok": "2986",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3934",
        "ok": "3934",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1757",
        "ok": "1757",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2254",
        "ok": "2254",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9227",
        "ok": "9227",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13594",
        "ok": "13594",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 10
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8,
        "percentage": 80
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.556",
        "ok": "0.556",
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
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "775",
        "ok": "775",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14686",
        "ok": "14686",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2986",
        "ok": "2986",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3934",
        "ok": "3934",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1757",
        "ok": "1757",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2254",
        "ok": "2254",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9227",
        "ok": "9227",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13594",
        "ok": "13594",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 10
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8,
        "percentage": 80
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.556",
        "ok": "0.556",
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
