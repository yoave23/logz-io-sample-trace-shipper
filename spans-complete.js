const operation1 = { operationName: "/", serviceName: "app-frontend", type: 'jaegerService' };
const operation2 = { operationName: "/", serviceName: "app-api", type: 'jaegerService' };

const span1 = {
  "@timestamp": 1593087220582,
  "traceID": "c2c30522d3904eef",
  "JaegerTag": {
    "http@status_code": 200,
    "http@method": "GET",
    "requestId": "4e4b8060-b6dd-11ea-ba61-85232346577a",
    "internal@span@format": "jaeger",
    "http@url": "/"
  },
  "process": {
    "tag": {
      "environment": "prod",
      "hostname": "app-frontend-6997974c68-q7w69",
      "jaeger@version": "Node-3.17.2",
      "ip": "10.2.17.165",
      "client-uuid": "4529ec83-b1c6-4c9e-8a7d-bd6ae50f9f43",
      "region": "us-east-1",
      "version": "50c1db668870615162fde8dc07b64f6d14204bdc"
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
  "tags": [
    "_logz_http_bulk_json_8070"
  ],
  "spanID": "37c36c9d815f695",
  "duration": 1111,
  "startTime": 1593087220582000,
  "logs": []
};

const span2 = {
  "@timestamp": 1593087220559,
  "traceID": "c2c30522d3904eef",
  "JaegerTag": {
    "http@status_code": 200,
    "sampler@type": "const",
    "environment": "prod",
    "sampler@param": true,
    "http@method": "get",
    "requestId": "4e47fdf0-b6dd-11ea-bec9-a58134683806",
    "region": "us-east-1",
    "internal@span@format": "jaeger",
    "version": "e76412e25e66350e173bd4ca62a0a8656ff79775",
    "http@url": "/"
  },
  "process": {
    "tag": {
      "environment": "prod",
      "hostname": "app-6746fcb5dc-f5tc9",
      "jaeger@version": "Node-3.17.2",
      "ip": "10.2.65.200",
      "client-uuid": "bc619771-36e9-41f2-9869-ecfc71444ba9",
      "region": "us-east-1",
      "version": "e76412e25e66350e173bd4ca62a0a8656ff79775"
    },
    "serviceName": "app-api",
    "tags": []
  },
  "references": [],
  "startTimeMillis": 1593087220559,
  "flags": 1,
  "operationName": "/",
  "type": "jaegerSpan",
  "tags": [
    "_logz_http_bulk_json_8070"
  ],
  "spanID": "c2c30522d3904eef",
  "duration": 37000,
  "startTime": 1593087220559000,
  "logs": []
};

const span3 = {
  "@timestamp": 1593088575827,
  "traceID": "15acc51745a6949b",
  "JaegerTag": {
    "http@status_code": 200,
    "http@method": "GET",
    "requestId": "7615a140-b6e0-11ea-b97e-d3d1342cb35e",
    "internal@span@format": "jaeger",
    "http@url": "/"
  },
  "process": {
    "tag": {
      "environment": "prod",
      "hostname": "app-frontend-9bbd655d-2rntp",
      "jaeger@version": "Node-3.17.2",
      "ip": "172.19.34.38",
      "client-uuid": "bc7e1e1f-0408-4fbf-ad7a-7501e911277b",
      "region": "westeurope",
      "version": "50c1db668870615162fde8dc07b64f6d14204bdc"
    },
    "serviceName": "app-frontend",
    "tags": []
  },
  "references": [
    {
      "traceID": "15acc51745a6949b",
      "spanID": "15acc51745a6949b",
      "refType": "CHILD_OF"
    }
  ],
  "startTimeMillis": 1593088575827,
  "flags": 1,
  "operationName": "/",
  "type": "jaegerSpan",
  "tags": [
    "_logz_http_bulk_json_8070"
  ],
  "spanID": "9f5f7db590aab12c",
  "duration": 2000,
  "startTime": 1593088575827000,
  "logs": []
};

const span4 = {
  "@timestamp": 1593088575821,
  "traceID": "15acc51745a6949b",
  "JaegerTag": {
    "http@status_code": 200,
    "sampler@type": "const",
    "environment": "prod",
    "sampler@param": true,
    "http@method": "get",
    "requestId": "76148fd0-b6e0-11ea-8bba-0945885e2da6",
    "region": "westeurope",
    "internal@span@format": "jaeger",
    "version": "e76412e25e66350e173bd4ca62a0a8656ff79775",
    "http@url": "/"
  },
  "process": {
    "tag": {
      "environment": "prod",
      "hostname": "app-646fb65f69-dvmnt",
      "jaeger@version": "Node-3.17.2",
      "ip": "172.19.32.63",
      "client-uuid": "be5e94ec-ae49-47d6-af8c-49dc437ee082",
      "region": "westeurope",
      "version": "e76412e25e66350e173bd4ca62a0a8656ff79775"
    },
    "serviceName": "app-api",
    "tags": []
  },
  "references": [],
  "startTimeMillis": 1593088575821,
  "flags": 1,
  "operationName": "/",
  "type": "jaegerSpan",
  "tags": [
    "_logz_http_bulk_json_8070"
  ],
  "spanID": "15acc51745a6949b",
  "duration": 10000,
  "startTime": 1593088575821000,
  "logs": []
};

module.exports = { operation1, operation2, data };
