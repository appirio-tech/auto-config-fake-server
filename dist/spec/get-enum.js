(function() {
  'use strict';
  var getEnum, item, items;

  getEnum = AutoConfigFakeServerPrivates.getEnum;

  item = null;

  items = ['a', 'b', 'c'];

  describe('AutoConfigFakeServer.getEnum', function() {
    beforeEach(function() {
      return item = getEnum(items);
    });
    return it('should return a random element', function() {
      return expect(items).to.include(item);
    });
  });

}).call(this);
