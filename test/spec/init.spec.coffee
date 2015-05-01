'use strict'

sfs        = null
fakeServer = null

describe 'window.SwaggerFakeServer.init', ->
  beforeEach ->
    stashIt sinon.fakeServer, 'create'

    fakeServer =
      xhr:
        useFilters: false
        addFilter: sinon.spy()

    sinon.fakeServer.create = ->
      fakeServer

    sfs = new SwaggerFakeServer '/swagger.json'

  afterEach ->
    unstashIt sinon.fakeServer, 'create'

  it 'should populate the api', ->
    expect(sfs.api.basePath).to.be.ok

  it 'should use filters', ->
    expect(fakeServer.xhr.useFilters).to.be.ok

  it 'should add a filter', ->
    expect(fakeServer.xhr.addFilter.called).to.be.ok
