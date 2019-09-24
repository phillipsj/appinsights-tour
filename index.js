if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

let appInsights = require('applicationinsights');
appInsights.setup().start();

const azure = require('azure-storage');

const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/hello', (req, res) => res.send('Hello World!'));

app.get('/error', (req, res) => { throw new Error("A demo error.")});

app.get('/dependencies', (req, res) => {
    let blobService = azure.createBlobService();
    blobService.doesBlobExist("images", "demo.jpg", function(error, result, response) {
        if(!error) {
            res.send('demo.jpg does exist');
        }
    });    
});

app.listen(port, () => console.log(`app listening on port ${port}!`));