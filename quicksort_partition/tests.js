const partition = require('./challenge');
const assert = require('assert');

describe('Partition Quicksort', () => {
  it('[3, 2, 9, 19, 7, 5, 6, 1]', () => {
    let arr = [3, 2, 9, 19, 7, 5, 6, 1];
    assert(
      JSON.stringify(partition(arr)) ==
        JSON.stringify([2, 1, 3, 9, 19, 7, 5, 6])
    );
  });

  it('[3, 2, 9, 19, 7, 5, 6, 1]', () => {
    let arr = [4, 5, 3, 9, 1];
    assert(JSON.stringify(partition(arr)) == JSON.stringify([3, 1, 4, 5, 9]));
  });
});
