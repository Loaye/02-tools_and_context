'use strict';

const fp = require('../lib/fp.js');
const expect = require('chai').expect;

describe('Fp', function() {
  describe('#map', function() {
    it('should return 2 4 6 8', function() {
      let result = fp.map([1, 2, 3, 4], function(n) {return(n * 2)});
      expect(fp.map).to.be.a('function');
      expect(result).to.deep.equal([2, 4, 6, 8]);
    });
  });

  describe('#filter', function() {
    it('should return 1 3 4', function() {
      let result = fp.filter([1, 2, 3, 4], function(n) {return(n !== 2)});
      expect(fp.filter).to.be.a('function');
      expect(result).to.deep.equal([1, 3, 4]);
    });
  });

  describe('#reduce', function() {
    it('should return 10', function() {
      let result = fp.reduce([1, 2, 3, 4], function(sum, value) {return(sum + value)}, 0);
      expect(fp.reduce).to.be.a('function');
      expect(result).to.deep.equal(10);
    });
  });

  describe('#concat', function() {
    it('should return 1 2 3 4 5 6 7 8', function() {
      let result = fp.concat([1, 2, 3, 4], [5, 6, 7, 8]);
      expect(fp.concat).to.be.a('function');
      expect(result).to.deep.equal([ 1, 2, 3, 4, 5, 6, 7, 8 ]);
    });
  });

  describe('#splice', function() {
    it('should return fish', function() {
      let result = fp.splice([1, 2, 3, 'fish', 5], 3, 1, 4);
      expect(fp.splice).to.be.a('function');
      expect(result).to.deep.equal(['fish']);
    });
  });
});
