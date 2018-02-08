var chai = require('chai');
var assert = chai.assert;
var rotateMatrix = require('../rotateMatrix.js');

describe('rotateMatrix', () => {
  it('should rotate a 3x3 matrix 90 degrees', () => {
    assert.deepEqual(rotateMatrix(
      [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3]
      ]), [
        [1, 1, 1],
        [2, 2, 2],
        [3, 3, 3]
      ]
    );
  });

  it('should rotate a 4x4 matrix', () => {
    var actual = rotateMatrix([
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4]
    ]);
    var expected = [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3],
      [4, 4, 4, 4]
    ]
    assert.exists(actual);
    assert.deepEqual(actual, expected);
  });

  it('should rotate a 5x5 matrix', () => {
    var actual = rotateMatrix([
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5]
    ]);
    var expected = [
      [1, 1, 1, 1, 1],
      [2, 2, 2, 2, 2],
      [3, 3, 3, 3, 3],
      [4, 4, 4, 4, 4],
      [5, 5, 5, 5, 5]
    ]
    assert.exists(actual);
    assert.deepEqual(actual, expected);
  });

});