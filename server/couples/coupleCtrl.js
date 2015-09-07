var Couple = require('./coupleModel.js'),
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');


// refactored for couples from shortly angular

module.exports = {
  signup: function (req, res, next) {
    //generating hash of password
    bcrypt.genSalt(10, function(err, salt){
      if(err){
        console.error(err);
      }
      bcrypt.hash(req.body.password, salt, function(err, hash){
        if(err){
          console.error(err);
        }
        var params = [req.body.username, req.body.password,
                          req.body.lastName1, req.body.firstName1, 
                           req.body.lastName2, req.body.firstName2,
                          req.body.email, req.body.phoneNumber];
                          //we NEED TO ADD THE PHOTO FILEPATH!!!!!!!
        //inserting data into the DB
        Couple.postCouple(params, function(err, result){
          if(err){
            console.error(err);
          }
          //creating token with username as payload
          var jwtSecret = 'a;lskdjf;laksdjf';
          var token = jwt.sign({
            username: req.body.usernameSignup
          }, jwtSecret);
          res.send({
            //sending back token for client processing
            token: token
          });
        })
      })
    })
  },


