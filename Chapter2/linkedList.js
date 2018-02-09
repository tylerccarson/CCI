function LinkedList(val) {
  this.head = new Node(val);
}

LinkedList.prototype.addToTail = function(val) {
  var head = this.head;
  var node = head;
  while (node.next !== null) {
    node = node.next;
  }
  node.next = new Node(val);
}

function Node(val) {
  this.val = val;
  this.next = null;
}

module.exports = LinkedList;