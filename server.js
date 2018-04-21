var express = require('express');
var mongodb = require('mongodb');
var graphQLHTTP = require('express-graphql');
var gr = require('graphql');
var fs = require('fs');
var Schema = require('./data/schema');

let app = express();

app.use(express.static('public'));

(async () => {
  let mongo = await mongodb.MongoClient.connect(process.env.MONGO_URL);
  let db = mongo.db('graphqldb')
  let schema = Schema(db);

  app.use('/graphql', graphQLHTTP({
    schema,
    graphiql: true
  }));
  app.listen(3000, () => console.log('Listening on port 3000'));


  let json = await gr.graphql(schema, gr.introspectionQuery);
  fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
    if (err) throw err;

    console.log("JSON schema created");
  });

})();
