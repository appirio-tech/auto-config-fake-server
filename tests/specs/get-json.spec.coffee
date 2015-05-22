'use strict'

spy      = null
errorSpy = null
getJSON  = AutoConfigFakeServerPrivates.getJSON

describe 'get JSON', ->
  beforeEach ->
    stashIt window, 'console'
    spy      = sinon.spy()
    errorSpy = sinon.spy console, 'error'

  afterEach ->
    errorSpy.restore()

  context '200 response', ->
    beforeEach ->
      getJSON '/swagger.json', spy

    it 'should call spy', ->
      expect(spy.called).to.be.ok

    it 'should not call error spy', ->
      expect(errorSpy.called).to.not.be.ok

  context '404 response', ->
    beforeEach ->
      getJSON '/swagger-404.json', spy

    it 'should call error spy', ->
      expect(errorSpy).to.be.ok

    it 'should not call spy', ->
      expect(spy.called).to.not.be.ok

  context 'invalid json', ->
    beforeEach ->
      getJSON '/swagger-404.json', spy

    it 'should call error spy', ->
      expect(errorSpy).to.be.ok

    it 'should not call spy', ->
      expect(spy.called).to.not.be.ok

