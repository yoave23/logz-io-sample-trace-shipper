const operation1 = { operationName: "/", serviceName: "app-frontend", type: 'jaegerService' };
const operation2 = { operationName: "/", serviceName: "app-api", type: 'jaegerService' };

const span1 = {
  "@timestamp": 1593606171838,
  "traceID": "624886af404e4fed",
  "JaegerTag": {
    "requestId": "9558fde0-bb95-11ea-9943-9d86bea3688e",
  },
  "process": {
    "tag": {},
    "serviceName": "app-api",
    "tags": []
  },
  "references": [],
  "startTimeMillis": 1593606171838,
  "flags": 1,
  "operationName": "/",
  "type": "jaegerSpan",
  "spanID": "624886af404e4fed",
  "duration": 10000,
  "startTime": 1593606171838000,
  "logs": []
};

const span2 = {
  "@timestamp": 1593606171846,
  "traceID": "624886af404e4fed",
  "JaegerTag": {
    "requestId": "955a3660-bb95-11ea-a8dd-ef95755f3841",
  },
  "process": {
    "tag": {},
    "serviceName": "app-frontend",
    "tags": []
  },
  "references": [
    {
      "traceID": "624886af404e4fed",
      "spanID": "624886af404e4fed",
      "refType": "CHILD_OF"
    }
  ],
  "startTimeMillis": 1593606171846,
  "flags": 1,
  "operationName": "/",
  "type": "jaegerSpan",
  "spanID": "98c1993524d9cda3",
  "duration": 1000,
  "startTime": 1593606171846000,
  "logs": []
};

const span3 = {
  "@timestamp": 1593606171722,
  "traceID": "758bceda1b2b831b",
  "JaegerTag": {
    "requestId": "95474aa0-bb95-11ea-8d41-09ece2a6caac",
  },
  "process": {
    "tag": {},
    "serviceName": "app-api",
    "tags": []
  },
  "references": [],
  "startTimeMillis": 1593606171722,
  "flags": 1,
  "operationName": "/",
  "type": "jaegerSpan",
  "spanID": "758bceda1b2b831b",
  "duration": 3000,
  "startTime": 1593606171722000,
  "logs": []
};

const span4 = {
  "@timestamp": 1593606171725,
  "traceID": "758bceda1b2b831b",
  "JaegerTag": {
    "requestId": "9547bfd0-bb95-11ea-b2e3-c942ddd776d3",
  },
  "process": {
    "tag": {},
    "serviceName": "app-frontend",
    "tags": []
  },
  "references": [
    {
      "traceID": "758bceda1b2b831b",
      "spanID": "758bceda1b2b831b",
      "refType": "CHILD_OF"
    }
  ],
  "startTimeMillis": 1593606171725,
  "flags": 1,
  "operationName": "/",
  "type": "jaegerSpan",
  "spanID": "ce47454819fe65d8",
  "duration": 1000,
  "startTime": 1593606171725000,
  "logs": []
};

module.exports = { span1, span2, span3, span4, operation1, operation2 };
