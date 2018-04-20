var gr = require('graphql');

let Schema = (db) => {
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
        links: {
          type: new gr.GraphQLList(linkType),
          resolve: () => db.collection('links').find({}).toArray()
        }
      })
    })
  });

  return schema;
}

module.exports = Schema;