if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

let appInsights = require('applicationinsights');
appInsights.setup().start();

const Azure = require("@azure/storage-blob");
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/hello', (req, res) => res.send('Hello World!'));

app.get('/error', (req, res) => { throw new Error("A demo error.")});

app.get('/blob', (req, res) => {

});

app.listen(port, () => console.log(`app listening on port ${port}!`));