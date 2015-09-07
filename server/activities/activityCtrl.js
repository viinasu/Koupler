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
    activity.getMatches([activityChosen], function(err, data) {
      if (err) {
        console.error(err);
      }
      console.log(data);
    var token = req.body.token;
    var decode = jwt.decode(token);
      couple = data[0];
      res.send({
        decode: decode,
        username: username.decode,
        couple: couple
      });
    });
    //make call to activityModel's postMatch fn
    activity.postMatch([couple_id, activityChosen, activityDate], function(data) {
      //all good, couple inserted
    });
  },

  getMatch: function(req, res, next) {

  }
};