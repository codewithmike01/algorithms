const miniMaxSum = require('./challenge');
const assert = require('assert');

describe('MinSum', () => {
  it('[1, 3, 5, 7, 9]', () => {
    const arr = [1, 3, 5, 7, 9];
    assert(JSON.stringify(miniMaxSum(arr)) == JSON.stringify([16, 24]));
  });

  it('[5, 5, 5, 5, 5]', () => {
    const arr = [5, 5, 5, 5, 5];
    assert(JSON.stringify(miniMaxSum(arr)) == JSON.stringify([20, 20]));
  });

  it('[1, 2, 3, 4, 5]', () => {
    const arr = [1, 2, 3, 4, 5];
    assert(JSON.stringify(miniMaxSum(arr)) == JSON.stringify([10, 14]));
  });

  it('[15, 1, 6, 3, 0]', () => {
    const arr = [15, 1, 6, 3, 0];
    assert(JSON.stringify(miniMaxSum(arr)) == JSON.stringify([10, 25]));
  });

  it('[]', () => {
    const arr = [];
    assert(JSON.stringify(miniMaxSum(arr)) == JSON.stringify([0, 0]));
  });
});
