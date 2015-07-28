'use strict'

window.AutoConfigFakeServer = {}
matchFunctions              = []

#########################
# Swagger schema parsing
#########################

clone = (obj) ->
  isObject = typeof obj == 'object'
  isNull = obj == null

  return obj if isNull || !isObject

  temp = obj.constructor()

  for key, value of obj
    hasOwnProperty = Object.prototype.hasOwnProperty.call obj, key

    temp[key] = clone obj[key] if hasOwnProperty

  temp

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
  else if property.type == 'null'
    build = null
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

  # So we have at least 6 items in our mock
  while combinations.length < 6
    cloned = clone build
    combinations.push cloned

  combinations

getEnum = (items) ->
  rand        = Math.random() * items.length
  randFloored = Math.floor rand

  items[randFloored]

setSwaggerResponse = (fakeServer, api) ->
  schemes = api.schemes || []

  for scheme in schemes
    for path, methods of api.paths
      for method, methodDefinition of methods
        regexPath = path.replace /\{([a-zA-Z0-9_\\-]+)\}/g, '([a-zA-Z0-9_\\-]+)'
        url       = scheme + '://' + api.host + api.basePath + regexPath
        urlRegex  = new RegExp(url + '(\\?(.)*)?$')

        if  methodDefinition?.responses?['200']
          schema    = methodDefinition?.responses?['200']?.schema
          build     = buildProperty schema, api
          buildJSON = JSON.stringify build
          response  = [200, { 'Content-Type': 'application/json' }, buildJSON]

          fakeServer.respondWith method, urlRegex, response

        if methodDefinition?.responses?['204']
          fakeServer.respondWith method, urlRegex, ''

processSwaggerSchema = (fakeServer, schema) ->
  matchFunctions.push (method, url) ->
    isApiCall url, schema.host, schema.schemes, schema.basePath 

  setSwaggerResponse(fakeServer, schema)

#########################
# Apiary schema parsing
#########################

setUriMatcher = (path) ->
  matchFunctions.push (method, url) ->
    pattern = new RegExp(path)
    url.match pattern

getApiaryMetadata = (schema, name) ->
  for prop in schema.ast.metadata
    if prop.name == name
      return prop.value

  null

setApiaryResponse = (fakeServer, action, host, uriTemplate) ->
  if action.attributes.uriTemplate
    uriTemplate = action.attributes.uriTemplate

  # TODO: Do something with params
  [path, params] = uriTemplate.split '?'

  uri             = host + path
  uri             = uri.replace /\{([a-zA-Z0-9_\\-]+)\}/g, '([a-zA-Z0-9_\\-]+)'
  uriRegex        = new RegExp(uri + '(\\?.*)?$')

  actionResponse  = action.examples[0].responses[0]
  responseHeaders = {}

  for header in actionResponse.headers
    responseHeaders[header.name] = header.value

  response = [200, responseHeaders, actionResponse.body]

  fakeServer.respondWith action.method, uriRegex, response

processApiarySchema = (fakeServer, schema) ->
  host = getApiaryMetadata schema, 'HOST'

  schema.ast.resourceGroups.forEach (resourceGroup) ->
    resourceGroup.resources.forEach (resource) ->

      uriTemplate = resource.uriTemplate
      uri         = host + uriTemplate

      setUriMatcher uri

      resource.actions.forEach (action) ->
        setApiaryResponse fakeServer, action, host, uriTemplate

#########################
# Fakeserver setup
#########################

processSchema = (fakeServer, schema) ->
  if schema.swagger
    processSwaggerSchema fakeServer, schema

  if schema.ast
    processApiarySchema fakeServer, schema

# In order to support different types of filtering by different types of schemas we are pushing functions to an array of filter functions. This primary filter checks each filter in the array to determine whether we should mock the endpoint or let it pass through.
addPrimaryFilter = (fakeServer, matchFunctions) ->
  fakeServer.xhr.useFilters = true

  fakeServer.xhr.addFilter (method, url) ->
    passThrough = true

    for matchFunction in matchFunctions
      if matchFunction method, url
        passThrough = false

    passThrough

window.AutoConfigFakeServer.init = ->
  fakeServer = sinon.fakeServer.create()
  addPrimaryFilter fakeServer, matchFunctions

  window.AutoConfigFakeServer.fakeServer = fakeServer

window.AutoConfigFakeServer.restore = ->
  matchFunctions = []

  AutoConfigFakeServer.fakeServer?.restore();

window.AutoConfigFakeServer.consume = (schemas) ->
  if schemas
    unless schemas.constructor == Array
      schemas = [schemas]

    for schema in schemas
      processSchema AutoConfigFakeServer.fakeServer, schema

  else
    console.error 'schema is undefined'

#########################
# Expose private methods for testing
#########################

if window.AutoConfigFakeServerPrivates
  window.AutoConfigFakeServerPrivates =
    matchFunctions      : matchFunctions
    clone               : clone
    isApiCall           : isApiCall
    getRef              : getRef
    buildDefinition     : buildDefinition
    buildProperty       : buildProperty
    enumCombinations    : enumCombinations
    getEnum             : getEnum
    setSwaggerResponse  : setSwaggerResponse
    processSwaggerSchema: processSwaggerSchema
    setUriMatcher       : setUriMatcher
    getApiaryMetadata   : getApiaryMetadata
    setApiaryResponse   : setApiaryResponse
    processApiarySchema : processApiarySchema
    processSchema       : processSchema
    addPrimaryFilter    : addPrimaryFilter
