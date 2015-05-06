(function() {
  'use strict';
  var apis, buildDefinition, getJSON, getRef, isApiCall, setRespondWith;

  window.SwaggerFakeServer = {};

  apis = [];

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

  buildDefinition = function(definition, api) {
    var build, key, property, _ref, _ref1, _ref2;
    if (typeof definition === 'string') {
      definition = getRef(definition, api);
    }
    build = {};
    _ref = definition != null ? definition.properties : void 0;
    for (key in _ref) {
      property = _ref[key];
      if (property.sample) {
        build[key] = property.sample;
      } else if (property.type === 'integer' || property.type === 'number') {
        build[key] = 123;
      } else if (property.type === 'string') {
        build[key] = 'abc';
      } else if (property.type === 'boolean') {
        build[key] = true;
      } else if ((_ref1 = property.items) != null ? _ref1['$ref'] : void 0) {
        build[key] = buildDefinition((_ref2 = property.items) != null ? _ref2['$ref'] : void 0, api);
        if (property.type === 'array') {
          build[key] = [build[key]];
        }
      }
    }
    return build;
  };

  setRespondWith = function(fakeServer, api) {
    var build, buildJSON, method, methodDefinition, methods, path, ref, response, scheme, url, _i, _len, _ref, _results;
    _ref = api.schemes;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      scheme = _ref[_i];
      _results.push((function() {
        var _ref1, _results1;
        _ref1 = api.paths;
        _results1 = [];
        for (path in _ref1) {
          methods = _ref1[path];
          _results1.push((function() {
            var _ref2, _ref3, _ref4, _ref5, _results2;
            _results2 = [];
            for (method in methods) {
              methodDefinition = methods[method];
              ref = methodDefinition != null ? (_ref2 = methodDefinition.responses) != null ? (_ref3 = _ref2['200']) != null ? (_ref4 = _ref3.schema) != null ? (_ref5 = _ref4.items) != null ? _ref5['$ref'] : void 0 : void 0 : void 0 : void 0 : void 0;
              if (ref) {
                build = buildDefinition(ref, api);
                if (methodDefinition.responses['200'].schema.type === 'array') {
                  build = [build];
                }
                buildJSON = JSON.stringify(build);
                url = scheme + '://' + api.host + api.basePath + path;
                response = [
                  200, {
                    'Content-Type': 'application/json'
                  }, buildJSON
                ];
                _results2.push(fakeServer.respondWith(method, url, response));
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

  window.SwaggerFakeServer.consume = function(swaggerUrl, callback) {
    var onSuccess;
    onSuccess = function(json) {
      apis.push(json);
      setRespondWith(SwaggerFakeServer.fakeServer, json);
      return typeof callback === "function" ? callback() : void 0;
    };
    return getJSON(swaggerUrl, onSuccess);
  };

  if (window.SwaggerFakeServerPrivates) {
    window.SwaggerFakeServerPrivates = {
      getJSON: getJSON,
      isApiCall: isApiCall,
      getRef: getRef,
      buildDefinition: buildDefinition,
      setRespondWith: setRespondWith,
      apis: apis
    };
  }

}).call(this);
