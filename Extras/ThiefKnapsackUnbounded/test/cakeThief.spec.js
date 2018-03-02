var chai = require('chai');
var assert = chai.assert;
var cakeThief = require('../cakeThief.js');

describe('thief cakes problem', function() {
  it('should find optimal value for given cakes', function() {
    var cakes = [{
      weight: 7, value: 160
    }, {
      weight: 3, value: 90
    }, {
      weight: 2, value: 15
    }];

    var result = cakeThief(cakes, 20);
    assert.equal(result, 555);

  });

  it('should find optimal value for given cakes #2', function() {

    var cakes = [{
      weight: 7, value: 200
    }, {
      weight: 3, value: 90,
    }, {
      weight: 2, value: 15
    }];

    var result = cakeThief(cakes, 20);
    assert.equal(result, 580);

  });
});