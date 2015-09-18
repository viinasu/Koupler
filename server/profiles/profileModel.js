var dbConnection = require('../db/index.js');
var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');
var moment = require('moment');

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
    var fileExtension = path.extname(file.name);
    var date = moment().format('MM-DD-YY');

    // directory where image will be saved on the server
    var targetPath = __dirname + "/../assets/" + username + "/profile-pic/";

    // full path to image on server
    var filePathServer = targetPath + username + date + fileExtension;

    // make parent directories if doesn't exist
    mkdirp(targetPath, function(err) {
      if (err) {
        console.error(err);
      }
    });

    // move and rename image from temp location to filePathServer
    fs.rename(file.path, filePathServer, function(err) {
      if (err) {
        console.error(err);
      }
    });

    var queryString = 'UPDATE couples SET photo_filepath = ? WHERE username = ?;';
    queryDb(queryString, [filePathServer, username], callback);
  }
};
