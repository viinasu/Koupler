var activity = require('./activityModel');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');


module.exports = {
  getActivities: function(req, res, next) {
    // query activities table for all activities
    //write these to the response as a JSONified array
  },

  matchCouple: function(req, res, next) {
    //parse request for activity chosen
    var activityChosen = req.body.activity.name;
    var activityDate = Date.now();  // Refactor to SQL format type
    var token = req.body.token;
    var decodedToken = jwt.decode(token);
    var username = decodedToken.username;

    activity.getMatches([activityChosen], function(data) {
      var couple = data[Math.floor(Math.random() * data.length - 1)];
      res.send({
        couple: couple
      });
    });

    // Insert couple's activity decision in database
    activity.postMatch([username, activityChosen, activityDate], function(err, data) {
      if(err) console.log(err);

      if(data == true) {
        console.log('Couple activity logged successfully');
      }
    });
  }
};