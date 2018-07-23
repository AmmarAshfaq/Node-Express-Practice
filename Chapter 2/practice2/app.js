// var randomInt = require('./moduleExport');
// var readingFile = require('./readingFile')

// console.log(readingFile)
// console.log(randomInt())
// console.log(randomInt())

// console.log(randomInt())

var http = require('http');

function requestHandler(req,res){
    console.log("In comes a req to:"+ req.url)
    res.end("Hello World")
}

var server = http.createServer(requestHandler)

server.listen(3000)