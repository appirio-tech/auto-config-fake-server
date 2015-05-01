'use strict'

api =
  definitions:
    Player:
      properties:
        name:
          type: 'string'
          sample: 'Batman'
    Activity:
      properties:
        name:
          type: 'string'
        isActive:
          type: 'boolean'
        player:
          type: 'object'
          items:
            '$ref': '#/definitions/Player'
    Activities:
      properties:
        offset:
          type: 'integer'
        limit:
          type: 'number'
        count:
          type: 'integer'
          sample: 444
        history:
          type: 'array'
          items:
            '$ref': '#/definitions/Activity'

build           = null
buildDefinition = window.SwaggerFakeServerPrivates.buildDefinition

describe 'build definitions', ->
  context 'Activities', ->
    beforeEach ->
      build = buildDefinition '#/definitions/Activities', api

    it 'should set offset to 123', ->
      expect(build.offset).to.equal 123

    it 'should set limit to 123', ->
      expect(build.limit).to.equal 123

    it 'should set count to 444', ->
      expect(build.count).to.equal 444

    it 'should set history to an array', ->
      expect(build.history.length).to.equal 1

    it 'should set history first activty name to "abc"', ->
      expect(build.history[0].name).to.equal 'abc'

    it 'should set history first activty isActive to true', ->
      expect(build.history[0].isActive).to.equal true

    it 'should set player', ->
      expect(build.history[0].player.name).to.equal 'Batman'