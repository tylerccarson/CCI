module.exports = function stringRotation(str1, str2) {
  for (var i = 0; i < str2.length; i++) {
    var rotated = str2.slice(i) + str2.slice(0, i);
    if (str1 === rotated) {
      return true;
    }
  }
  return false;
}