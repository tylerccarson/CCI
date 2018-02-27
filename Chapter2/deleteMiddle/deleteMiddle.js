function deleteMiddleNode(remove, linkedList) {

  var p1 = linkedList.head;
  var p2 = linkedList.head.next;

  while (p2.next !== null) {

    if (p2.next.val === remove.next.val && p2.val === remove.val) {
      p1.next = p2.next;
      break;

    } else {
      p2 = p2.next;
      p1 = p1.next;
    }
  }
}

module.exports = deleteMiddleNode;