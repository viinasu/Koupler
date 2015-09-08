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
    var activityDate = Date.now();
    var couple_id; /* do some stuff to the token */
    activity.getMatches([activityChosen], function(data) {
      var couple = data[0]; //could be randomized
      console.log('response from db is ', couple);
      res.send({
        couple: couple
      });
    });
    var token = req.body.token;
    console.log('token from client', token);
    var decodedToken = jwt.decode(token);
    console.log('decoded token ', decodedToken);
    var username = decodedToken.username;
    console.log(username);
    //make call to activityModel's postMatch fn
    activity.postMatch([username, activityChosen, activityDate], function(data) {
      //all good, couple inserted
    });
  },

  getMatch: function(req, res, next) {

  }
};