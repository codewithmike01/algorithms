const plusMinus = require('./challenge');
const assert = require('assert');

describe('Plus Minus', () => {
  it('[1, 1, 0, -1, -1]', () => {
    const arr = [1, 1, 0, -1, -1];
    assert(
      JSON.stringify(plusMinus(arr)) ===
        JSON.stringify(['0.400000', '0.400000', '0.200000'])
    );
  });
});
