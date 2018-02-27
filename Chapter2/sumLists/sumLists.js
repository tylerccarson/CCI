//should take two linked lists with digits stored in reverse order, and return a ll with sum in reverse order
var LinkedList = require('../linkedList.js');

function sumLists(LL1, LL2) {

  var result = null;
  var node1 = LL1.head;
  var node2 = LL2.head;
  var remainder = 0;

  while (node1 !== null) {

    var sum = node1.val + node2.val + remainder;
    if (sum > 9) {
      sum -= 10;
      remainder = 1;

    } else {
      remainder = 0;
    }

    if (result === null) {
      result = new LinkedList(sum);
    } else {
      result.addToTail(sum);
    }

    node1 = node1.next;
    node2 = node2.next;

  }

  return result;

}

module.exports = sumLists;