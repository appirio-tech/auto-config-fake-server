'use strict'

fakeServer =
  respondWith: sinon.spy()
  restore    : sinon.spy()
  xhr:
    useFilters : false
    addFilter  : sinon.spy()

callback       = sinon.spy()
createStub     = null
matchFunctions = AutoConfigFakeServerPrivates.matchFunctions

describe 'AutoConfigFakeServer.consume', ->
  beforeEach ->
    createStub = sinon.stub sinon.fakeServer, 'create'
    createStub.returns fakeServer

    AutoConfigFakeServer.init()

  afterEach ->
    createStub.restore();
    AutoConfigFakeServer.restore()

  context 'when no schemas are passed', ->
    err = null

    beforeEach ->
      err = sinon.spy console, 'error'
      AutoConfigFakeServer.consume()

    it 'should error to the console', ->
      expect(err.called).to.be.true

    beforeEach ->
      err.restore()
