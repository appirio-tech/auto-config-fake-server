(function() {
  'use strict';
  var apis, buildDefinition, buildProperty, clone, enumCombinations, getEnum, getRef, isApiCall, setRespondWith;

  window.AutoConfigFakeServer = {};

  apis = [];

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

  setRespondWith = function(fakeServer, api) {
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
            var ref2, ref3, results2;
            results2 = [];
            for (method in methods) {
              methodDefinition = methods[method];
              schema = methodDefinition != null ? (ref2 = methodDefinition.responses) != null ? (ref3 = ref2['200']) != null ? ref3.schema : void 0 : void 0 : void 0;
              if (schema) {
                build = buildProperty(schema, api);
                buildJSON = JSON.stringify(build);
                regexPath = path.replace(/\{([a-zA-Z0-9_\\-]+)\}/g, '([a-zA-Z0-9_\\-]+)');
                url = scheme + '://' + api.host + api.basePath + regexPath;
                urlRegex = new RegExp(url + '(\\?(.)*)?$');
                response = [
                  200, {
                    'Content-Type': 'application/json'
                  }, buildJSON
                ];
                results2.push(fakeServer.respondWith(method, urlRegex, response));
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

  window.AutoConfigFakeServer.init = function() {
    var fakeServer, filter;
    fakeServer = sinon.fakeServer.create();
    fakeServer.xhr.useFilters = true;
    filter = function(method, url) {
      var api, i, len;
      for (i = 0, len = apis.length; i < len; i++) {
        api = apis[i];
        if (isApiCall(url, api.host, api.schemes, api.basePath)) {
          return false;
        }
      }
      return true;
    };
    fakeServer.xhr.addFilter(filter);
    return window.AutoConfigFakeServer.fakeServer = fakeServer;
  };

  window.AutoConfigFakeServer.restore = function() {
    var ref1;
    apis = [];
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
        apis.push(schema);
        results.push(setRespondWith(AutoConfigFakeServer.fakeServer, schema));
      }
      return results;
    } else {
      return console.error('schema is undefined');
    }
  };

  if (window.AutoConfigFakeServerPrivates) {
    window.AutoConfigFakeServerPrivates = {
      isApiCall: isApiCall,
      getRef: getRef,
      buildDefinition: buildDefinition,
      setRespondWith: setRespondWith,
      apis: apis,
      getEnum: getEnum,
      enumCombinations: enumCombinations,
      clone: clone
    };
  }

}).call(this);
