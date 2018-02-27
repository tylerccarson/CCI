var chai = require('chai');
var assert = chai.assert;
var LinkedList = require('../../linkedList.js');
var deleteMiddle = require('../deleteMiddle.js');

describe('delete middle node', function() {
  it('should delete a specified middle node', function() {

    var LL = new LinkedList(5);
    LL.addToTail(6);
    LL.addToTail(2);
    LL.addToTail(5);
    LL.addToTail(3);
    deleteMiddle(LL.head.next, LL);

    var LL2 = new LinkedList(5);
    LL.addToTail(2);
    LL.addToTail(5);
    LL.addToTail(3);

    assert.instanceOf(LL, LinkedList);
    assert.instanceOf(LL2, LinkedList);
    assert.deepEqual(LL, LL2);

  });
});