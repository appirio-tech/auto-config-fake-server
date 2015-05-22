(function() {
  'use strict';
  var api, getRef, ref;

  api = {
    definitions: {
      Player: {},
      User: {
        Stats: {}
      }
    }
  };

  ref = null;

  getRef = AutoConfigFakeServerPrivates.getRef;

  describe('get Ref', function() {
    context('ref existing 2 level deep', function() {
      beforeEach(function() {
        return ref = getRef('#/definitions', api);
      });
      return it('should be ok', function() {
        return expect(ref).to.be.ok;
      });
    });
    context('ref existing 2 level deep', function() {
      beforeEach(function() {
        return ref = getRef('#/definitions/Player', api);
      });
      return it('should be ok', function() {
        return expect(ref).to.be.ok;
      });
    });
    return describe('ref existing 3 level deep', function() {
      beforeEach(function() {
        return ref = getRef('#/definitions/User/Stats', api);
      });
      return it('should be ok', function() {
        return expect(ref).to.be.ok;
      });
    });
  });

}).call(this);
