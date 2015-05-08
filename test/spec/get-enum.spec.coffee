'use strict'


getEnum = SwaggerFakeServerPrivates.getEnum
item = null
items = [
  'a'
  'b'
  'c'
]

describe 'SwaggerFakeServer.getEnum', ->
  beforeEach ->
    item = getEnum items

  it 'should return a random element', ->
    expect(items).to.include item

