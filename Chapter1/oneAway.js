function oneAway(str1, str2) {
  if (str1.length === str2.length) {

    let differences = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        differences++
      }
    }
    return differences === 1;

  } else if (str1.length === str2.length + 1) {

    let i = 0;
    let j = 0;
    let differences = 0;

    while (i < str1.length || j < str2.length) {
      if (str1[i] !== str2[j]) {
        i++;
        differences++
      } else {
        i++;
        j++;
      }
    }
    return differences === 1;

  } else if (str2.length === str1.length + 1) {

    let i = 0;
    let j = 0;
    let differences = 0;

    while (i < str1.length || j < str2.length) {
      if (str1[i] !== str2[j]) {
        j++;
        differences++
      } else {
        i++;
        j++;
      }
    }
    return differences === 1;

  } else {
    return false;
  }
}

console.log(oneAway('pale', 'ple') === true);
console.log(oneAway('pales', 'pale') === true);
console.log(oneAway('pale', 'pales') === true);
console.log(oneAway('pale', 'bale') === true);
console.log(oneAway('pale', 'bake') === false);