const { getTokenFromConsole, send, getTokenFromUser } = require('./utils');
const { parseTraces } = require('./traces-utils');
const { generateTraces } = require('./traces-utils');



(async () => {
  const token = getTokenFromConsole();
  if (!token) {
    console.log('no token');

    process.exit(0);
  }

  console.log(`loading with token ${token}`);
  // const traces = await getTraces();
  const traces = generateTraces();

  // const parsedTraces = parseTraces(traces);
  console.log('traces', traces);

  await send(traces, token);
  console.log('done');
})();
