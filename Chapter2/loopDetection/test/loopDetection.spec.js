var chai = require('chai');
var assert = chai.assert;
var LinkedList = require('../../linkedList.js');
var loopDetection = require('../loopDetection.js');

describe('detect loop in a linked list', function() {
  it('should detect a loop in a linked list', function() {

    var LL = new LinkedList('A');
    var b = LL.addToTail('B');
    var c = LL.addToTail('C');
    var d = LL.addToTail('D');
    var e = LL.addToTail('E');

    e.next = c;

    var hasLoop = loopDetection(LL);
    assert.equal('C', hasLoop);

  });
});