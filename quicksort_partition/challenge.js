function partition(arr) {
  //  write code here
  let pivot = arr[0];
  let left_arr = [];
  let right_arr = [];
  arr.forEach((element) => {
    if (element > pivot) right_arr.push(element);
    else if (element < pivot) left_arr.push(element);
  });

  return [...left_arr, pivot, ...right_arr];
}

partition([3, 2, 9, 19, 7, 5, 6, 1]);
// => [2, 1, 3, 9, 19, 7, 5, 6 ]
module.exports = partition;
