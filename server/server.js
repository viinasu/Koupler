var http = require('http');
var express = require('express');
var middleware = require('./config/middleware.js');

var app = express();
var server = http.createServer(app);

middleware(app, express);

server.listen(80, '104.236.172.91', function() {
  console.log('Listening on 104.236.172.91:' + server.address().port);
});

module.exports = app;