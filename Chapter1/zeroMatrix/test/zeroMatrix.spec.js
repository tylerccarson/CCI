var chai = require('chai');
var assert = chai.assert;
var zeroMatrix = require('../zeroMatrix.js');

describe('zeroMatrix', () => {
  it('should find zeros in 3x3 matrix', () => {
    assert.deepEqual(zeroMatrix(
      [
        [1, 2, 3],
        [1, 2, 0],
        [1, 2, 3]
      ]), [
        [1, 2, 0],
        [0, 0, 0],
        [1, 2, 0]
      ]
    );

    assert.deepEqual(zeroMatrix(
      [
        [1, 2, 3],
        [1, 0, 3],
        [1, 2, 3]
      ]), [
        [1, 0, 3],
        [0, 0, 0],
        [1, 0, 3]
      ]
    );

  });

  it('should find zeros in a 4x4 matrix', () => {
    var actual = zeroMatrix([
      [1, 0, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 0],
      [1, 2, 3, 4]
    ]);
    var expected = [
      [0, 0, 0, 0],
      [1, 0, 3, 0],
      [0, 0, 0, 0],
      [1, 0, 3, 0]
    ]
    assert.exists(actual);
    assert.deepEqual(actual, expected);
  });

});