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

  it('[15, 3, 9, 1, 6, 8, 19, 4, 20]', () => {
    let arr = [15, 3, 9, 1, 6, 8, 19, 4, 20];
    assert(
      JSON.stringify(partition(arr)) ==
        JSON.stringify([3, 9, 1, 6, 8, 4, 15, 19, 20])
    );
  });

  it('[1, 5, 3, 6, 3, 9]', () => {
    let arr = [1, 5, 3, 6, 3, 9];
    assert(
      JSON.stringify(partition(arr)) == JSON.stringify([1, 5, 3, 6, 3, 9])
    );
  });
});
