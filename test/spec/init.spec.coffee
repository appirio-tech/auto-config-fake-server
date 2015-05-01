'use strict'

context = describe
sfs     = null
spy     = null

describe 'window.SwaggerFakeServer.init', ->
  beforeEach ->
    stashIt window, 'console'
    stashIt sinon.fakeServer, 'create'

    sinon.fakeServer.create = ->
      {}

    console.error = ->
      # prevent error in logs

    spy = sinon.spy console, 'error'

  afterEach ->
    spy.restore()

    unstashIt window, 'console'
    unstashIt sinon.fakeServer, 'create'

  context '200 response', ->
    beforeEach ->
      sfs = new SwaggerFakeServer '/swagger.json'

    it 'should not log any errors', ->
      spy.called.should.notOk

    it 'should populate the api', ->
      sfs.api.basePath.ok

  context '404 response', ->
    beforeEach ->
      sfs = new SwaggerFakeServer '/swagger-404.json'

    it 'should log an error to console', ->
      spy.called.should.ok

  context 'invalid json', ->
    beforeEach ->
      sfs = new SwaggerFakeServer '/swagger-error.json'

    it 'should log an error to console', ->
      spy.called.should.ok

