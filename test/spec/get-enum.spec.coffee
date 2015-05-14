'use strict'


getEnum = AutoConfigFakeServerPrivates.getEnum
item = null
items = [
  'a'
  'b'
  'c'
]

describe 'AutoConfigFakeServer.getEnum', ->
  beforeEach ->
    item = getEnum items

  it 'should return a random element', ->
    expect(items).to.include item

