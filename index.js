const { send, getTokenFromUser } = require('./utils');
const { generateTraces } = require('./traces-utils');
const traces = require('./test2.json');

// console.log('*** traces length', traces.length);

// const aaa = traces.map(x => x.startTime).sort();
// // console.log('*** aaa', aaa);
// console.log('*** asdasdasd', Math.min.apply(Math, traces.map(c => c.startTimeMillis)));
// const dateDelta = new Date().getTime() - 1619958636557;
// console.log('*** dateDelta', dateDelta);

// return;


// traces.forEach(trace => {
//   const d1 = trace.startTime;
//   const d2 = trace.startTimeMillis;
//   const d3 = parseInt(d1.toString().substr(0, 13));

//   console.log('*** d1', d1.toString().length);
//   console.log('*** d2', d2.toString().length);
//   console.log('*** d3', d3.toString().length);

//   if (d3 !== d2)
//     console.log('*** ', d1, d2, d3);



// });

// return;
(async () => {
  const host = "daily-cloud.logz.io:8070";
  // const host = "http://listener.staging.us-east-1.internal.logz.io:8070";
  // const host = 'listener.logz.io:8070';

  console.log(`SENDING TO ${host}`);

  const token = await getTokenFromUser();
  if (!token) {
    console.log('no token');

    process.exit(0);
  }

  console.log(`loading with token ${host}`);
  const traces = generateTraces();

  await send(traces, token, host);
  console.log('done');
})();
