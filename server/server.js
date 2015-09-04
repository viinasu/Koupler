var express = require('express');
var app = express();
app.use(express.static(__dirname + '/client'));
app.listen(process.env.PORT || 3000);

var port = process.env.PORT || 3000;

console.log("listening on " + port);

app.get('/', function(req, res) {
  res.send("Hello World");
})
