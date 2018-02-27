var chai = require('chai');
var assert = chai.assert;
var LinkedList = require('../../linkedList.js');
var partition = require('../partition.js');

describe('partition a LinkedList', function() {
  it('should have values lower than x come before values greater than or equal to x', function() {
    
    var LL = new LinkedList(3);
    LL.addToTail(5);
    LL.addToTail(8);
    LL.addToTail(5);
    LL.addToTail(10);
    LL.addToTail(2);
    LL.addToTail(1);

    partition(LL, 5);
    
    assert.isBelow(LL.head.val, 5);
    assert.isBelow(LL.head.next.val, 5);
    assert.isBelow(LL.head.next.next.val, 5);
    assert.isAtLeast(LL.head.next.next.next.val, 5);
    assert.isAtLeast(LL.head.next.next.next.next.val, 5);
    assert.isAtLeast(LL.head.next.next.next.next.next.val, 5);
    assert.isAtLeast(LL.head.next.next.next.next.next.next.val, 5);

  });
});