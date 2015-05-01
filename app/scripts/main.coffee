'use strict'

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
  hostRegex   = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)(:([0-9])*)?((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/
  urlParts    = url.match hostRegex
  port        = urlParts[4] || ''
  isHost      = (urlParts[3] + port) == host
  isScheme    = schemes.indexOf(urlParts[2]) != -1
  baseRegex   = new RegExp('^' + basePath)
  isBasePath  = urlParts[6].match baseRegex

  return true if isHost && isScheme && isBasePath

  false

setFilter = (fakeServer, api) ->
  fakeServer.xhr.useFilters = true

  fakeServer.xhr.addFilter (method, url) ->
    isApiCall url, api.host, api.schemes, api.basePath

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

buildDefinition = (definition, api) ->
  if typeof definition == 'string'
    definition = getRef definition, api

  build = {}

  for key, property of definition?.properties
    if property.sample
      build[key] = property.sample
    else if property.type == 'integer' || property.type == 'number'
      build[key] = 123
    else if property.type == 'string'
      build[key] = 'abc'
    else if property.type == 'boolean'
      build[key] = true
    else if property.items?['$ref']
      build[key] = buildDefinition property.items?['$ref'], api
      build[key] = [build[key]] if property.type == 'array'

  build

setRespondWith = (fakeServer, api) ->
  for scheme in api.schemes
    for path, methods of api.paths
      for method, methodDefinition of methods
        ref = methodDefinition?.responses?['200']?.schema?.items?['$ref']

        if ref
          build     = buildDefinition ref, api
          build     = [build] if methodDefinition.responses['200'].schema.type == 'array'
          buildJSON = JSON.stringify build
          url       = scheme + '://' + api.host + api.basePath + path
          response  = [200, { 'Content-Type': 'application/json' }, buildJSON]

          fakeServer.respondWith method, url, response

window.SwaggerFakeServer = (swaggerUrl) ->
  FS = this

  onSuccess = (json) ->
    FS.api = json
    FS.fakeServer = sinon.fakeServer.create()

    setFilter FS.fakeServer

  getJSON swaggerUrl, onSuccess

  FS

# For testing purposes
if window.SwaggerFakeServerPrivates
  window.SwaggerFakeServerPrivates =
    getJSON        : getJSON
    isApiCall      : isApiCall
    getRef         : getRef
    buildDefinition: buildDefinition
    setRespondWith : setRespondWith

