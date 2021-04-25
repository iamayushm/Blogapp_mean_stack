const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.get('/', (req, res) => {

    const url = 'mongodb://localhost:27017';
    const dbName = 'blog';
    (async function add() {

        let client;

        try {
            client = await MongoClient.connect(url);
            const db = client.db(dbName);
            const col = db.collection('posts');
            const posts = await col.find().toArray();
            res.send(posts);

        } catch (err) {
            console.log(err);
        }
        client.close();

    }());
})


app.post('/', (req, res) => {

    const { name, category, content } = req.body;
    const url = 'mongodb://localhost:27017';
    const dbName = 'blog';

    (async function add() {

        let client;

        try {
            client = await MongoClient.connect(url);
            const db = client.db(dbName);
            const col = db.collection('posts');
            const post = { name, content, category };
            const results = await col.insertOne(post);
            res.send(results);

        } catch (err) {
            console.log(err);
        }
        client.close();

    }());
})

app.get('/:id', (req, res) => {
    const { id } = req.params;
    const url = 'mongodb://localhost:27017';
    const dbName = 'blog';
    (async function single() {
        try {
            client = await MongoClient.connect(url);
            const db = client.db(dbName);
            const col = db.collection('posts')
            const result = await col.findOne({ _id: new ObjectId(id) });
            // console.log(typeof(result));
            res.send(result);

        } catch (err) {
            console.log(err);
        }
        client.close();
    }());
})


app.put('/:id', (req, res) => {

    const { id } = req.params;
    const { name, category, content } = req.body;
    var newvalues = { $set: { name: name, category: category, content: content } }
    const url = 'mongodb://localhost:27017';
    const dbName = 'blog';
    (async function add() {

        let client;

        try {
            client = await MongoClient.connect(url);
            const db = client.db(dbName);
            const col = db.collection('posts');

            const result = col.updateOne({ _id: new ObjectId(id) }, newvalues);

            res.send(result);

        } catch (err) {
            console.log(err);
        }
        client.close();

    }());
})

app.delete('/:id', (req, res) => {

    const { id } = req.params;
    const url = 'mongodb://localhost:27017';
    const dbName = 'blog';
    (async function add() {

        let client;

        try { 
            client = await MongoClient.connect(url);
            const db = client.db(dbName);
            const col = db.collection('posts');

            const result = col.deleteOne({ _id: new ObjectId(id) });

            res.send(result);

        } catch (err) {
            console.log(err);
        }
        client.close();

    }());

})





app.listen(3000, () => console.log('server connected'));