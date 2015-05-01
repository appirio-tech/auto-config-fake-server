'use strict'

window.SwaggerFakeServer = {}
swagger = {}

window.SwaggerFakeServer.init = (swaggerUrl) ->
  xhr = new XMLHttpRequest()

  xhr.onreadystatechange = ->
    if xhr.readyState == 4
      if xhr.status == 200
        if xhr.response
          swagger = xhr.response
        else
          console.error 'Invalid JSON'
      else
        console.error 'Couldnt get ' + swaggerUrl
        console.error xhr.statusText

  xhr.open 'GET', swaggerUrl, true

  xhr.responseType = 'json'

  xhr.send()

window.SwaggerFakeServer.api = swagger
