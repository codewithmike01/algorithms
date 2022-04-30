const plusMinus = require('./challenge');
const assert = require('assert');

describe('Plus Minus', () => {
  it('[]', () => {
    const arr = [];
    assert(
      JSON.stringify(plusMinus(arr)) == JSON.stringify(['NaN', 'NaN', 'NaN'])
    );
  });

  it('[1, 1, 0, -1, -1]', () => {
    const arr = [1, 1, 0, -1, -1];
    assert(
      JSON.stringify(plusMinus(arr)) ===
        JSON.stringify(['0.400000', '0.400000', '0.200000'])
    );
  });

  it('[2, 1, 0, -6, -3, -9]', () => {
    const arr = [2, 1, 0, -6, -3, -9];
    assert(
      JSON.stringify(plusMinus(arr)) ==
        JSON.stringify(['0.333333', '0.500000', '0.166667'])
    );
  });

  it('[2]', () => {
    const arr = [2];
    assert(
      JSON.stringify(plusMinus(arr)) ==
        JSON.stringify(['1.000000', '0.000000', '0.000000'])
    );
  });

  it('[0, 0, 0.5, 7, 3.4, -2.5]', () => {
    const arr = [0, 0, 0.5, 7, 3.4, -2.5];
    assert(
      JSON.stringify(plusMinus(arr)) ==
        JSON.stringify(['0.500000', '0.166667', '0.333333'])
    );
  });
});
