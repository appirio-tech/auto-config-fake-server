'use strict'

fakeServer =
  respondWith: sinon.spy()
  restore    : sinon.spy()
  xhr:
    useFilters : false
    addFilter  : sinon.spy()

callback       = sinon.spy()
errStub        = null
createStub     = null
matchFunctions = AutoConfigFakeServerPrivates.matchFunctions

describe 'AutoConfigFakeServer.consume', ->
  beforeEach ->
    errStub        = sinon.stub console, 'error'
    createStub = sinon.stub sinon.fakeServer, 'create'
    createStub.returns fakeServer

    AutoConfigFakeServer.init()

  afterEach ->
    errStub.restore()
    createStub.restore()
    AutoConfigFakeServer.restore()

  it 'should error to the console when no schemas are passed', ->
    AutoConfigFakeServer.consume()
    expect(errStub.called).to.be.true

