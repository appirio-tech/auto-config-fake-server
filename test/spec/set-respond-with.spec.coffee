'use strict'

api =
  host    : 'api.uber.com'
  basePath: '/v1'
  schemes : ['https']
  paths:
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
url            = 'https://api.uber.com/v1/players'
response       = [ 200, { 'Content-Type': 'application/json' }, '[{"name":"Batman"}]' ]
postResponse   = [ 200, { 'Content-Type': 'application/json' }, '{"name":"Batman"}' ]


describe 'set respond with', ->
  beforeEach ->
    fakeServer =
      respondWith: sinon.spy()

    setRespondWith fakeServer, api

  it 'should call respondWith twice', ->
    expect(fakeServer.respondWith.calledTwice).to.be.ok

  it 'should match get arguments', ->
    calledWith = fakeServer.respondWith.calledWith 'get', url, response

    expect(calledWith).to.be.ok

  it 'should match post arguments', ->
    calledWith = fakeServer.respondWith.calledWith 'post', url, postResponse

    expect(calledWith).to.be.ok

    # it 'should set limit to 123', ->
    #   expect(build.limit).to.equal 123

    # it 'should set count to 444', ->
    #   expect(build.count).to.equal 444

    # it 'should set history to an array', ->
    #   expect(build.history.length).to.equal 1

    # it 'should set history first activty name to "abc"', ->
    #   expect(build.history[0].name).to.equal 'abc'

    # it 'should set history first activty isActive to true', ->
    #   expect(build.history[0].isActive).to.equal true

    # it 'should set player', ->
    #   expect(build.history[0].player.name).to.equal 'Batman'