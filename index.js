const { getTokenFromConsole, getTraces, send } = require('./utils');
const { parseTraces } = require('./traces-utils');

(async () => {
  const token = await getTokenFromConsole();
  console.log('token is:', token);
  if (!token) {
    process.exit(0);
  }

  console.log(`loading with token ${token}`);
  const traces = await getTraces();
  const parsedTraces = parseTraces(traces);

  await send(parsedTraces, token);
  console.log('done');
})();
