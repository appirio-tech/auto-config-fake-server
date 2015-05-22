(function() {
  'use strict';
  var build, combinations, enumCombinations, properties;

  enumCombinations = AutoConfigFakeServerPrivates.enumCombinations;

  build = {
    a: 'a',
    b: '1',
    c: 'a'
  };

  properties = {
    a: {
      type: 'string'
    },
    b: {
      type: 'string',
      "enum": ['1', '2', '3']
    },
    c: {
      type: 'string',
      "enum": ['a', 'b', 'c']
    }
  };

  combinations = null;

  describe('AutoConfigFakeServer.enumCombinations', function() {
    beforeEach(function() {
      return combinations = enumCombinations(build, properties);
    });
    it('should expect 9 combinations', function() {
      return expect(combinations.length).to.equal(9);
    });
    it('should expect to equal to `a`', function() {
      return expect(combinations[0].a).to.equal('a');
    });
    it('should expect to equal to `1`', function() {
      return expect(combinations[0].b).to.equal('1');
    });
    it('should expect to equal to `a`', function() {
      return expect(combinations[0].c).to.equal('a');
    });
    it('should expect to equal to `a`', function() {
      return expect(combinations[8].a).to.equal('a');
    });
    it('should expect to equal to `3`', function() {
      return expect(combinations[8].b).to.equal('3');
    });
    return it('should expect to equal to `c`', function() {
      return expect(combinations[8].c).to.equal('c');
    });
  });

}).call(this);
