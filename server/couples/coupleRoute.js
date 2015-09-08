var coupleCtrl = require('./coupleCtrl.js');

module.exports = function (app) {
  // app === userRouter injected from middlware.js

  app.post('/signin', coupleCtrl.signin);
  app.post('/signup', coupleCtrl.signup);
};