var http = require('http');
var express = require('express');
var middleware = require('./config/middleware.js');
var sockets = require('./socket_server.js');
var app = express();
var server = http.createServer(app);

sockets(server);

middleware(app, express);

server.listen(3000, function() {
  console.log('Listening on ' + server.address().port);
});

module.exports = app;
