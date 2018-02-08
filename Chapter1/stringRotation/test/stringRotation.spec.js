var chai = require('chai');
var assert = chai.assert;
var sinon = require('sinon');
var stringRotation = require('../stringRotation.js');

describe('string rotation', () => {
  it('should identify a rotated string', () => {
    var actual = stringRotation('waterbottle', 'erbottlewat');
    assert.isTrue(actual);
  });

  xit('should call a method called isSubstring only once', () => {

  });

});