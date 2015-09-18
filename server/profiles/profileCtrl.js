var profile = require('./profileModel.js');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var formidable = require('formidable');
var fs = require('fs');
var mkdirp = require('mkdirp');

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

  storeProfilePic: function(req, res, next) {
    var form = new formidable.IncomingForm();
    var targetPath = __dirname + "/../assets/profile-pic/" + req.params.username + "/";
    mkdirp(targetPath, function(err) {
      if (err) {throw err;}
    });

    form.parse(req, function(err, fields, files) {
      fs.rename(files.file.path, targetPath + files.file.name);
    });

    res.send("thank you");
    res.end();
  }
};
