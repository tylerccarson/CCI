var chai = require('chai');
var assert = chai.assert;
var LinkedList = require('../../linkedList.js');
var isPalindrome = require('../palindrome.js');

describe('Linked List palindrome', function() {
  it('should be able to detect if an odd length LL is a palindrome', function() {

    var LL = new LinkedList(2);
    LL.addToTail(4);
    LL.addToTail(6);
    LL.addToTail(4);

    var control = isPalindrome(LL);
    assert.isFalse(control, 'control');

    LL.addToTail(2);

    var result = isPalindrome(LL);
    assert.isTrue(result, 'actual check');

  });

  it('should be able to detect an even length palindrome', function() {

    var LL = new LinkedList(5);
    LL.addToTail(1);
    LL.addToTail(1);

    var control = isPalindrome(LL);
    assert.isFalse(control, 'control check');

    LL.addToTail(5);

    var result = isPalindrome(LL);
    assert.isTrue(result, 'find even palindrome');

  });

});