function palindromePermutation(str) {

  str = str.toLowerCase().replace(' ', ''); // also need to handle spaces
  var counts = {};

  for (var i = 0; i < str.length; i++) {
    if (counts[str[i]] === undefined) {
      counts[str[i]] = 1;
    } else {
      counts[str[i]]++;
    }
  }

  var odds = 0;
  var evens = 0;

  for (var count in counts) {
    if (counts[count] % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }

  return odds < 2;

}

console.log(palindromePermutation('Tact Coa') === true);
console.log(palindromePermutation('carecar') === true);
console.log(palindromePermutation('not a palindrome') === false);