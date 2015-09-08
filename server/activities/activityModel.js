var dbConnection = require('../db/index.js');

var queryDb = function(queryString, params, callback) {
  dbConnection.query(queryString, params, function(err, results) {
    if(err) {
      console.error('Database Error: ' + err);
    }

    callback(results);
  });
};

module.exports = {
  
  postMatch: function(params, callback) {
    var queryString = 'INSERT INTO activities (username, activity, activity_date) VALUES (?, ?, ?)';
    queryDb(queryString, params, callback);
  }

  , getMatches: function(params, callback) {
    console.log('PARAMS FOR QS ARE: ', params);
    var queryString = 'SELECT c.username, c.person_1_first_name, c.person_2_first_name, c.email, c.phone, c.photo_filepath, a.activity FROM couples c JOIN activities a ON c.username = a.username WHERE a.activity = ?;';
    queryDb(queryString, params, callback);
  }
};