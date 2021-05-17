const { readFile } = require('fs');
const path = require('path');
const readline = require('readline');
const json = require('./test2.json');

const getTokenFromUser = () => {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Token please:', (answer) => {
      rl.close();

      resolve(answer);
    });
  });
};

const getTraces = () => {
  return new Promise((resolve, reject) => {
    const spansPath = path.join(__dirname, './original_spans.ndjson');
    console.log('getting original traces from', spansPath);

    readFile(spansPath, "utf8", (err, json) => {
      if (err) {
        console.log('err', err);

        reject(err);
      }
      resolve(json);
    });
  });
};

const getRandomString = (length) => [...Array(length)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

const send = (spans = [], token, host) => {
  return new Promise((resolve, reject) => {
    const loggerOptions = {
      type: "sample-spans",
      host,
      debug: true,
      amount: json.length,
      sendIntervalMs: 1000,
      token
    };

    const logger = require('logzio-nodejs').createLogger(loggerOptions);


    const services = {};

    console.log(`sending spans to host ${loggerOptions.host}:\n`);

    const randomTraceId = getRandomString(16);

    const originalTraceId = json[0].traceID;

    const dateDelta = new Date().getTime() - 1619958636557;
    console.log(json);

    json.forEach((trace, i) => {
      trace.traceID = randomTraceId;
      if (trace.spanID === originalTraceId) trace.spanID = randomTraceId;
      if (trace.references.length === 1) {
        if (trace.references[0].traceID === originalTraceId) trace.references[0].traceID = randomTraceId;
        if (trace.references[0].spanID === originalTraceId) trace.references[0].spanID = randomTraceId;
      }

      const operationName = trace.operationName;
      const serviceName = trace.process.serviceName;

      if (!(services[serviceName] && services[serviceName] === operationName)) {
        services[serviceName] = operationName;

        const operation = { operationName, serviceName, type: 'jaegerService' };

        console.log('logging operation', operation);

        logger.log(operation);
      }

      trace.startTimeMillis += dateDelta;
      trace.startTime += (dateDelta * 1000);

      logger.log(trace);


    });

    logger.sendAndClose((err, res) => {
      resolve(true);
    });

    console.log(`spans with traceId: ${randomTraceId} sent to `, JSON.stringify(json, null, 2));
  });
};

module.exports = { getTokenFromUser, getTraces, send };