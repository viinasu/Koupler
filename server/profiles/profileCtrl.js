var profile = require('./profileModel.js');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var formidable = require('formidable');

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
    console.log("attempting to save profile pic to server...")
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      var file = files.file;
      profile.setProfilePic([req.params.username, file], function(err) {
        if (err) {
          console.log("Could not save to server");
        }
        else {
          console.log("Saved profile pic to server");
        }
      });
    });
    res.send("Saved");
    res.end();
  }
};
