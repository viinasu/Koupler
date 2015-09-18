var dbConnection = require('../db/index.js');
var fs = require('fs');
var mkdirp = require('mkdirp');

var queryDb = function(queryString, params, callback) {
  dbConnection.query(queryString, params, function(err, data) {
    if(err) {
      console.error('Database ' + err);
    }

    callback(err, data);
  });
};

module.exports = {

  getProfileInfo: function(params, callback) {
    console.log("inget getProfileInfo!");
    var queryString = 'SELECT * FROM couples WHERE couples.username = ?'
    queryDb(queryString, params, callback);
  },

  // input: params expects an array [username, file]
  setProfilePic: function(params, callback) {
    var username = params[0];
    var file = params[1];

    var targetPath = __dirname + "/../assets/profile-pic/" + username + "/";
    var filePathServer = targetPath + file.name;

    mkdirp(targetPath, function(err) {
      if (err) {
        console.error(err);
      }
    });

    fs.rename(file.path, filePathServer, function(err) {
      if (err) {
        console.error(err);
      }
    });

    var queryString = 'UPDATE couples SET photo_filepath = ? WHERE username = ?;';
    queryDb(queryString, [filePathServer, username], callback);
  }
};
