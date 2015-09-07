var matchController = require('./activityCtrl');

module.exports = function(app) {
  app.get('/', activityCtrl.getActivities);
  app.post('/match', activityCtrl.matchCouple);
}
