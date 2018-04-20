var express = require('express');
var mongodb = require('mongodb');
var graphQLHTTP = require('express-graphql');
var schema = require('./data/schema');

let app = express();

app.use(express.static('public'));

(async () => {
  let mongo = await mongodb.MongoClient.connect(process.env.MONGO_URL);
  
  let db = mongo.db('graphqldb')
  app.use('/graphql', graphQLHTTP({
    schema: schema(db),
    graphiql: true
  }));
  app.listen(3000, () => console.log('Listening on port 3000'));
})();
