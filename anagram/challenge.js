// Helper function
function helper(word) {
  let frequency = {};
  for (let el of word) {
    frequency[el] = (frequency[el] || 0) + 1;
  }
  return frequency;
}

// Anagram
function anagram(wrd1, wrd2) {
  if (wrd1.length !== wrd2.length) return false;

  let frequencyCounter1 = helper(wrd1);
  let frequencyCounter2 = helper(wrd2);

  for (let key in frequencyCounter1) {
    if (!frequencyCounter2.hasOwnProperty(key)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
}

anagram('frank', 'kranf');
//  => true

module.exports = anagram;
