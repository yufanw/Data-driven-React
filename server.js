var express = require('express');
var mongodb = require('mongodb');
var graphQLHTTP = require('express-graphql');
var schema = require('./data/schema');
let app = express();

app.use(express.static('public'));

let db;
mongodb.MongoClient.connect(process.env.MONGO_URL, (err, client) => {
    if (err) { throw err; }

    db = client.db('graphqldb');
    app.use('/graphql', graphQLHTTP({
        schema: schema(db),
        graphiql: true
    }));
    app.listen(3000, () => console.log('listening on port 3000'));

});

app.get("/data/links", (req, res) => {
    db.collection("links").find({}).toArray((err, links) => {
        if (err) { throw err; }

        res.json(links);
    })
});