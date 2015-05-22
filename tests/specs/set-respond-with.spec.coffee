'use strict'

api =
  host    : 'api.uber.com'
  basePath: '/v1'
  schemes : ['https', 'http']
  paths:
    '/player':
      get:
        responses:
          '200':
            schema:
              type: 'object',
              items:
                '$ref' : '#/definitions/Player'
    '/players':
      get:
        responses:
          '200':
            schema:
              type: 'array',
              items:
                '$ref' : '#/definitions/Player'
      post:
        responses:
          '200':
            schema:
              type: 'object',
              items:
                '$ref' : '#/definitions/Player'
    '/players/{id}/comments':
      get:
        responses:
          '200':
            schema:
              type: 'array',
              items:
                '$ref' : '#/definitions/Player'
  definitions:
    Player:
      properties:
        name:
          type: 'string'
          sample: 'Batman'

setRespondWith = AutoConfigFakeServerPrivates.setRespondWith
fakeServer     = null
httpUrlRegex   = new RegExp('http://api.uber.com/v1/players' + '(\\?(.)*)?$')
httpsUrlRegex  = new RegExp('https://api.uber.com/v1/players' + '(\\?(.)*)?$')
inpathUrlRegex = new RegExp('https://api.uber.com/v1/players/' + '([a-zA-Z0-9_\\-]+)' + '/comments' + '(\\?(.)*)?$')
response       = [ 200, { 'Content-Type': 'application/json' }, '[{"name":"Batman"}]' ]
postResponse   = [ 200, { 'Content-Type': 'application/json' }, '{"name":"Batman"}' ]

describe 'set respond with', ->
  beforeEach ->
    fakeServer =
      respondWith: sinon.spy()

    setRespondWith fakeServer, api

  it 'should call respondWith 6 times', ->
    expect(fakeServer.respondWith.callCount).to.be.equal 8

  it 'should match http get arguments', ->
    calledWith = fakeServer.respondWith.calledWith 'get', httpUrlRegex, response

    expect(calledWith).to.be.ok

  it 'should match https get arguments', ->
    calledWith = fakeServer.respondWith.calledWith 'get', httpsUrlRegex, response

    expect(calledWith).to.be.ok

  it 'should match http post arguments', ->
    calledWith = fakeServer.respondWith.calledWith 'post', httpUrlRegex, postResponse

    expect(calledWith).to.be.ok

  it 'should match in path arguments', ->
    calledWith = fakeServer.respondWith.calledWith 'get', inpathUrlRegex, response

    expect(calledWith).to.be.ok
