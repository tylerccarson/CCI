var chai = require('chai');
var assert = chai.assert;
var LinkedList = require('../../linkedList.js');
var kthToLast = require('../kthToLast.js');

describe('Find kth to last element from a Linked List', function() {
  it('should return kth to last element', function() {

    var LL = new LinkedList(5);
    LL.addToTail(6);
    LL.addToTail(2);
    LL.addToTail(5);
    LL.addToTail(3);
    
    var result = kthToLast(LL, 2);
    assert.equal(result, 5);

  });
});