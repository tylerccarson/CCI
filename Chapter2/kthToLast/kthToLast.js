function kthToLast(linkedList, k) {

  var p1 = linkedList.head;
  var p2 = linkedList.head;
  while (k > 0) {
    p1 = p1.next;
    k--;
  }

  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2.val;
}

module.exports = kthToLast;