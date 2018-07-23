var express = require('express')
var http = require('http')

var app = express()

app.use(function (req, res, next) {
  console.log('In come a ' + req.method + 'to' + req.url)
  next()
})

app.use(function (req, res, next) {
  var minute = new Date().getMinutes()
  if (minute % 2 === 0) {
    next()
  } else {
    res.statusCode = 403
    res.end('Not authorized')
  }
})
app.use(function(request, response) {
    response.end('Secret info: the password is "swordfish"!'); 
    });
app.use(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plan' })
  res.end('Hello, World')
})

http.createServer(app).listen(3000)
