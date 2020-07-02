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
