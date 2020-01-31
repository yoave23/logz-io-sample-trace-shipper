const { createInterface } = require('readline');
const { readFile } = require('fs');

const getTokenFromConsole = () => {
  if (process.argv.length === 3) {
    return process.argv[2];
  }

  throw new Error('missing token');
}

const getTraces = () => {
  return new Promise((resolve, reject) => {
    readFile('./original_spans.ndjson', "utf8", (err, json) => {
      resolve(json);
    });
  })
}

const send = (traces, token) => {
  return new Promise((resolve, reject) => {
    console.log('sending traces');
    const logger = require('logzio-nodejs').createLogger({
      token: token,
      host: 'listener',
      debug: true,
      type: 'nodejs'
    });

    traces.split('\n').forEach(line => {
      console.log('sending line');
      console.log(line);

      if (line)
        logger.log(JSON.parse(line));
    });

    logger.sendAndClose((err, res) => {
      resolve(true);
    });
  })
}

module.exports = { getTokenFromConsole, getTraces, send };