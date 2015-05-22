(function() {
  'use strict';
  var apis, callback, createStub, fakeServer;

  fakeServer = {
    respondWith: sinon.spy(),
    restore: sinon.spy(),
    xhr: {
      useFilters: false,
      addFilter: sinon.spy()
    }
  };

  callback = sinon.spy();

  createStub = null;

  apis = AutoConfigFakeServerPrivates.apis;

  describe('AutoConfigFakeServer.consume', function() {
    beforeEach(function() {
      createStub = sinon.stub(sinon.fakeServer, 'create');
      createStub.returns(fakeServer);
      return AutoConfigFakeServer.init();
    });
    afterEach(function() {
      createStub.restore();
      return AutoConfigFakeServer.restore();
    });
    context('when schema is a string', function() {
      beforeEach(function() {
        return AutoConfigFakeServer.consume('/swagger.json', callback);
      });
      afterEach(function() {
        return createStub.restore();
      });
      it('should call callback', function() {
        return expect(callback.called).to.be.ok;
      });
      return it('should have an api base path of `/v1`', function() {
        return expect(apis[0].basePath).to.be.equal('/v1');
      });
    });
    return context('when schema is an object', function() {
      beforeEach(function() {
        var schema;
        schema = {
          basePath: '/v1'
        };
        return AutoConfigFakeServer.consume(schema, callback);
      });
      return it('should have an api base path of `/v1`', function() {
        return expect(apis[0].basePath).to.be.equal('/v1');
      });
    });
  });

}).call(this);
