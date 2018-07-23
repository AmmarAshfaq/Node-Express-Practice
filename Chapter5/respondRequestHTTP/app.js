var express = require('express')

var app = express()

app.get('/', function (req, res) {
  res.send('Welcome to Olivia HomePage')
})

// app.get('/users/:userid',function(req,res){
//     var userID = parseInt(req.params.userid,10)
//     res.send("Welcome in User"+userID)
// })
app.get(/^\/users\/(\d+)$/, function (req, res) {
  var userID = parseInt(req.params[0], 10)
  res.send('Welcome in User' + userID)
})
app.get(/^\/users\/(\d+)-(\d+)$/, function (req, res) {
  var startedId = parseInt(req.params[0], 10)
  var endId = parseInt(req.params[1], 10)

  res.send('Range: ' + startedId + 'to ' + endId)
})

// UUID matching Routes with a regexp
var horribleReqExp = /^([0-9a-f] {8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}) $/i
app.get(horribleReqExp, function (req, res) {
  var uid = req.params[0]

  res.send('UID is: ' + uid)
})
// qeuring string
app.get('/search',function(req,res){
    req.query.q == "javascript-themed burrito"
})
app.use(function (req, res) {
  res.status(404).send('Page not found!')
})

app.listen(3000)
