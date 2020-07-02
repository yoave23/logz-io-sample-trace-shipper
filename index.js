const { send, getTokenFromUser } = require('./utils');
const { generateTraces } = require('./traces-utils');

(async () => {
  const token = await getTokenFromUser();
  if (!token) {
    console.log('no token');

    process.exit(0);
  }

  console.log(`loading with token ${token}`);
  const traces = generateTraces();

  console.log('traces', traces);

  await send(traces, token);
  console.log('done');
})();
