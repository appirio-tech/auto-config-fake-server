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
    '/players/{id}':
      put:
        responses:
          '204':
            schema: null
    '/players/{player_id}/comments/{comment_id}':
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

setSwaggerResponse = AutoConfigFakeServerPrivates.setSwaggerResponse
fakeServer     = null
httpPutRegex   = new RegExp('http://api.uber.com/v1/players/' + '([a-zA-Z0-9_\\-]+)' + '(\\?(.)*)?$')
httpUrlRegex   = new RegExp('http://api.uber.com/v1/players' + '(\\?(.)*)?$')
httpsUrlRegex  = new RegExp('https://api.uber.com/v1/players' + '(\\?(.)*)?$')
inpathUrlRegex = new RegExp('https://api.uber.com/v1/players/' + '([a-zA-Z0-9_\\-]+)' + '/comments/' + '([a-zA-Z0-9_\\-]+)' + '(\\?(.)*)?$')
response       = [ 200, { 'Content-Type': 'application/json' }, '[{"name":"Batman"},{"name":"Batman"},{"name":"Batman"},{"name":"Batman"},{"name":"Batman"},{"name":"Batman"}]' ]
postResponse   = [ 200, { 'Content-Type': 'application/json' }, '{"name":"Batman"}' ]

describe 'set respond with', ->
  beforeEach ->
    fakeServer =
      respondWith: sinon.spy()

    setSwaggerResponse fakeServer, api

  it 'should call respondWith 6 times', ->
    expect(fakeServer.respondWith.callCount).to.be.equal 10

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

  it 'should match http put 204 arguments', ->
    calledWith = fakeServer.respondWith.calledWith 'put', httpPutRegex, ''

    expect(calledWith).to.be.ok
