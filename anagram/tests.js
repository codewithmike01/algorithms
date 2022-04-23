const anagram = require('./challenge');
const assert = require('assert');

describe('Check if two given words are anagram', () => {
  it('hope and lope', () => {
    assert(anagram('hope', 'lope') === false);
  });

  it('frank and rankf', () => {
    assert(anagram('frank', 'rankf') === true);
  });

  it('frank and rankf', () => {
    assert(anagram('frank', 'rankf') === true);
  });

  it(' " " and " "', () => {
    assert(anagram(' ', ' ') === true);
  });

  it('aaz and zza', () => {
    assert(anagram('aaz', 'zza') === false);
  });

  it('qwerty and qeywrt', () => {
    assert(anagram('qwerty', 'qeywrt') === true);
  });

  it('texttwisttime and timetwisttext', () => {
    assert(anagram('texttwisttime', 'timetwisttext') === true);
  });
});
