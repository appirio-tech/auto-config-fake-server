# swagger-fake-server
Create a Sinon fake server with a Swagger JSON file.  Requests that match the API scheme, host, and base path will be stubbed while others will be ignored. 

## Install

```shell
bower install swagger-fake-server --save-dev
```

Then add a `<script>` to your `index.html`:

```html
<script src="/bower_components/sinon/index.js"></script>
<script src="/bower_components/swagger-fake-server/dist/swagger-fake-server.js"></script>
```

## Usage
```js
SwaggerFakeServer.init();
SwaggerFakeServer.fakeServer.respondImmediately = true; // docs are at http://sinonjs.org/docs
SwaggerFakeServer.consume('uber.swagger.json', function () {
  console.log('Uber API should be mocked');
  SwaggerFakeServer.consume('lyft.swagger.json', function() {
    console.log('Lyft API should be mocked');
  });
});
```

## Doc

## Future features
* Take in an JSON object instead of path
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