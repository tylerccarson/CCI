function loopDetection(linkedList) {

  var slow = linkedList.head;
  var fast = linkedList.head;

  while (slow !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast.val === slow.val && fast.next.val === slow.next.val) {
      break;
    }
  }

  slow = linkedList.head;

  while (slow.val !== fast.val) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow.val;
}

module.exports = loopDetection;