(function() {
  'use strict';
  var isApiCall, match, url;

  match = null;

  url = null;

  isApiCall = AutoConfigFakeServerPrivates.isApiCall;

  describe('isApiCall', function() {
    describe('http://localhost:8080/api/v1/debug.html', function() {
      beforeEach(function() {
        return url = 'http://localhost:8080/api/v1/debug.html';
      });
      context('match host, schemes, basePath', function() {
        beforeEach(function() {
          return match = isApiCall(url, 'localhost:8080', ['http'], '/api/v1');
        });
        return it('should match', function() {
          return expect(match).to.be.ok;
        });
      });
      context('match host, schemes but not basePath', function() {
        beforeEach(function() {
          return match = isApiCall(url, 'localhost:8080', ['http'], '/api/booger');
        });
        return it('should not match', function() {
          return expect(match).not.to.be.ok;
        });
      });
      context('match host, basePath but not schemes', function() {
        beforeEach(function() {
          return match = isApiCall(url, 'localhost:8080', ['https'], '/api/v1');
        });
        return it('should not match', function() {
          return expect(match).not.to.be.ok;
        });
      });
      return context('match basePath, schemes but not host', function() {
        beforeEach(function() {
          return match = isApiCall(url, 'localhost', ['http'], '/api/v1');
        });
        return it('should not match', function() {
          return expect(match).not.to.be.ok;
        });
      });
    });
    describe('https://www.localhost.com/api/batman', function() {
      beforeEach(function() {
        return url = 'https://www.localhost.com/api/batman';
      });
      return context('match host, schemes, basePath', function() {
        beforeEach(function() {
          return match = isApiCall(url, 'www.localhost.com', ['https'], '/api');
        });
        return it('should match', function() {
          return expect(match).to.be.ok;
        });
      });
    });
    return describe('https://api.topcoder-dev.com/v3/events?abc=123&filter=id%253D123', function() {
      beforeEach(function() {
        return url = 'https://api.topcoder-dev.com/v3/events?abc=123&filter=id%253D123';
      });
      return context('match host, schemes, basePath', function() {
        beforeEach(function() {
          return match = isApiCall(url, 'api.topcoder-dev.com', ['https'], '/v3/events');
        });
        return it('should match', function() {
          return expect(match).to.be.ok;
        });
      });
    });
  });

}).call(this);
