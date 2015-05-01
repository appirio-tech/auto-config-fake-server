'use strict'

context = describe

spy = null

describe 'window.SwaggerFakeServer.init', ->
  beforeEach ->
    spy = sinon.spy window.console, 'error'

  afterEach ->
    spy.restore()

  context '200 response', ->
    beforeEach ->
      window.SwaggerFakeServer.init '/swagger.json'
      window.FakeServer.respond()

    it 'should not log any errors', ->
      spy.called.should.notOk

  context '404 response', ->
    beforeEach ->
      window.SwaggerFakeServer.init '/swagger-404.json'
      window.FakeServer.respond()

    it 'should log an error to console', ->
      spy.called.should.ok

  context 'invalid json', ->
    beforeEach ->
      window.SwaggerFakeServer.init '/swagger-error.json'
      window.FakeServer.respond()

    it 'should log an error to console', ->
      spy.called.should.ok

