var chai = require('chai');
var assert = chai.assert;
var LinkedList = require('../../linkedList.js');
var removeDups = require('../removeDups.js');

describe('Remove Duplicates from Linked List', function() {
  it('should find and remove duplicates', function() {

    var LL = new LinkedList(5);
    LL.addToTail(6);
    LL.addToTail(7);
    LL.addToTail(5);
    LL.addToTail(7);
    removeDups(LL);

    assert.isNull(LL.head.next.next.next);
  });
});