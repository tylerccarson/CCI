function LinkedList(val) {
  this.head = new Node(val);
  this.tail = this.head;
}

LinkedList.prototype.addToTail = function(val) {
  var head = this.head;
  var node = head;
  while (node.next !== null) {
    node = node.next;
  }
  node.next = new Node(val);
  this.tail = node.next;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

module.exports = LinkedList;