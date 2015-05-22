(function() {
  'use strict';
  var errorSpy, getJSON, spy;

  spy = null;

  errorSpy = null;

  getJSON = AutoConfigFakeServerPrivates.getJSON;

  describe('get JSON', function() {
    beforeEach(function() {
      stashIt(window, 'console');
      spy = sinon.spy();
      return errorSpy = sinon.spy(console, 'error');
    });
    afterEach(function() {
      return errorSpy.restore();
    });
    context('200 response', function() {
      beforeEach(function() {
        return getJSON('/swagger.json', spy);
      });
      it('should call spy', function() {
        return expect(spy.called).to.be.ok;
      });
      return it('should not call error spy', function() {
        return expect(errorSpy.called).to.not.be.ok;
      });
    });
    context('404 response', function() {
      beforeEach(function() {
        return getJSON('/swagger-404.json', spy);
      });
      it('should call error spy', function() {
        return expect(errorSpy).to.be.ok;
      });
      return it('should not call spy', function() {
        return expect(spy.called).to.not.be.ok;
      });
    });
    return context('invalid json', function() {
      beforeEach(function() {
        return getJSON('/swagger-404.json', spy);
      });
      it('should call error spy', function() {
        return expect(errorSpy).to.be.ok;
      });
      return it('should not call spy', function() {
        return expect(spy.called).to.not.be.ok;
      });
    });
  });

}).call(this);
