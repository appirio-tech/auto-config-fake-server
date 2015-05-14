'use strict'

api =
  definitions:
    Player: {}
    User:
      Stats: {}

ref    = null
getRef = AutoConfigFakeServerPrivates.getRef

describe 'get Ref', ->
  context 'ref existing 2 level deep', ->
    beforeEach ->
      ref = getRef '#/definitions', api

    it 'should be ok', ->
      expect(ref).to.be.ok

  context 'ref existing 2 level deep', ->
    beforeEach ->
      ref = getRef '#/definitions/Player', api

    it 'should be ok', ->
      expect(ref).to.be.ok

  describe 'ref existing 3 level deep', ->
    beforeEach ->
      ref = getRef '#/definitions/User/Stats', api

    it 'should be ok', ->
      expect(ref).to.be.ok

