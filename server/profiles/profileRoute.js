var profileCtrl = require('./profileCtrl.js');

module.exports = function (app) {
  console.log("in profileRoute!");
  app.get('', profileCtrl.loadProfile);
  
};