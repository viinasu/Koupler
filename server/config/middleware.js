var helpers = require('./helpers.js');

module.exports = function (app, express) {

  var coupleRouter = express.Router();
  var activityRouter = express.Router();

  app.use(express.static(__dirname + './../../client'));

  app.use('/couples', coupleRouter);
  app.use('/activities', activityRouter);

  require('../couples/coupleRoute.js')(coupleRouter);
  require('../activities/activityRoutes.js')(activityRouter);

};

{

}
