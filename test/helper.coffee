'use strict'

window.FakeServer = sinon.fakeServer.create()

response = [ 200, { 'Content-Type': 'application/json' }, window.swagger ]

window.FakeServer.respondWith 'GET', '/swagger.json', response

response = [ 404, { 'Content-Type': 'application/json' }, '123' ]

FakeServer.respondWith 'GET', '/swagger-404.json', response

response = [ 200, { 'Content-Type': 'application/json' }, 'batman ate a bumble bee' ]

FakeServer.respondWith 'GET', '/swagger-error.json', response