'use strict'

fakeServer =
  restore: sinon.spy()
  xhr:
    useFilters: false
    addFilter: sinon.spy()

createStub = null

describe 'SwaggerFakeServer.init', ->
  beforeEach ->
    debugger
    createStub = sinon.stub sinon.fakeServer, 'create'
    createStub.returns fakeServer

    SwaggerFakeServer.init()

  afterEach ->
    SwaggerFakeServer.restore()
    createStub.restore()

  it 'should call create', ->
    expect(createStub.called).to.be.ok

  it 'should use filters', ->
    expect(fakeServer.xhr.useFilters).to.be.ok

  it 'should add a filter', ->
    expect(fakeServer.xhr.addFilter.called).to.be.ok


