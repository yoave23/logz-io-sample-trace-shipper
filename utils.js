const { readFile } = require('fs');
const path = require('path');
const readline = require('readline');

const getTokenFromConsole = () => {
  if (process.argv.length === 3) {
    return process.argv[2];
  }

  throw new Error('missing token');
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

const send = (traces = [], token) => {
  return new Promise((resolve, reject) => {
    console.log('sending traces');
    const logger = require('logzio-nodejs').createLogger({
      token,
      host: '172.31.0.6',
      debug: true,
      type: 'nodejs'
    });

    console.log('traces:\n');
    console.log(traces);

    traces.forEach(trace => {
      console.log('trace', trace.body);

      logger.log(trace.body);
    });
    logger.sendAndClose((err, res) => {
      resolve(true);
    });
  });
};

const getTokenFromUser = () => {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('What do you think of Node.js? ', (answer) => {
      // TODO: Log the answer in a database
      //console.log(`Thank you for your valuable feedback: ${answer}`);

      rl.close();

      resolve(answer);
    });
  });
};

module.exports = { getTokenFromConsole, getTokenFromUser, getTraces, send };