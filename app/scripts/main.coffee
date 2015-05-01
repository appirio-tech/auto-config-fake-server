'use strict'

getJSON = (url, success) ->
  xhr = new XMLHttpRequest()

  xhr.onreadystatechange = ->
    if xhr.readyState == 4
      if xhr.status == 200
        try
          json = JSON.parse xhr.responseText
        catch error
          console.error 'Invalid JSON'
          console.error error

        success json
      else
        console.error 'Couldnt get ' + url
        console.error xhr.statusText

  xhr.open 'GET', url, true
  xhr.responseType = 'text'
  xhr.send()

window.SwaggerFakeServer = (swaggerUrl) ->
  FS = this

  onSuccess = (json) ->
    FS.api = json
    FS.fakeServer = sinon.fakeServer.create()

  getJSON swaggerUrl, onSuccess

  FS