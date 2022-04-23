function createFrequencyCounter(arr) {
  frequency_counter = {};
  for (let key of arr) {
    frequency_counter[key] = ++frequency_counter[key] || 1;
  }
  return frequency_counter;
}

function same(arr1, arr2) {
  if (arr1.length < 1 || arr2.length < 1) return false;
  if (arr1.length != arr2.length) return false;

  let frequency_counter1 = createFrequencyCounter(arr1);
  let frequency_counter2 = createFrequencyCounter(arr2);

  for (let key in frequency_counter1) {
    if (!(key ** 2 in frequency_counter2)) return false;
    if (frequency_counter1[key] !== frequency_counter2[key ** 2]) return false;
  }

  return true;
}

same([1, 2, 3, 2], [4, 1, 4, 9]);
// => return true

module.exports = same;
