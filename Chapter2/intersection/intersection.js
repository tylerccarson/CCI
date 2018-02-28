function intersection(linkedList1, linkedList2) {

  if (linkedList1.tail.val !== linkedList2.tail.val) {
    return false;
  }

  var node1 = linkedList1.head;
  var node2 = linkedList2.head;
  var diff = linkedList1.length - linkedList2.length;

  if (diff < 0) {
    diff = Math.abs(diff);
    while (diff > 0) {
      node2 = node2.next;
      diff--;
    }
  } else if (diff > 0) {
    while (diff > 0) {
      node1 = node1.next;
      diff--;
    }
  } 

  var intersection = null;

  while (node1 !== null) {
    if (node1.val !== node2.val && intersection !== null) {
      return false;
    } else if (intersection === null && node1.val === node2.val) {
      intersection = node1.val;
    }
    node1 = node1.next;
    node2 = node2.next;
  }

  return intersection;
}

module.exports = intersection;