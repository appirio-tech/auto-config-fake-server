'use strict'

clone = SwaggerFakeServerPrivates.clone
clonedItem = null

item =
  a: 1
  b: 2
  c:
    x: 3
    y: ['a', 'b']

describe 'SwaggerFakeServer.clone', ->
  beforeEach ->
    clonedItem = clone item

  it 'should be equal to 1', ->
    expect(clonedItem.a).to.be.equal 1

  it 'should be equal to 2', ->
    expect(clonedItem.b).to.be.equal 2

  it 'should be equal to 3', ->
    expect(clonedItem.c.x).to.be.equal 3

  it 'should be equal to a', ->
    expect(clonedItem.c.y[0]).to.be.equal 'a'

  it 'should be equal to b', ->
    expect(clonedItem.c.y[1]).to.be.equal 'b'

