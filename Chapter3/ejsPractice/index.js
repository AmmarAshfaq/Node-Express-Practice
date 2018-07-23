var express = require('express')
var http = require('http')
var path = require('path')

var app = express()

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', function (req, res) {
  res.render('index', {
    message: 'Hey Every One this is my home page'
  })
})
http.createServer(app).listen(3000)
