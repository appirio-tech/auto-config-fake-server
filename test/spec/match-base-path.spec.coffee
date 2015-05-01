'use strict'

match = null
url   = null
matchBasePath = window.SwaggerFakeServerPrivates.matchBasePath

describe 'matchBasePath', ->
  describe 'http://localhost:8080/api/v1/debug.html', ->
    beforeEach ->
      url = 'http://localhost:8080/api/v1/debug.html'

    context 'match host, schemes, basePath', ->
      beforeEach ->
        match = matchBasePath url, 'localhost:8080', ['http'], '/api/v1'

      it 'should match', ->
        expect(match).to.be.ok

    context 'match host, schemes but not basePath', ->
      beforeEach ->
        match = matchBasePath url, 'localhost:8080', ['http'], '/api/booger'

      it 'should not match', ->
        expect(match).not.to.be.ok

    context 'match host, basePath but not schemes', ->
      beforeEach ->
        match = matchBasePath url, 'localhost:8080', ['https'], '/api/v1'

      it 'should not match', ->
        expect(match).not.to.be.ok

    context 'match basePath, schemes but not host', ->
      beforeEach ->
        match = matchBasePath url, 'localhost', ['http'], '/api/v1'

      it 'should not match', ->
        expect(match).not.to.be.ok

  describe 'https://www.localhost.com/api/batman', ->
    beforeEach ->
      url = 'https://www.localhost.com/api/batman'

    context 'match host, schemes, basePath', ->
      beforeEach ->
        match = matchBasePath url, 'www.localhost.com', ['https'], '/api'

      it 'should match', ->
        expect(match).to.be.ok

