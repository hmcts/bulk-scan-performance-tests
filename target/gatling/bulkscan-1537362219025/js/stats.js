var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "14",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "405",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "57597",
        "ok": "57597",
        "ko": "38027"
    },
    "meanResponseTime": {
        "total": "7390",
        "ok": "7842",
        "ko": "6338"
    },
    "standardDeviation": {
        "total": "16085",
        "ok": "16818",
        "ko": "14172"
    },
    "percentiles1": {
        "total": "418",
        "ok": "421",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1155",
        "ok": "2561",
        "ko": "0"
    },
    "percentiles3": {
        "total": "39006",
        "ok": "44875",
        "ko": "28520"
    },
    "percentiles4": {
        "total": "53879",
        "ok": "55053",
        "ko": "36126"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 10,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4,
        "percentage": 20
    },
    "group4": {
        "name": "failed",
        "count": 6,
        "percentage": 30
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.328",
        "ok": "0.23",
        "ko": "0.098"
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
        "total": "405",
        "ok": "405",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "452",
        "ok": "452",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "420",
        "ok": "420",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "percentiles1": {
        "total": "418",
        "ok": "418",
        "ko": "-"
    },
    "percentiles2": {
        "total": "422",
        "ok": "422",
        "ko": "-"
    },
    "percentiles3": {
        "total": "443",
        "ok": "443",
        "ko": "-"
    },
    "percentiles4": {
        "total": "450",
        "ok": "450",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 10,
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
        "total": "0.164",
        "ok": "0.164",
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
        "ok": "4",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "3264",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "57597",
        "ok": "57597",
        "ko": "38027"
    },
    "meanResponseTime": {
        "total": "14361",
        "ok": "26396",
        "ko": "6338"
    },
    "standardDeviation": {
        "total": "20500",
        "ok": "22538",
        "ko": "14172"
    },
    "percentiles1": {
        "total": "1632",
        "ok": "22362",
        "ko": "0"
    },
    "percentiles2": {
        "total": "30193",
        "ok": "42918",
        "ko": "0"
    },
    "percentiles3": {
        "total": "48790",
        "ok": "54661",
        "ko": "28520"
    },
    "percentiles4": {
        "total": "55836",
        "ok": "57010",
        "ko": "36126"
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
        "count": 4,
        "percentage": 40
    },
    "group4": {
        "name": "failed",
        "count": 6,
        "percentage": 60
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.164",
        "ok": "0.066",
        "ko": "0.098"
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
