(function() {
  'use strict';
  var buildDefinition, buildProperty, clone, enumCombinations, getApiaryMetadata, getEnum, getRef, isApiCall, matchFunctions, processApiarySchema, processSchema, processSwaggerSchema, setApiaryResponse, setSwaggerResponse;

  window.AutoConfigFakeServer = {};

  matchFunctions = [];

  clone = function(obj) {
    var hasOwnProperty, isNull, isObject, key, temp, value;
    isObject = typeof obj === 'object';
    isNull = obj === null;
    if (isNull || !isObject) {
      return obj;
    }
    temp = obj.constructor();
    for (key in obj) {
      value = obj[key];
      hasOwnProperty = Object.prototype.hasOwnProperty.call(obj, key);
      if (hasOwnProperty) {
        temp[key] = clone(obj[key]);
      }
    }
    return temp;
  };

  isApiCall = function(url, host, schemes, basePath) {
    var baseRegex, hostRegex, isBasePath, isHost, isScheme, path, port, urlParts;
    hostRegex = /^((http[s]?):\/)?\/?([^:\/\s]+)(:([0-9])*)?((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
    urlParts = url.match(hostRegex);
    if (urlParts) {
      port = urlParts[4] || '';
      isHost = (urlParts[3] + port) === host;
      isScheme = schemes.indexOf(urlParts[2]) !== -1;
      baseRegex = new RegExp('^' + basePath);
      path = urlParts[6] + urlParts[8];
      isBasePath = path.match(baseRegex);
    }
    if (isHost && isScheme && isBasePath) {
      return true;
    }
    return false;
  };

  getRef = function(ref, api) {
    var current, i, len, path, paths;
    paths = ref.split('/');
    current = null;
    for (i = 0, len = paths.length; i < len; i++) {
      path = paths[i];
      if (path === '#') {
        current = api;
      } else if (current[path]) {
        current = current[path];
      } else {
        return false;
      }
    }
    return current;
  };

  buildDefinition = function(definition, api, isArray) {
    var build, isString, key, properties, property;
    if (isArray == null) {
      isArray = null;
    }
    build = {};
    isString = typeof definition === 'string';
    if (isString) {
      definition = getRef(definition, api);
    }
    properties = definition != null ? definition.properties : void 0;
    for (key in properties) {
      property = properties[key];
      build[key] = buildProperty(property, api);
    }
    if (isArray) {
      build = enumCombinations(build, properties);
    }
    return build;
  };

  buildProperty = function(property, api) {
    var build, isArray, ref1, ref2;
    build = null;
    if (property.sample) {
      build = property.sample;
    } else if (property["enum"]) {
      build = getEnum(property["enum"]);
    } else if (property.type === 'integer' || property.type === 'number') {
      build = 123;
    } else if (property.type === 'string') {
      build = 'abc';
    } else if (property.type === 'boolean') {
      build = true;
    } else if (property.type === 'null') {
      build = null;
    } else if ((ref1 = property.items) != null ? ref1['$ref'] : void 0) {
      isArray = property.type === 'array';
      build = buildDefinition((ref2 = property.items) != null ? ref2['$ref'] : void 0, api, isArray);
    }
    return build;
  };

  enumCombinations = function(build, properties) {
    var cloned, combination, combinations, i, item, j, key, len, len1, newCombinations, property, ref1;
    combinations = [build];
    for (key in properties) {
      property = properties[key];
      if (property["enum"]) {
        newCombinations = [];
        for (i = 0, len = combinations.length; i < len; i++) {
          combination = combinations[i];
          ref1 = property["enum"];
          for (j = 0, len1 = ref1.length; j < len1; j++) {
            item = ref1[j];
            cloned = clone(combination);
            cloned[key] = item;
            newCombinations.push(cloned);
          }
        }
        combinations = newCombinations;
      }
    }
    while (combinations.length < 6) {
      cloned = clone(build);
      combinations.push(cloned);
    }
    return combinations;
  };

  getEnum = function(items) {
    var rand, randFloored;
    rand = Math.random() * items.length;
    randFloored = Math.floor(rand);
    return items[randFloored];
  };

  setSwaggerResponse = function(fakeServer, api) {
    var build, buildJSON, i, len, method, methodDefinition, methods, path, regexPath, response, results, schema, scheme, schemes, url, urlRegex;
    schemes = api.schemes || [];
    results = [];
    for (i = 0, len = schemes.length; i < len; i++) {
      scheme = schemes[i];
      results.push((function() {
        var ref1, results1;
        ref1 = api.paths;
        results1 = [];
        for (path in ref1) {
          methods = ref1[path];
          results1.push((function() {
            var ref2, ref3, ref4, ref5, results2;
            results2 = [];
            for (method in methods) {
              methodDefinition = methods[method];
              regexPath = path.replace(/\{([a-zA-Z0-9_\\-]+)\}/g, '([a-zA-Z0-9_\\-]+)');
              url = scheme + '://' + api.host + api.basePath + regexPath;
              urlRegex = new RegExp(url + '(\\?(.)*)?$');
              if (methodDefinition != null ? (ref2 = methodDefinition.responses) != null ? ref2['200'] : void 0 : void 0) {
                schema = methodDefinition != null ? (ref3 = methodDefinition.responses) != null ? (ref4 = ref3['200']) != null ? ref4.schema : void 0 : void 0 : void 0;
                build = buildProperty(schema, api);
                buildJSON = JSON.stringify(build);
                response = [
                  200, {
                    'Content-Type': 'application/json'
                  }, buildJSON
                ];
                fakeServer.respondWith(method, urlRegex, response);
              }
              if (methodDefinition != null ? (ref5 = methodDefinition.responses) != null ? ref5['204'] : void 0 : void 0) {
                results2.push(fakeServer.respondWith(method, urlRegex, ''));
              } else {
                results2.push(void 0);
              }
            }
            return results2;
          })());
        }
        return results1;
      })());
    }
    return results;
  };

  setApiaryResponse = function(fakeServer, action, host, uriTemplate) {
    var actionResponse, header, i, len, params, path, ref1, ref2, response, responseHeaders, uri, uriRegex;
    if (action.attributes.uriTemplate) {
      uriTemplate = action.attributes.uriTemplate;
    }
    ref1 = uriTemplate.split('?'), path = ref1[0], params = ref1[1];
    uri = makeUrlRegex(host + path);
    uri = uri.replace(/\{([a-zA-Z0-9_\\-]+)\}/g, '([a-zA-Z0-9_\\-]+)');
    uriRegex = new RegExp(uri + '(\\?.*)?$');
    actionResponse = action.examples[0].responses[0];
    responseHeaders = {};
    ref2 = actionResponse.headers;
    for (i = 0, len = ref2.length; i < len; i++) {
      header = ref2[i];
      responseHeaders[header.name] = header.value;
    }
    response = [200, responseHeaders, actionResponse.body];
    return fakeServer.respondWith(action.method, uriRegex, response);
  };

  processSwaggerSchema = function(fakeServer, schema) {
    matchFunctions.push(function(method, url) {
      return isApiCall(url, schema.host, schema.schemes, schema.basePath);
    });
    return setSwaggerResponse(fakeServer, schema);
  };

  getApiaryMetadata = function(schema, name) {
    var i, len, prop, ref1;
    ref1 = schema.ast.metadata;
    for (i = 0, len = ref1.length; i < len; i++) {
      prop = ref1[i];
      if (prop.name === name) {
        return prop.value;
      }
    }
    return null;
  };

  processApiarySchema = function(fakeServer, schema) {
    var host;
    host = getApiaryMetadata(schema, 'HOST');
    return schema.ast.resourceGroups.forEach(function(resourceGroup) {
      return resourceGroup.resources.forEach(function(resource) {
        var uriTemplate;
        uriTemplate = resource.uriTemplate;
        matchFunctions.push(function(method, url) {
          var pattern;
          pattern = new RegExp(host + uriTemplate);
          return url.match(pattern);
        });
        return resource.actions.forEach(function(action) {
          return setApiaryResponse(fakeServer, action, host, uriTemplate);
        });
      });
    });
  };

  processSchema = function(fakeServer, schema) {
    if (schema.swagger) {
      processSwaggerSchema(fakeServer, schema);
    }
    if (schema.ast) {
      return processApiarySchema(fakeServer, schema);
    }
  };

  window.AutoConfigFakeServer.init = function() {
    var fakeServer;
    fakeServer = sinon.fakeServer.create();
    fakeServer.xhr.useFilters = true;
    fakeServer.xhr.addFilter(function(method, url) {
      var i, len, matchFunction, passThrough;
      passThrough = true;
      for (i = 0, len = matchFunctions.length; i < len; i++) {
        matchFunction = matchFunctions[i];
        if (matchFunction(method, url)) {
          passThrough = false;
        }
      }
      return passThrough;
    });
    return window.AutoConfigFakeServer.fakeServer = fakeServer;
  };

  window.AutoConfigFakeServer.restore = function() {
    var ref1;
    matchFunctions = [];
    return (ref1 = AutoConfigFakeServer.fakeServer) != null ? ref1.restore() : void 0;
  };

  window.AutoConfigFakeServer.consume = function(schemas) {
    var i, len, results, schema;
    if (schemas) {
      if (schemas.constructor !== Array) {
        schemas = [schemas];
      }
      results = [];
      for (i = 0, len = schemas.length; i < len; i++) {
        schema = schemas[i];
        results.push(processSchema(AutoConfigFakeServer.fakeServer, schema));
      }
      return results;
    } else {
      return console.error('schema is undefined');
    }
  };

  if (window.AutoConfigFakeServerPrivates) {
    window.AutoConfigFakeServerPrivates = {
      matchFunctions: matchFunctions,
      clone: clone,
      isApiCall: isApiCall,
      getRef: getRef,
      buildDefinition: buildDefinition,
      buildProperty: buildProperty,
      enumCombinations: enumCombinations,
      getEnum: getEnum,
      setSwaggerResponse: setSwaggerResponse,
      processSwaggerSchema: processSwaggerSchema,
      processSchema: processSchema
    };
  }

}).call(this);
