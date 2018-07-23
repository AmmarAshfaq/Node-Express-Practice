const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/api')

const app = express()
mongoose.connect('mongodb://localhost/ninjago')
mongoose.Promise = global.Promise

app.use(express.static('public'))
app.use(bodyParser.json())
app.use('/api', routes)
app.use(function(err,res,res,next){
    // console.log(err)
    res.status(422).send({error:err.message});
})

app.listen(process.env.port || 4000, function () {
  console.log('Now listeneing requets')
})
