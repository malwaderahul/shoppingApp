var express = require('express');
var app = express();


var urls = require('./src/UrlHandling.js');

app.use('/', urls);

app.listen(3000);