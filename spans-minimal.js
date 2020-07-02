const operation1 = { operationName: "/", serviceName: "app-frontend", type: 'jaegerService' };
const operation2 = { operationName: "/", serviceName: "app-api", type: 'jaegerService' };

const span1 = {
  "@timestamp": 1593087220559,
  "traceID": "c2c30522d3904eef",
  "JaegerTag": {
    "test-tag": 666,
    "requestId": "4e47fdf0-b6dd-11ea-bec9-a58134683806",
  },
  "process": {
    "tag": {
      "process-tag-test": 333
    },
    "serviceName": "app-api",
    "tags": []
  },
  "references": [],
  "startTimeMillis": 1593087220559,
  "flags": 1,
  "operationName": "/",
  "type": "jaegerSpan",
  "spanID": "c2c30522d3904eef",
  "duration": 37000,
  "startTime": 1593087220559000,
  "logs": []
};

const span2 = {
  "@timestamp": 1593087220582,
  "traceID": "c2c30522d3904eef",
  "JaegerTag": {
    "test-tag": 123,
    "requestId": "4e4b8060-b6dd-11ea-ba61-85232346577a",
  },
  "process": {
    "tag": {
      "process-tag-test": 999
    },
    "serviceName": "app-frontend",
    "tags": []
  },
  "references": [
    {
      "traceID": "c2c30522d3904eef",
      "spanID": "c2c30522d3904eef",
      "refType": "CHILD_OF"
    }
  ],
  "startTimeMillis": 1593087220582,
  "flags": 1,
  "operationName": "/",
  "type": "jaegerSpan",
  "spanID": "37c36c9d815f695",
  "duration": 1111,
  "startTime": 1593087220582000,
  "logs": []
};

module.exports = { operation1, operation2, span1, span2 };
