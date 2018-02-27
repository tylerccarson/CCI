var chai = require('chai');
var assert = chai.assert;
var LinkedList = require('../../linkedList.js');
var sumLists = require('../sumLists.js');

describe('sumLists in a LinkedList', function() {
  it('should take the digits from a 2 LL in reverse order and sum in a new LL', function() {

    var LL1 = new LinkedList(7);
    LL1.addToTail(1);
    LL1.addToTail(6);

    var LL2 = new LinkedList(5);
    LL2.addToTail(9);
    LL2.addToTail(2);

    var actual = sumLists(LL1, LL2);

    var expected = new LinkedList(2);
    expected.addToTail(1);
    expected.addToTail(9);

    assert.deepEqual(actual, expected);

  });

});