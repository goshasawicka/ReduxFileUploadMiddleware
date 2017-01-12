"use strict";
var env = process.env.NODE_ENV || 'development';

var express = require('express');
var app = express();
var cors = require('cors');
var crypto = require('crypto');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var config = require('./config')[env];

let File = require('./models/file');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors());

app.use(express.static('uploads'));

mongoose.Promise = global.Promise;
mongoose.connect(config.db, function(err, res) {
  if(err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + config.db);
  }
});

require('./controllers/file')(app);

var server = app.listen(config.port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("node app listening at http://%s:%s", config.host, config.port)
});

module.exports = server;
