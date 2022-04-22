function birthday(arr) {
  let counter = 0;
  let sum = 0;
  const arrLength = s.length - 1;

  if (arrLength === 0 && s[0] === d) {
    counter = 1;
    return counter;
  }

  for (let i = 0; i <= arrLength; i++) {
    sum = s[i];
    let j = i + 1;
    let k = 1;

    while (k < m) {
      if (s[k] === undefined) return counter;
      console.log(s[j]);
      sum += s[j];
      k++;
      j++;
    }

    if (sum === d) {
      counter++;
    }
  }
  return counter;
}

birthday([1, 1, 1, 1, 1, 1], 3, 2);

module.exports = birthday;
