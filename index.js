var express = require('express');
var graphqlHTTP = require('express-graphql');
var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String,
    name: String,
    
  }
`);


var root = { hello: () => 'Hello world!',name:()=> 'Sarath' };

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');