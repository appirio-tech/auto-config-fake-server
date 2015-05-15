# auto-config-fake-server
[![Build Status](https://travis-ci.org/appirio-tech/auto-config-fake-server.svg?branch=master)](https://travis-ci.org/appirio-tech/auto-config-fake-server) [![Coverage Status](https://coveralls.io/repos/appirio-tech/auto-config-fake-server/badge.svg)](https://coveralls.io/r/appirio-tech/auto-config-fake-server)

Create a Sinon fake server with a Swagger JSON file.  Requests that match the API scheme, host, and base path will be stubbed while others will be ignored. 

## Install

```shell
bower install auto-config-fake-server --save-dev
```

Then add a `<script>` to your `index.html`:

```html
<script src="/bower_components/sinon/index.js"></script>
<script src="/bower_components/auto-config-fake-server/dist/auto-config-fake-server.js"></script>
```

## Usage
```js
AutoConfigFakeServer.init();
AutoConfigFakeServer.fakeServer.respondImmediately = true; // docs are at http://sinonjs.org/docs
AutoConfigFakeServer.consume('uber.swagger.json', function () {
  console.log('Uber API should be mocked');
  AutoConfigFakeServer.consume('lyft.swagger.json', function() {
    console.log('Lyft API should be mocked');
  });
});
```

## AutoConfigFakeServer
A singleton style object in the window scope.

#### `.init()`
This method will create a fakeServer instance that can be referenced with AutoConfigFakeServer.fakeServer. Although fakeServer is active, no http request will be stopped.

#### `.consume(swaggerPath[, onSuccess])`
The `swaggerPath` argument can either be an object based on a swagger schema or a path to a swagger schema json file. The `onSuccess` argument can be a method that is called (asyncronously if a json file) when the swagger schema has been processed and corresponding http requests are mocked.  You may call this method multiple times for different swagger schemas.

#### `.restore()`
This method will restore the fakeServer instance and unmocked all http requests.

## Future Ideas
* Validate parameters
* Regex path


## License

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.