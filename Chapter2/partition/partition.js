//all nodes less than X come before values greater than or equal to x
//input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1  x = 5
//output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
var LinkedList = require('../linkedList.js');

function partition(linkedList, x) {

  var node = linkedList.head;
  var before = null;
  var after = null;

  while (node !== null) {
    
    if (node.val < x) {
      if (before === null) {
        before = new LinkedList(node.val);
      } else {
        before.addToTail(node.val);
      }

    } else {
      if (after === null) {
        after = new LinkedList(node.val);
      } else {
        after.addToTail(node.val);
      }      
    }

    node = node.next;
  }

  linkedList.head = before.head;
  node = linkedList.head;
  while (node.next !== null) {
    node = node.next;
  }
  
  node.next = after.head;
  linkedList.tail = after.tail;

  return linkedList;

}

module.exports = partition;