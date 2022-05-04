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

module.exports = hashTable;
