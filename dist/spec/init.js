(function() {
  'use strict';
  var createStub, fakeServer;

  fakeServer = {
    restore: sinon.spy(),
    xhr: {
      useFilters: false,
      addFilter: sinon.spy()
    }
  };

  createStub = null;

  describe('AutoConfigFakeServer.init', function() {
    beforeEach(function() {
      createStub = sinon.stub(sinon.fakeServer, 'create');
      createStub.returns(fakeServer);
      return AutoConfigFakeServer.init();
    });
    afterEach(function() {
      AutoConfigFakeServer.restore();
      return createStub.restore();
    });
    it('should call create', function() {
      return expect(createStub.called).to.be.ok;
    });
    it('should use filters', function() {
      return expect(fakeServer.xhr.useFilters).to.be.ok;
    });
    return it('should add a filter', function() {
      return expect(fakeServer.xhr.addFilter.called).to.be.ok;
    });
  });

}).call(this);
