function timeConversion(s) {
  // Write your code here
  // get Hour
  // get minutes
  // get seconds
  // get Am or PM

  // if AM and Hour = 12 then myHour = 00
  //  if PM and Hour = 12 then myHour = 12
  // if PM and hour not equal to 12 myHour = Hour + 12
  // Assemble myHour:minutes:seconds:PM/AM

  let hour = s.slice(0, 2);
  let minutes = s.slice(3, 5);
  let seconds = s.slice(6, 8);
  let region = s.slice(8, 11);

  if (region === 'AM' && hour === '12') hour = '00';
  else if (region === 'PM' && hour === '12') hour = '12';
  else if (region === 'PM' && hour !== '12')
    hour = (Number(hour) + 12).toString();
  return `${hour}:${minutes}:${seconds}`;
}

timeConversion('06:40:03AM');
// => '06:40:03'
module.exports = timeConversion;
