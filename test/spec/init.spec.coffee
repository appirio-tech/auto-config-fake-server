'use strict'

sfs        = null
fakeServer = null
options    = null

describe 'window.SwaggerFakeServer.init', ->
  beforeEach ->
    stashIt sinon.fakeServer, 'create'

    fakeServer =
      respondWith: sinon.spy()
      xhr:
        useFilters: false
        addFilter: sinon.spy()

    sinon.fakeServer.create = ->
      fakeServer

    options = callback : sinon.spy()

    sfs = new SwaggerFakeServer '/swagger.json', options

  afterEach ->
    unstashIt sinon.fakeServer, 'create'

  it 'should populate the api', ->
    expect(sfs.api.basePath).to.be.ok

  it 'should execute callback', ->
    expect(options.callback.called).to.be.ok


