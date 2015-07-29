'use strict'

schema =
  ast: 
    metadata: [
      {
        name: 'HOST',
        value: 'http://api.topcoder.com'
      }
    ]
    resourceGroups: [
      {
        resources: [
          {
            uriTemplate: '/work',
            actions: [
              {
                method: 'POST',
                attributes: {
                  uriTemplate: '/work/foo'
                },
                examples: [
                  {
                    requests: [
                      {
                        headers: [
                          {
                            name: 'Content-Type'
                            value: 'application/json'
                          }
                        ]
                        body: 'test-body'
                      }
                    ],
                    responses: [
                      {
                        name: '200'
                        headers: [
                          {
                            name: 'Content-Type'
                            value: 'application/json'
                          }
                        ]
                        body: 'test-body'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]

processApiarySchema = AutoConfigFakeServerPrivates.processApiarySchema
matchFunctions      = AutoConfigFakeServerPrivates.matchFunctions
fakeserver          = null

describe 'processApiarySchema', ->

  fakeServer =
    setApiaryResponse: sinon.spy()
    respondWith: sinon.spy()

  processApiarySchema.call this, fakeServer, schema

  it 'should push a matcher function to the matchFunctions array for each resource', ->
    expect(matchFunctions.length).to.be.equal 1
