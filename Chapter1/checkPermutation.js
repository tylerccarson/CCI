function checkPermutation(string1, string2) {
  
  var characters = {};

  for (var i = 0; i < string1.length; i++) {
    if (characters[string1[i]] === undefined) {
      characters[string1[i]] = 1;
    } else {
      characters[string1[i]]++;
    }
  }

  for (var j = 0; j < string2.length; j++) {
    if (characters[string2[j]] === 0 || characters[string2[j]] === undefined) {
      return false;
    } else {
      characters[string2[j]]--;
    }
  }

  for (var prop in characters) {
    if (characters[prop] > 0) {
      return false;
    }
  }

  return true;

}

//test cases
console.log(checkPermutation('radar', 'darar') === true);
console.log(checkPermutation('giraffe', 'hamburger') === false);
console.log(checkPermutation('racecar', 'cacrear') === true);
console.log(checkPermutation('r a c e c a r', 'r a c e c a r r') === false);
console.log(checkPermutation('radar', 'rraad') === true);