var mysql = require('mysql');

var dbConnection = mysql.createConnection({
    host: ''
  , user: 'root'
  , password: ''
  , database: 'app_db'
});

dbConnection.connect();

module.exports = dbConnection;
