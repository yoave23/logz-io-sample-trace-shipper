// const { operation1, operation2, operation3, data } = require('./traces');
const { span1, span2, span3, span4, operation1, operation2 } = require('./data1-complete');

const generateTraces = () => {
  // first trace
  const span1Time = new Date().getTime();
  span1.startTimeMillis = span1['@timestamp'] = span1Time;
  span1.startTime = parseInt(`${span1Time}000`, 10);

  const span2Time = span1Time + 8;
  span2.startTimeMillis = span2['@timestamp'] = span2Time;
  span2.startTime = parseInt(`${span2Time}000`, 10);

  // second trace
  const span3Time = new Date().getTime() + 500;
  span3.startTimeMillis = span3['@timestamp'] = span3Time;
  span3.startTime = parseInt(`${span3Time}000`, 10);

  const span4Time = span3Time + 3;
  span4.startTimeMillis = span4['@timestamp'] = span4Time;
  span4.startTime = parseInt(`${span4Time}000`, 10);

  return [operation1, operation2, span1, span2, span3, span4].map(body => ({ amount: 1, body }));
};

module.exports = { generateTraces };

  // const trace1Time = new Date().getTime();
  // const trace1 = data[0];
  // trace1.startTimeMillis = trace1['@timestamp'] = trace1Time;
  // trace1.startTime = parseInt(`${trace1Time}000`, 10);

  // // add 200 milliseconds
  // const trace2Time = trace1Time + 10;
  // const trace2 = data[1];
  // trace2.startTimeMillis = trace2['@timestamp'] = trace2Time;
  // trace2.startTime = parseInt(`${trace2Time}000`, 10);

  // const trace3Time = new Date().getTime();
  // const trace3 = data[2];
  // trace3.startTimeMillis = trace3['@timestamp'] = trace3Time;
  // trace3.startTime = parseInt(`${trace3Time}000`, 10);

  // const trace4Time = trace3Time + 15;
  // const trace4 = data[3];
  // trace4.startTimeMillis = trace4['@timestamp'] = trace4Time;
  // trace4.startTime = parseInt(`${trace4Time}000`, 10);

  // return [operation1, operation2, trace1, trace2, trace3, trace4].map(body => ({ amount: 1, body }));