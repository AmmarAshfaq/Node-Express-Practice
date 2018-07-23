var express = require('express')
// var logger = require('morgan')
var path = require('path')
var http = require('http')

var app = express()
// app.use(logger('short'))

var publicPath = path.resolve(__dirname,"public")
app.use(express.static(publicPath))


app.use(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Hello World')
})
// app.use(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   res.end('Hello World')
// })

http.createServer(app).listen(3000)