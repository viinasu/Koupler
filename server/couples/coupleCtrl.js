var Couple = require('./coupleModel.js'),
    Q    = require('q');

// refactored for couples from shortly angular

module.exports = {
  signin: function (req, res, next) {
    var couplename = req.body.couplename,
        password = req.body.password;

    var findCouple = Q.nbind(Couple.findOne, Couple);
    findCouple({couplename: couplename})
      .then(function (couple) {
        if (!couple) {
          next(new Error('Couple does not exist'));
        } else {
          return couple.comparePasswords(password)
            .then(function(foundCouple) {
              if (foundCouple) {
                var token = jwt.encode(couple, 'secret');
                res.json({token: token});
              } else {
                return next(new Error('No couple'));
              }
            });
        }
      })
      .fail(function (error) {
        next(error);
      });
  },


