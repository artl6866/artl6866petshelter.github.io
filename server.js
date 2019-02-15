const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express()
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/database');
require('./server/config/routes')(app);


// app listener
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})