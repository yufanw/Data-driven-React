var gr = require('graphql');

let Schema = (db) => {
  let store = {};

  let storeType = new gr.GraphQLObjectType({
    name: 'Store',
    fields: () => ({
      links: {
        type: new gr.GraphQLList(linkType),
        resolve: () => db.collection("links").find({}).toArray()
      }
    })
  });

  let linkType = new gr.GraphQLObjectType({
    name: 'Link',
    fields: () => ({
      _id: { type: gr.GraphQLString },
      title: { type: gr.GraphQLString },
      url: { type: gr.GraphQLString }
    })
  });
  
  let schema = new gr.GraphQLSchema({
    query: new gr.GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        store: {
          type: storeType,
          resolve: () => store
        }
      })
    })
  });

  return schema;
}

module.exports = Schema;