var express = require('express');
var middleware = require('./config/middleware.js');
var app = express();

middleware(app, express);
app.listen(3000);
console.log("listening on 3000");

module.exports = app;