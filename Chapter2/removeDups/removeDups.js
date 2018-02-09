function removeDups(linkedList) {

  var values = {};
  var node = linkedList.head;
  values[node.val] = true;

  while (node.next !== null) {

    if (values[node.next.val]) {
      node.next = node.next.next;
      
    } else {
      values[node.next.val] = true;
      node = node.next;
    }
  }

  return linkedList;
}

module.exports = removeDups;