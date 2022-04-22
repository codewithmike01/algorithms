function hashTable(arr) {
  let newArr = [];
  let hashArr = [];

  arr.forEach((el) => {
    const index = Math.abs(el % 11);
    hashArr.push({
      key: index,
      value: el,
    });
  });

  hashArr.sort((a, b) => a.key - b.key);

  for (let item of hashArr) {
    newArr.push(item.value);
  }

  return newArr;
}

hashTable([2367, -65325, 134, -185007, 3291, 7832, -65326, 789, 980, -3289, 3]);
// console.log(
//   hashTable([
//     2367, -65325, 134, -185007, 3291, 7832, -65326, 789, 980, -3289, 3,
//   ])
// );
// => [7832, -3289, 980, 2367, 134, 3291, 3, -65325, -65326, 789, -185007]))

// console.log(hashTable([2, 341, 73, 8265, 234004, 602, 7400000, 200000000]));
// => [341, 234004, 2, 200000000, 7400000, 8265, 73, 602]

module.exports = hashTable;
