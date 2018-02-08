//determine if a string is all unique w/o using any data structures (array, object, LL)
function isUnique(string) {
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (i !== j && string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
}

//test cases
console.log(isUnique('apple') === false);
console.log(isUnique('piano') === true);
console.log(isUnique('bike') === true);
console.log(isUnique('tom brady') === true);
console.log(isUnique('Tyler') === true);