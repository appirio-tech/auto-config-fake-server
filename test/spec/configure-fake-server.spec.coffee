'use strict'

fakeServer = null
options    = null

configureFakeServer = window.SwaggerFakeServerPrivates.configureFakeServer

describe 'configure fake server', ->
  beforeEach ->

    fakeServer =
      respondWith: sinon.spy()
      xhr:
        useFilters: false
        addFilter: sinon.spy()

    options =
      callback          : sinon.spy()
      respondImmediately: true
      autoRespond       : true
      autoRespondAfter  : 20

    configureFakeServer fakeServer, options

  it 'should use filters', ->
    expect(fakeServer.xhr.useFilters).to.be.ok

  it 'should add a filter', ->
    expect(fakeServer.xhr.addFilter.called).to.be.ok

  it 'should set respondImmediately to true', ->
    expect(fakeServer.respondImmediately).to.be.ok

  it 'should set autoRespond to false', ->
    expect(fakeServer.autoRespond).to.be.ok

  it 'should set autoRespondAfter to 20', ->
    expect(fakeServer.autoRespondAfter).to.be.equal 20
