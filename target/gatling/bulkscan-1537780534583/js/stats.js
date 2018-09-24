var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "19",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "942",
        "ok": "942",
        "ko": "11607"
    },
    "maxResponseTime": {
        "total": "58209",
        "ok": "58209",
        "ko": "11607"
    },
    "meanResponseTime": {
        "total": "15139",
        "ok": "15324",
        "ko": "11607"
    },
    "standardDeviation": {
        "total": "20544",
        "ok": "21061",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2569",
        "ok": "2547",
        "ko": "11607"
    },
    "percentiles2": {
        "total": "18915",
        "ok": "25055",
        "ko": "11607"
    },
    "percentiles3": {
        "total": "57801",
        "ok": "57822",
        "ko": "11607"
    },
    "percentiles4": {
        "total": "58127",
        "ok": "58132",
        "ko": "11607"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5,
        "percentage": 25
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 14,
        "percentage": 70
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 5
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.333",
        "ok": "0.317",
        "ko": "0.017"
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
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "942",
        "ok": "942",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2590",
        "ok": "2590",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1749",
        "ok": "1749",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "803",
        "ok": "803",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1744",
        "ok": "1744",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2544",
        "ok": "2544",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2571",
        "ok": "2571",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2586",
        "ok": "2586",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5,
        "percentage": 50
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5,
        "percentage": 50
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.167",
        "ok": "0.167",
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
        "total": "10",
        "ok": "9",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "1749",
        "ok": "1749",
        "ko": "11607"
    },
    "maxResponseTime": {
        "total": "58209",
        "ok": "58209",
        "ko": "11607"
    },
    "meanResponseTime": {
        "total": "28528",
        "ok": "30408",
        "ko": "11607"
    },
    "standardDeviation": {
        "total": "22020",
        "ok": "22437",
        "ko": "0"
    },
    "percentiles1": {
        "total": "26224",
        "ok": "40840",
        "ko": "11607"
    },
    "percentiles2": {
        "total": "46322",
        "ok": "46393",
        "ko": "11607"
    },
    "percentiles3": {
        "total": "58016",
        "ok": "58037",
        "ko": "11607"
    },
    "percentiles4": {
        "total": "58170",
        "ok": "58175",
        "ko": "11607"
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
        "count": 9,
        "percentage": 90
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 10
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.167",
        "ok": "0.15",
        "ko": "0.017"
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
