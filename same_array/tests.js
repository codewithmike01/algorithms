const same = require('./challenge');
const assert = require('assert');

describe('Same Array', () => {
  it('[2, 4, 1, 5] and [16, 4, 1, 25]', () => {
    assert(same([2, 4, 1, 5], [16, 4, 1, 25]) === true);
  });

  it('[2, 4, 1, 5] and [4, 1, 25]', () => {
    assert(same([2, 4, 1, 5], [4, 1, 25]) === false);
  });

  it('[4] and [16]', () => {
    assert(same([4], [16]) === true);
  });

  it('[] and []', () => {
    assert(same([], []) === false);
  });
});
