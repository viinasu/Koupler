var activityCtrl = require('./activityCtrl');

module.exports = function(app) {
  app.get('/', activityCtrl.getActivities);
  app.route('/match')
     .post(activityCtrl.matchCouple)
};