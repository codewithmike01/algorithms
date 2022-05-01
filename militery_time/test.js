const timeConversion = require('./challenge');
const assert = require('assert');

describe('timeConversion', () => {
  it('06:40:03AM', () => {
    assert(timeConversion('06:40:03AM') === '06:40:03');
  });

  it('12:40:03AM', () => {
    assert(timeConversion('12:40:03AM') === '00:40:03');
  });

  it('12:40:03PM', () => {
    assert(timeConversion('12:40:03PM') === '12:40:03');
  });
});
