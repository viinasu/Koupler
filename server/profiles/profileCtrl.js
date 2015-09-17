var profile = require('./profileModel.js');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

module.exports = {

	loadProfile: function (req, res, next) {
    console.log("in profileCtrl's loadProfile!");
		profile.getProfileInfo(function(data) { //(ERR, DATA)
      // if(err){
      //   console.error('Error: Model does not return query results');
      // }
      if(data) {
        console.log("data received!");
        res.send({ "thingy": data });
        res.end();
      }
    })
	
  }
}