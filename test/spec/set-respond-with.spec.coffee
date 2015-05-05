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
  definitions:
    Player:
      properties:
        name:
          type: 'string'
          sample: 'Batman'


setRespondWith = window.SwaggerFakeServerPrivates.setRespondWith
fakeServer     = null
httpUrl        = 'http://api.uber.com/v1/players'
httpsUrl       = 'https://api.uber.com/v1/players'
response       = [ 200, { 'Content-Type': 'application/json' }, '[{"name":"Batman"}]' ]
postResponse   = [ 200, { 'Content-Type': 'application/json' }, '{"name":"Batman"}' ]


describe 'set respond with', ->
  beforeEach ->
    fakeServer =
      respondWith: sinon.spy()

    setRespondWith fakeServer, api

  it 'should call respondWith 6 times', ->
    expect(fakeServer.respondWith.callCount).to.be.equal 6

  it 'should match http get arguments', ->
    calledWith = fakeServer.respondWith.calledWith 'get', httpUrl, response

    expect(calledWith).to.be.ok

  it 'should match https get arguments', ->
    calledWith = fakeServer.respondWith.calledWith 'get', httpsUrl, response

    expect(calledWith).to.be.ok

  it 'should match http post arguments', ->
    calledWith = fakeServer.respondWith.calledWith 'post', httpUrl, postResponse

    expect(calledWith).to.be.ok

  it 'should match https post arguments', ->
    calledWith = fakeServer.respondWith.calledWith 'post', httpsUrl, postResponse

    expect(calledWith).to.be.ok
