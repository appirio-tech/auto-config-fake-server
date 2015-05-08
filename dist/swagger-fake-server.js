(function() {
  'use strict';
  var apis, buildDefinition, buildProperty, clone, enumCombinations, getEnum, getJSON, getRef, isApiCall, setRespondWith;

  window.SwaggerFakeServer = {};

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

  getJSON = function(url, success) {
    var xhr;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      var error, json;
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            json = JSON.parse(xhr.responseText);
          } catch (_error) {
            error = _error;
            console.error('Invalid JSON');
            console.error(error);
          }
          return success(json);
        } else {
          console.error('Couldnt get ' + url);
          return console.error(xhr.statusText);
        }
      }
    };
    xhr.open('GET', url, true);
    xhr.responseType = 'text';
    return xhr.send();
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
    var current, path, paths, _i, _len;
    paths = ref.split('/');
    current = null;
    for (_i = 0, _len = paths.length; _i < _len; _i++) {
      path = paths[_i];
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
    var build, isArray, _ref, _ref1;
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
    } else if ((_ref = property.items) != null ? _ref['$ref'] : void 0) {
      isArray = property.type === 'array';
      build = buildDefinition((_ref1 = property.items) != null ? _ref1['$ref'] : void 0, api, isArray);
    }
    return build;
  };

  enumCombinations = function(build, properties) {
    var cloned, combination, combinations, item, key, newCombinations, property, _i, _j, _len, _len1, _ref;
    combinations = [build];
    for (key in properties) {
      property = properties[key];
      if (property["enum"]) {
        newCombinations = [];
        for (_i = 0, _len = combinations.length; _i < _len; _i++) {
          combination = combinations[_i];
          _ref = property["enum"];
          for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
            item = _ref[_j];
            cloned = clone(combination);
            cloned[key] = item;
            newCombinations.push(cloned);
          }
        }
        combinations = newCombinations;
      }
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
    var build, buildJSON, method, methodDefinition, methods, path, response, schema, scheme, schemes, url, urlRegex, _i, _len, _results;
    schemes = api.schemes || [];
    _results = [];
    for (_i = 0, _len = schemes.length; _i < _len; _i++) {
      scheme = schemes[_i];
      _results.push((function() {
        var _ref, _results1;
        _ref = api.paths;
        _results1 = [];
        for (path in _ref) {
          methods = _ref[path];
          _results1.push((function() {
            var _ref1, _ref2, _results2;
            _results2 = [];
            for (method in methods) {
              methodDefinition = methods[method];
              schema = methodDefinition != null ? (_ref1 = methodDefinition.responses) != null ? (_ref2 = _ref1['200']) != null ? _ref2.schema : void 0 : void 0 : void 0;
              if (schema) {
                build = buildProperty(schema, api);
                buildJSON = JSON.stringify(build);
                url = scheme + '://' + api.host + api.basePath + path;
                urlRegex = new RegExp(url + '(\\?(.)*)?$');
                response = [
                  200, {
                    'Content-Type': 'application/json'
                  }, buildJSON
                ];
                _results2.push(fakeServer.respondWith(method, urlRegex, response));
              } else {
                _results2.push(void 0);
              }
            }
            return _results2;
          })());
        }
        return _results1;
      })());
    }
    return _results;
  };

  window.SwaggerFakeServer.init = function() {
    var fakeServer, filter;
    fakeServer = sinon.fakeServer.create();
    fakeServer.xhr.useFilters = true;
    filter = function(method, url) {
      var api, _i, _len;
      for (_i = 0, _len = apis.length; _i < _len; _i++) {
        api = apis[_i];
        if (isApiCall(url, api.host, api.schemes, api.basePath)) {
          return false;
        }
      }
      return true;
    };
    fakeServer.xhr.addFilter(filter);
    return window.SwaggerFakeServer.fakeServer = fakeServer;
  };

  window.SwaggerFakeServer.restore = function() {
    var _ref;
    apis = [];
    return (_ref = SwaggerFakeServer.fakeServer) != null ? _ref.restore() : void 0;
  };

  window.SwaggerFakeServer.consume = function(schema, callback) {
    var isString, onSuccess;
    isString = typeof schema === 'string';
    onSuccess = function(json) {
      apis.push(json);
      setRespondWith(SwaggerFakeServer.fakeServer, json);
      return typeof callback === "function" ? callback() : void 0;
    };
    if (isString) {
      return getJSON(schema, onSuccess);
    } else {
      return onSuccess(schema);
    }
  };

  if (window.SwaggerFakeServerPrivates) {
    window.SwaggerFakeServerPrivates = {
      getJSON: getJSON,
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
