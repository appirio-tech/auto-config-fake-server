'use strict'

enumCombinations = AutoConfigFakeServerPrivates.enumCombinations

build =
  a: 'a'
  b: '1'
  c: 'a'

properties =
  a:
    type: 'string'
  b:
    type: 'string'
    enum: ['1', '2', '3']
  c:
    type: 'string'
    enum: ['a', 'b', 'c']

combinations = null

describe 'AutoConfigFakeServer.enumCombinations', ->
  beforeEach ->
    combinations = enumCombinations build, properties

  it 'should expect 9 combinations', ->
    expect(combinations.length).to.equal 9

  it 'should expect to equal to `a`', ->
    expect(combinations[0].a).to.equal 'a'

  it 'should expect to equal to `1`', ->
    expect(combinations[0].b).to.equal '1'

  it 'should expect to equal to `a`', ->
    expect(combinations[0].c).to.equal 'a'

  it 'should expect to equal to `a`', ->
    expect(combinations[8].a).to.equal 'a'

  it 'should expect to equal to `3`', ->
    expect(combinations[8].b).to.equal '3'

  it 'should expect to equal to `c`', ->
    expect(combinations[8].c).to.equal 'c'

