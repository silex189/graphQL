'use strict'

// const  { graphql, buildSchema } = require('graphql');
const { makeExecutableSchema } = require('graphql-tools');
const express = require('express');
const gqlMiddleware = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers');

const app = express();
const port = process.env.port || 3000;

const db = require('./config');


// definiendo esquema
// const schema = buildSchema(`
//   type Query {
//     "Retorna un saludo"
//     hello: String
//     "Retona un saludo a todos"
//     greet: String
//   }
// `)

// const schema = buildSchema(
//   readFileSync(
//     join(__dirname, 'lib', 'schema.graphql'),
//     'utf-8'
//   )
// )
const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8'
)
const schema = makeExecutableSchema({ typeDefs, resolvers})

// // configurar los resolvers
// const resolvers = {
//   hello: () => {
//     return 'Hello world'
//   },
//   greet: () => {
//     return 'Hello everyone'
//   }
// }

// // ejecutar query hello
// graphql(schema, `{ hello }`, resolvers).then( (data) => {
//   console.log(data);
// })

// graphql(schema, `{ greet }`, resolvers).then( (data) => {
//   console.log(data);
// })

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}));


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})