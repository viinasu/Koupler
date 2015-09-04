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
  
  postActivity: function(params, callback) {
    var queryString = 'INSERT INTO activities (couple_id, activity, activity_date) \ 
                                       VALUES (?, ?, ?)';
    queryDb(queryString, params, callback);
  }

  , getActivities: function(params, callback) {
    var queryString = 'SELECT c.couple_id, c.person_1_first_name, c.person_2_first_name, c.email, c.phone, c.photo_filepath\
                              a.activity FROM couples c JOIN activities a ON c.couple_id = a.couple_id WHERE a.activity = ?;';
    queryDb(queryString, params, callback);
  }
};