var chatCtrl = require('./chatCtrl.js');

module.exports = function (app) {
  // app === userRouter injected from middlware.js
  console.log("in chatRoute!")
  app.post('', chatCtrl.postMessage); //?? http.post request to /chat
};