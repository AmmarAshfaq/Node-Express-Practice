const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

// allow cross origin request
app.use(cors())
mongoose.connect(
  'mongodb://AmmarAshfaq:yazan123@ds247121.mlab.com:47121/graphql-saylani'
)
mongoose.connection.once('open', () => {
  console.log('connected to database')
})
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)
app.listen(4000, () => {
  console.log('Listening for port 4000!')
})
