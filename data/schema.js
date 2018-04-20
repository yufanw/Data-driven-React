var graphQL = require('graphql');


let counter = 42;

let schema = new graphQL.GraphQLSchema({
  query: new graphQL.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      counter: {
        type: graphQL.GraphQLInt,
        resolve: () => counter
      },
      message: {
        type: graphQL.GraphQLString,
        resolve: () => 'Hello from GraphQL'
      }
    })
  }),

  mutation: new graphQL.GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      incrementCounter: {
        type: graphQL.GraphQLInt,
        resolve: () => ++counter
      }
    })
  })


});

module.exports = schema;