'use strict'

fakeServer =
  respondWith: sinon.spy()
  xhr:
    useFilters : false
    addFilter  : sinon.spy()

callback   = sinon.spy()
createStub = null
apis       = SwaggerFakeServerPrivates.apis

describe 'SwaggerFakeServer.consume', ->
  beforeEach ->
    createStub = sinon.stub sinon.fakeServer, 'create'
    createStub.returns fakeServer

    SwaggerFakeServer.init()
    SwaggerFakeServer.consume '/swagger.json', callback

  afterEach ->
    createStub.restore()

  it 'should call callback', ->
    expect(callback.called).to.be.ok

  it 'should have an api base path of `/v1`', ->
    expect(apis[0].basePath).to.be.equal '/v1'
