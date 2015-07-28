'use strict'

schema =
  ast:
    metadata: [
      {
        name: 'HOST',
        value: 'http://www.topcoder.com'
      }
    ]

getApiaryMetadata = AutoConfigFakeServerPrivates.getApiaryMetadata

describe 'getApiaryMetadata', ->

  it 'should get metadata from the schema by name', ->

    host = getApiaryMetadata schema, 'HOST'
    expect(host).to.equal 'http://www.topcoder.com'

  it 'should return null for nonexistant metadata', ->

    foo = getApiaryMetadata schema, 'FOO'
    expect(foo).to.be.null


