function miniMaxSum(arr) {
  // Write your code here
  // Steps
  // get min saved in min
  // get maxsaved in max
  // new varible sum_max and sum_min
  // if min equal to max loop and add all values except one in the array
  // loop add all el inarray except the min and also without max
  // consle.log sum_min sum_max

  let min = Math.max(...arr);
  let max = Math.min(...arr);
  let sum_max = 0;
  let sum_min = 0;

  if (max === min) {
    sum_max = -max;
    sum_min = -min;
  }

  arr.forEach((el) => {
    if (el !== max && min !== max) sum_min += el;
    if (el !== min && min !== max) sum_max += el;
    if (max === min) {
      sum_max += el;
      sum_min += el;
    }
  });

  return [sum_max, sum_min];
}

miniMaxSum([1, 3, 5, 7, 9]);
// => 16 24

module.exports = miniMaxSum;
