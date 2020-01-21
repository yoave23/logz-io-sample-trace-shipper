const getDaysBetween = (first, second) => Math.round((second - first) / (1000 * 60 * 60 * 24));

const addDays = date => {
  let dateStr = date.toString();
  const isLongDate = dateStr.length === 16;
  let remainder = '';

  if (isLongDate) {
    remainder = dateStr.substr(13);
    dateStr = dateStr.substr(0, 13);
  }

  const result = new Date(parseInt(dateStr));
  const diff = getDaysBetween(result, new Date());
  result.setDate(result.getDate() + diff);
  result.setHours(new Date().getHours());
  let time = result.getTime();

  if (isLongDate) {
    time = parseInt(time.toString() + remainder);
  }
  return time;
};

const parseTraces = (json) => {
  console.log('parsing traces');

  var lines = json.split('\n');
  console.log(lines.length);

  const buffer = [];
  lines.forEach(line => {
    if (line.includes('traceID')) {
      const lineObj = JSON.parse(line);
      const addShort = addDays(lineObj.startTimeMillis);
      const addLong = addDays(lineObj.startTime);

      lineObj.startTime = addLong;
      lineObj.startTimeMillis = addShort;
      // console.log(JSON.stringify(lineObj));
      buffer.push(JSON.stringify(lineObj));
    } else {
      // console.log(JSON.stringify(line));
      buffer.push(line);
    }
  });

  return buffer.join('\n');
}

module.exports = { parseTraces };