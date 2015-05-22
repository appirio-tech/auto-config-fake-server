'use strict'

fakeServer =
  respondWith: sinon.spy()
  restore    : sinon.spy()
  xhr:
    useFilters : false
    addFilter  : sinon.spy()

callback   = sinon.spy()
createStub = null
apis       = AutoConfigFakeServerPrivates.apis

describe 'AutoConfigFakeServer.consume', ->
  beforeEach ->
    createStub = sinon.stub sinon.fakeServer, 'create'
    createStub.returns fakeServer

    AutoConfigFakeServer.init()

  afterEach ->
    createStub.restore();
    AutoConfigFakeServer.restore()

  context 'when schema is an object', ->
    beforeEach ->
      schema =
        basePath: '/v1'

      AutoConfigFakeServer.consume schema, callback

    it 'should have an api base path of `/v1`', ->
      expect(apis[0].basePath).to.be.equal '/v1'
