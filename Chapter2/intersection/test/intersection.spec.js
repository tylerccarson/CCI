var assert = require('chai').assert;
var LinkedList = require('../../linkedList.js');
var intersection = require('../intersection.js');

describe('intersection of Linked List', function() {
  it('should detect an intersection in a linkedList', function() {

    var LL1 = new LinkedList(5);
    LL1.addToTail(7);
    LL1.addToTail(4);
    LL1.addToTail(13);
    LL1.addToTail(9);

    var LL2 = new LinkedList(6);
    LL2.addToTail(2);
    LL2.addToTail(10);
    LL2.addToTail(35);
    LL2.addToTail(4);
    LL2.addToTail(13);
    LL2.addToTail(9);

    var expected = 4;
    var actual = intersection(LL1, LL2);

    assert.isNotFalse(actual);
    assert.equal(expected, actual, 'find 4 to be the intersecting node');

  });

  it('should return false when there is no intersection', function() {

    var LL1 = new LinkedList(5);
    LL1.addToTail(7);
    LL1.addToTail(4);
    LL1.addToTail(13);
    LL1.addToTail(9);

    var LL2 = new LinkedList(6);
    LL2.addToTail(2);
    LL2.addToTail(10);

    var result = intersection(LL1, LL2);
    assert.isFalse(result);

  });

});