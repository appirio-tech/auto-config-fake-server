'use strict'

sample = null
getSample = SwaggerFakeServerPrivates.getSample

sampleObj =
  abc: 123

sampleArray = [
  'a'
  'b'
  'c'
]


describe 'SwaggerFakeServer.getSample', ->
  context 'sample is a string', ->
    beforeEach ->
      sample = getSample 'bob'

    it 'should return `bob`', ->
      expect(sample).to.be.equal 'bob'

  context 'sample is a number', ->
    beforeEach ->
      sample = getSample 123

    it 'should return 123', ->
      expect(sample).to.be.equal 123

  context 'sample is an object', ->
    beforeEach ->
      sample = getSample sampleObj

    it 'should return 123', ->
      expect(sample).to.be.equal sampleObj

  context 'sample is an array', ->
    beforeEach ->
      sample = getSample sampleArray

    it 'should return a random element', ->
      expect(sampleArray).to.include sample

