var profile = require('./profileModel.js');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var getUsername = function(token) {
  var decodedToken = jwt.decode(token);
  return decodedToken.username;
}

module.exports = {

  loadProfile: function (req, res, next) {
    var username = getUsername(req.query.token); //note strange but working syntax

		profile.getProfileInfo([username], function(err, data) {
      if(err) console.log(err);
      
      if(data) {
        console.log("profile data received!", data);
        res.send(data);
        res.end();
      }
    });
  },

  loadMemBoard: function (req, res, next) {
    profile.getMemBoard([username], function(err, data) {
      if(err) console.log(err);

      if(data) {
        res.writeHead(201, {'Content-Type':'text/html'});
        console.log("memboard data received!", data);
        res.send(data);
        res.end();
      }
    })
  }
};