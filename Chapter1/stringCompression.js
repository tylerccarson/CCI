function stringCompression(str) {

  var compressed = '';
  var currentCharacter = str[0];
  var currentCount = 1;

  for (var i = 1; i < str.length; i++) {

    if (str[i] === currentCharacter) {
      currentCount++;

    } else {
      compressed += currentCharacter + currentCount;
      currentCharacter = str[i];
      currentCount = 1;
    }
  }
  compressed += currentCharacter + currentCount;

  return compressed.length < str.length ? compressed : str;
}

console.log(stringCompression('aabcccccaaa') === 'a2b1c5a3');
console.log(stringCompression('abbbcde') === 'abbbcde');
console.log(stringCompression('aabbb') === 'a2b3');
console.log(stringCompression('abc') === 'abc');