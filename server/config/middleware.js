var helpers = require('./helpers.js');

module.exports = function (app, express) {

  var coupleRouter = express.Router();
  var matchRouter = express.Router();

  app.use(express.static(__dirname + './../../client'));

  app.use('/api/couples', coupleRouter);
  app.use('/api/match', matchRouter);

  require('../couples/coupleRoute.js')(coupleRouter);
  require('../matches/matchRoutes.js')(matchRouter);

};
