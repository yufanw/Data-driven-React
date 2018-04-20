var graphQL = require('graphql');

let schema = new graphQL.GraphQLSchema({
  query: new graphQL.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      counter: {
        type: graphQL.GraphQLInt,
        resolve: () => 42
      },
      message: {
        type: graphQL.GraphQLString,
        resolve: () => 'Hello GraphQL'
      }
    })
  })


});

module.exports = schema;