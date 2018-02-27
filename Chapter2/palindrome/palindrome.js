function palindrome(linkedList) {

  var length = linkedList.length;
  var node = linkedList.head;
  var values = [];
  var index = 0;

  while (node !== null) {

    if (index < length / 2) {
      values.push(node.val);

    } else {

      var oppVal = values[length - index - 1];
      var curVal = node.val;

      if (oppVal !== curVal) {
        return false;
      }

    }

    index++;
    node = node.next;
  }

  return true;

}

module.exports = palindrome;