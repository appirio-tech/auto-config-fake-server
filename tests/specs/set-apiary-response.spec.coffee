'use strict'

actionWithTemplate =
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


actionWithoutTemplate =
  method: 'POST',
  attributes: {
    uriTemplate: ''
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


fakeServer        = null
host              = 'http://api.topcoder.com'
uriTemplate       = '/work'
setApiaryResponse = AutoConfigFakeServerPrivates.setApiaryResponse

describe 'setApiaryResponse', ->

  beforeEach ->
    fakeServer =
      respondWith: sinon.spy()

  it 'should call respondWith once per action', ->
    setApiaryResponse fakeServer, actionWithTemplate, host, uriTemplate
    expect(fakeServer.respondWith.callCount).to.be.equal 1
