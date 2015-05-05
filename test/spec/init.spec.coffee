'use strict'

fakeServer =
  xhr:
    useFilters: false
    addFilter: sinon.spy()

createStub = null

describe 'SwaggerFakeServer.init', ->
  beforeEach ->
    createStub = sinon.stub sinon.fakeServer, 'create'
    createStub.returns fakeServer

    SwaggerFakeServer.init()

  afterEach ->
    createStub.restore()

  it 'should call create', ->
    expect(createStub.called).to.be.ok

  it 'should use filters', ->
    expect(fakeServer.xhr.useFilters).to.be.ok

  it 'should add a filter', ->
    expect(fakeServer.xhr.addFilter.called).to.be.ok


