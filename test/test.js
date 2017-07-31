// const mocha = require('mocha');
const expect = require('chai').expect;

const aritGeo = require('../index');


describe('aritGeo', function () {
  describe('handles invalid input type', function () {
    it('should throw a TypeError for "string"', function () {
      const result = aritGeo('string');
      expect(result).to.throw(new TypeError('arguement should be an array'));
    })
    it('shoud throw a TypeError for 22', function () {
      const result = aritGeo(22);
      expect(result).to.throw(new TypeError('arguement should be an array'));
    })
  });

  describe('handles valid input', function () {
    it('should return 0 for []', function () {
      const result = aritGeo([]);
      expect(result).to.equal(0);
    });
    it('should return -1 for [-2, 10, 4, 5, 9, -3]', function () {
      const result = aritGeo([-2, 10, 4, 5, 9, -3]);
      expect(result).to.equal(-1);
    });
    it('returns -1 for [1, 2, 4, 9, 12]', function () {
      const result = aritGeo([1, 2, 4, 9, 12]);
      expect(result).to.equal(-1);
    });

    it('should return "arithmetric" for [1, 2, 3, 4]', function () {
      const result = aritGeo([1, 2, 3, 4]);
      expect(result).to.equal('arithmetric');
    });
    it('returns "geometric" for [1, 2, 4, 8]', function () {
      const result = aritGeo([1, 2, 4, 8]);
      expect(result).to.equal('geometric');
    });
  })

})
