'use strict'

window.AutoConfigFakeServer = {}
apis                     = []

clone = (obj) ->
  isObject = typeof obj == 'object'
  isNull = obj == null

  return obj if isNull || !isObject

  temp = obj.constructor()

  for key, value of obj
    hasOwnProperty = Object.prototype.hasOwnProperty.call obj, key

    temp[key] = clone obj[key] if hasOwnProperty

  temp

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

buildDefinition = (definition, api, isArray = null) ->
  build      = {}
  isString   = typeof definition == 'string'
  definition = getRef definition, api if isString
  properties = definition?.properties

  for key, property of properties
    build[key] = buildProperty property, api

  build = enumCombinations build, properties  if isArray

  build

buildProperty = (property, api) ->
  build = null

  if property.sample
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
    isArray = property.type == 'array'
    build   = buildDefinition property.items?['$ref'], api, isArray

  build

enumCombinations = (build, properties) ->
  combinations = [build]

  for key, property of properties
    if property.enum
      newCombinations = []

      for combination in combinations
        for item in property.enum
          cloned      = clone combination
          cloned[key] = item

          newCombinations.push cloned

      combinations = newCombinations

  combinations

getEnum = (items) ->
  rand        = Math.random() * items.length
  randFloored = Math.floor rand

  items[randFloored]

setRespondWith = (fakeServer, api) ->
  schemes = api.schemes || []

  for scheme in schemes
    for path, methods of api.paths
      for method, methodDefinition of methods
        schema = methodDefinition?.responses?['200']?.schema

        if schema
          build     = buildProperty schema, api
          buildJSON = JSON.stringify build
          regexPath = path.replace /\{([a-zA-Z0-9_\\-]+)\}/g, '([a-zA-Z0-9_\\-]+)'
          url       = scheme + '://' + api.host + api.basePath + regexPath
          urlRegex  = new RegExp(url + '(\\?(.)*)?$')
          response  = [200, { 'Content-Type': 'application/json' }, buildJSON]

          fakeServer.respondWith method, urlRegex, response

window.AutoConfigFakeServer.init = ->
  fakeServer = sinon.fakeServer.create()
  fakeServer.xhr.useFilters = true

  filter = (method, url) ->
    for api in apis
      return false if isApiCall url, api.host, api.schemes, api.basePath

    true

  fakeServer.xhr.addFilter filter

  window.AutoConfigFakeServer.fakeServer = fakeServer

window.AutoConfigFakeServer.restore = ->
  apis = []

  AutoConfigFakeServer.fakeServer?.restore();

window.AutoConfigFakeServer.consume = (schema, callback) ->
  isString = typeof schema == 'string'

  onSuccess = (json) ->
    apis.push json

    setRespondWith AutoConfigFakeServer.fakeServer, json

    callback?()

  if isString
    getJSON schema, onSuccess
  else
    onSuccess schema

# For testing purposes
if window.AutoConfigFakeServerPrivates
  window.AutoConfigFakeServerPrivates =
    getJSON         : getJSON
    isApiCall       : isApiCall
    getRef          : getRef
    buildDefinition : buildDefinition
    setRespondWith  : setRespondWith
    apis            : apis
    getEnum         : getEnum
    enumCombinations: enumCombinations
    clone           : clone
