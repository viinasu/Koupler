var http = require('http');
var express = require('express');
var middleware = require('./config/middleware.js');

var app = express();
var server = http.createServer(app);

middleware(app, express);

server.listen(8000, function() {
  console.log('Listening on ' + server.address().port);
});

module.exports = app;
