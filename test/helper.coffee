'use strict'

fakeServer = sinon.fakeServer.create()

fakeServer.respondImmediately = true

response = [ 200, { 'Content-Type': 'application/json' }, Swagger ]

fakeServer.respondWith 'GET', '/swagger.json', response

response = [ 404, { 'Content-Type': 'application/json' }, '123' ]

fakeServer.respondWith 'GET', '/swagger-404.json', response

response = [ 200, { 'Content-Type': 'application/json' }, 'batman ate a bumble bee' ]

fakeServer.respondWith 'GET', '/swagger-error.json', response

stash = {}

window.stashIt = (obj, key) ->
  stash[key] = obj[key]

window.unstashIt = (obj, key) ->
  obj[key] = stash[key]

  delete stash[key]

window.AutoConfigFakeServerPrivates = {} # Allow the app to make its privates public

context = describe # easier to read tests
