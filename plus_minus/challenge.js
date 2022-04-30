function plusMinus(arr) {
  // Write your code here
  // Steps
  // varibles positive_count, nagative_count, zero_count all init to 0
  //varaible divisor = arr.length
  // loop
  // for each value in array
  // if value == 0 zero_count = zero_count + 1.0
  // else if value >= 1 positive_count += 1.0
  // else nagative_count += 1.0
  //  print (positive_count / divisor).toFixed(6)
  //  print (negative_count / divisor).toFixed(6)
  //  print (zero_count / divisor).toFixed(6)

  let positive_count = 0;
  let negative_count = 0;
  let zero_count = 0;
  let finalArr = [];
  let divisor = arr.length;
  arr.forEach((value) => {
    if (value == 0) zero_count += 1.0;
    else if (value > 0) positive_count += 1.0;
    else negative_count += 1.0;
  });

  finalArr.push((positive_count / divisor).toFixed(6).toString());
  finalArr.push((negative_count / divisor).toFixed(6).toString());
  finalArr.push((zero_count / divisor).toFixed(6).toString());

  return finalArr;
}

plusMinus([1, 1, 0, -1, -1]);
// => [0.400000, 0.400000, 0.200000]

module.exports = plusMinus;
