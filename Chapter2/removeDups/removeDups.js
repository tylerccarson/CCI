function removeDups(linkedList) {
  //keep a hash table of values
  var values = {};
  var node = linkedList.head;
  values[node.val] = true;
  //iterate through nodes w/ while loop
  while (node.next !== null) {
    //if already exists
    if (values[node.next.val]) {
      //remove
      node.next = node.next.next;
    } else { //doesn't exist
      //add to hash table
      values[node.next.val] = true;
      //iterate
      node = node.next;
    }
  }

  return linkedList;
}

module.exports = removeDups;