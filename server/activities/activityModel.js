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
  
  postActivity: function(params, callback) {
    var queryString = 'INSERT INTO activities (username, activity, activity_date) VALUES (?, ?, ?)';
    queryDb(queryString, params, callback);
  }

  , getActivities: function(params, callback) {
    var queryString = 'SELECT c.username, c.person_1_first_name, c.person_2_first_name, c.email, c.phone, c.photo_filepath, a.activity FROM couples c JOIN activities a ON c.username = a.username WHERE c.username <> ? AND a.activity IN (SELECT activity FROM activities WHERE username = ?);';
    queryDb(queryString, params, callback);
  }

  , getMatches: function(params, callback) {
    var activityId;
    var activityQueryString = 'SELECT id FROM activities WHERE activity_name = (?)';
    queryDb(activityQueryString, params, function(err, data) {
      activityId = data[0].id;
      console.log(activityId);
    });
    // queryDb(queryString, params, callback);
  }
};