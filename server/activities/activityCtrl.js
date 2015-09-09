var activity = require('./activityModel');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

var getUsername = function(token) {
  var decodedToken = jwt.decode(token);
  return decodedToken.username;
};

module.exports = {
  
  // Insert couple's activity decision in database
  postActivity: function(req, res, next) {
    var activityChosen = req.body.activity.name;
    var activityDate = Date.now();  // Refactor to SQL format type
    var username = getUsername(req.body.token);

    activity.postActivity([username, activityChosen, activityDate], function(err, data) {
      if(err) console.log(err);

      if(data) {
        res.send('Couple activity logged successfully');
      }
    });
  },

  getActivities: function(req, res, next) {
    var username = getUsername(req.query.token);
    
    return activity.getActivities([username, username], function(err, data) {
      var couple = data[Math.floor(Math.random() * (data.length - 1))];
      console.log(couple);
      res.send({couple: couple});
    });
  }
};