(function() {
  'use strict';
  var clone, clonedItem, item;

  clone = AutoConfigFakeServerPrivates.clone;

  clonedItem = null;

  item = {
    a: 1,
    b: 2,
    c: {
      x: 3,
      y: ['a', 'b']
    }
  };

  describe('AutoConfigFakeServer.clone', function() {
    beforeEach(function() {
      return clonedItem = clone(item);
    });
    it('should be equal to 1', function() {
      return expect(clonedItem.a).to.be.equal(1);
    });
    it('should be equal to 2', function() {
      return expect(clonedItem.b).to.be.equal(2);
    });
    it('should be equal to 3', function() {
      return expect(clonedItem.c.x).to.be.equal(3);
    });
    it('should be equal to a', function() {
      return expect(clonedItem.c.y[0]).to.be.equal('a');
    });
    return it('should be equal to b', function() {
      return expect(clonedItem.c.y[1]).to.be.equal('b');
    });
  });

}).call(this);
