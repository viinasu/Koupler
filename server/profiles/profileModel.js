var dbConnection = require('../db/index.js');

var queryDb = function(queryString, params, callback) {
	dbConnection.query(queryString, params, function(err, data) {
	 if(err) {
      console.error('Database ' + err);
   }

   callback(err, data);
	});
};

module.exports = {

  getProfileInfo: function(callback) {
    // var queryString = 'SELECT ' ALL THE INFORMATION FOR THIS USER
    //queryDb(queryString, params, callback);
    console.log('in profileModel!');
    callback('HELLOOOOO')
  }

};