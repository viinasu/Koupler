var dbConnection = require('../db/index.js');

var queryDb = function(queryString, params, callback) {
	dbConnection.query(queryString, params, function(err, data) {
	 if(err) {
      console.error('Database ' + err);
   }

   callback(err, data);
	});
};

// //file system
// var fs = require('fs');
// var path = require('path');

module.exports = {

  getProfileInfo: function(params, callback) {
    console.log("inget getProfileInfo!");
    var queryString = 'SELECT * FROM couples WHERE couples.username = ?'
    queryDb(queryString, params, callback);
  },

  //OMMITTED BECAUSE WE'RE NOT USING FS READ 
  // getMemBoard: function(callback) {
  //   var images = [];
  //   var file = __dirname + '/server/assets/memboard/obamas/1.png';
  //   fs.readFile(file, function(err, data) {
  //     if (err) console.log(err);
  //     images.push(data);
  //     callback(images);
  //   });
  // }

};