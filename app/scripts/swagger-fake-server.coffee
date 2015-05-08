'use strict'

window.SwaggerFakeServer = {}
apis                     = []

getJSON = (url, success) ->
  xhr = new XMLHttpRequest()

  xhr.onreadystatechange = ->
    if xhr.readyState == 4
      if xhr.status == 200
        try
          json = JSON.parse xhr.responseText
        catch error
          console.error 'Invalid JSON'
          console.error error

        success json
      else
        console.error 'Couldnt get ' + url
        console.error xhr.statusText

  xhr.open 'GET', url, true
  xhr.responseType = 'text'
  xhr.send()

isApiCall = (url, host, schemes, basePath) ->
  hostRegex   = /^((http[s]?):\/)?\/?([^:\/\s]+)(:([0-9])*)?((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/
  urlParts    = url.match hostRegex

  if urlParts
    port        = urlParts[4] || ''
    isHost      = (urlParts[3] + port) == host
    isScheme    = schemes.indexOf(urlParts[2]) != -1
    baseRegex   = new RegExp('^' + basePath)
    path        = urlParts[6] + urlParts[8]
    isBasePath  = path.match baseRegex

  return true if isHost && isScheme && isBasePath

  false

getRef = (ref, api) ->
  paths   = ref.split '/'
  current = null

  for path in paths
    if path == '#'
      current = api
    else if current[path]
      current = current[path]
    else
      return false

  current

buildDefinition = (definition, api, isArray = nil) ->
  if typeof definition == 'string'
    definition = getRef definition, api

  build = {}

  for key, property of definition?.properties
    build[key] = buildProperty property, api

  build

enumCombinations = (build, properties) ->
  combinations = [build]

  for key, property of properties
    if property.enum
      newCombinations = []

      for combination in combinations
        for item in property.enum
          cloned = combination.clone
          cloned[key] = item
          newCombinations.push cloned

      combinations = newCombinations


buildProperty = (property, api, sample = nil) ->
  build = null

  if sample
    build = sample
  else if property.sample
    build = property.sample
  else if property.enum
    build = getEnum property.enum
  else if property.type == 'integer' || property.type == 'number'
    build = 123
  else if property.type == 'string'
    build = 'abc'
  else if property.type == 'boolean'
    build = true
  else if property.items?['$ref']
    build = buildDefinition property.items?['$ref'], api
    build = [build] if property.type == 'array'

  build


getEnum = (items) ->
  rand        = Math.random() * items.length
  randFloored = Math.floor rand

  items[randFloored]

setRespondWith = (fakeServer, api) ->
  for scheme in api.schemes
    for path, methods of api.paths
      for method, methodDefinition of methods
        schema = methodDefinition?.responses?['200']?.schema

        if schema
          build     = buildProperty schema, api
          buildJSON = JSON.stringify build
          url       = scheme + '://' + api.host + api.basePath + path
          urlRegex  = new RegExp(url + '(\\?(.)*)?$')
          response  = [200, { 'Content-Type': 'application/json' }, buildJSON]

          fakeServer.respondWith method, urlRegex, response

window.SwaggerFakeServer.init = ->
  fakeServer = sinon.fakeServer.create()
  fakeServer.xhr.useFilters = true

  filter = (method, url) ->
    for api in apis
      return false if isApiCall url, api.host, api.schemes, api.basePath

    true

  fakeServer.xhr.addFilter filter

  window.SwaggerFakeServer.fakeServer = fakeServer

window.SwaggerFakeServer.consume = (swaggerUrl, callback) ->
  onSuccess = (json) ->
    apis.push json

    setRespondWith SwaggerFakeServer.fakeServer, json

    callback?()

  getJSON swaggerUrl, onSuccess

# For testing purposes
if window.SwaggerFakeServerPrivates
  window.SwaggerFakeServerPrivates =
    getJSON        : getJSON
    isApiCall      : isApiCall
    getRef         : getRef
    buildDefinition: buildDefinition
    setRespondWith : setRespondWith
    apis           : apis
    getEnum        : getEnum
