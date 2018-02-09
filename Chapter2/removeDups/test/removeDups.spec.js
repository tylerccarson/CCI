var chai = require('chai');
var assert = chai.assert;
var LinkedList = require('../../linkedList.js');
var removeDups = require('../removeDups.js');

describe('Remove Duplicates from Linked List', function() {
  it('should find and remove duplicates', function() {
    //create a linked list
    var LL = new LinkedList(5);
    LL.addToTail(6);
    LL.addToTail(7);
    LL.addToTail(5);
    LL.addToTail(7);
    //run removeDups
    LL = removeDups(LL);
    //run tests on the linked list, should not contain second instances of 5 and 7
    assert.isNull(LL.head.next.next.next);
  });
});