const { ApolloServer } = require("apollo-server");
const mongoose = require('mongoose')
const typeDefs = require('./graphQL/typeDefs')
const resolvers = require('./graphQL/resolvers')

const MONGODB = 'mongodb+srv://sssamvel75:jL78viTcz5NRmwSa@cluster0.qta7ggh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const server = new ApolloServer({
    typeDefs, 
    resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser: true})
  .then(() => {
    console.log("MongoDB Connection successful");
    return server.listen({port: 5000})
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })