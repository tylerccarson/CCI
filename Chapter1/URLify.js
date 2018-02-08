function URLify(string, length) {

  string = string.slice(0, length);  
  var array = string.split('');

  for (var i = 0; i < array.length; i++) {
    if (array[i] === ' ' && array[i - 1] !== ' ' && array[i + 1] !== ' ') {
      array[i] = '%20';
    }
  }

  string = array.join('');

  return string;
}

console.log(URLify('Mr John Smith    ', 13) === 'Mr%20John%20Smith');
