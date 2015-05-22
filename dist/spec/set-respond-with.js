(function() {
  'use strict';
  var api, fakeServer, httpUrlRegex, httpsUrlRegex, postResponse, response, setRespondWith;

  api = {
    host: 'api.uber.com',
    basePath: '/v1',
    schemes: ['https', 'http'],
    paths: {
      '/player': {
        get: {
          responses: {
            '200': {
              schema: {
                type: 'object',
                items: {
                  '$ref': '#/definitions/Player'
                }
              }
            }
          }
        }
      },
      '/players': {
        get: {
          responses: {
            '200': {
              schema: {
                type: 'array',
                items: {
                  '$ref': '#/definitions/Player'
                }
              }
            }
          }
        },
        post: {
          responses: {
            '200': {
              schema: {
                type: 'object',
                items: {
                  '$ref': '#/definitions/Player'
                }
              }
            }
          }
        }
      }
    },
    definitions: {
      Player: {
        properties: {
          name: {
            type: 'string',
            sample: 'Batman'
          }
        }
      }
    }
  };

  setRespondWith = AutoConfigFakeServerPrivates.setRespondWith;

  fakeServer = null;

  httpUrlRegex = new RegExp('http://api.uber.com/v1/players' + '(\\?(.)*)?$');

  httpsUrlRegex = new RegExp('https://api.uber.com/v1/players' + '(\\?(.)*)?$');

  response = [
    200, {
      'Content-Type': 'application/json'
    }, '[{"name":"Batman"}]'
  ];

  postResponse = [
    200, {
      'Content-Type': 'application/json'
    }, '{"name":"Batman"}'
  ];

  describe('set respond with', function() {
    beforeEach(function() {
      fakeServer = {
        respondWith: sinon.spy()
      };
      return setRespondWith(fakeServer, api);
    });
    it('should call respondWith 6 times', function() {
      return expect(fakeServer.respondWith.callCount).to.be.equal(6);
    });
    it('should match http get arguments', function() {
      var calledWith;
      calledWith = fakeServer.respondWith.calledWith('get', httpUrlRegex, response);
      return expect(calledWith).to.be.ok;
    });
    it('should match https get arguments', function() {
      var calledWith;
      calledWith = fakeServer.respondWith.calledWith('get', httpsUrlRegex, response);
      return expect(calledWith).to.be.ok;
    });
    it('should match http post arguments', function() {
      var calledWith;
      calledWith = fakeServer.respondWith.calledWith('post', httpUrlRegex, postResponse);
      return expect(calledWith).to.be.ok;
    });
    return it('should match https post arguments', function() {
      var calledWith;
      calledWith = fakeServer.respondWith.calledWith('post', httpsUrlRegex, postResponse);
      return expect(calledWith).to.be.ok;
    });
  });

}).call(this);
