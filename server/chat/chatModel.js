var dbConnection = require('../db/index.js');


module.exports = {

  //update total_messages table and messages table
  postMessage: function(unprocessedParams, callback) { //unprocessedParams is [sender, receiver, msg]
    
    var usersParam = [unprocessedParams.to + ":" + unprocessedParams.from];

    var updateTotalQuery = 'INSERT INTO total_messages (identifier, total_messages) VALUES (?, 1)ON DUPLICATE KEY UPDATE total_messages = total_messages + 1;';
    dbConnection.query(updateTotalQuery, usersParam, function(err, data) {

      var getTotalQuery = 'SELECT total_messages FROM total_messages WHERE identifier = (?)';
      dbConnection.query(getTotalQuery, usersParam, function(err, data) {
        var total = data[0].total_messages;
        
        var messagesParam = [usersParam + ":" + total, unprocessedParams.message, unprocessedParams.from];
        console.log("messagesParam is ", messagesParam);
        console.log("got through query2! data got back ", data);
        //after retrieving total_messages, eg. (4), we add new messages with an identifier of user1:user2:4.
        var updateMessagesQuery = 'INSERT INTO messages ( identifier_message_number, message, sender ) VALUES (?,?,?)';
        dbConnection.query(updateMessagesQuery, messagesParam, callback);
      });
    });
  }
  // postCouple: function(params, callback) {
  //   var queryString = 'INSERT INTO couples (username, hash, person_1_last_name, person_1_first_name, person_2_last_name, person_2_first_name, email, phone, photo_filepath) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);';
  //   queryDb(queryString, params, callback);
  // }

  // , getCouple: function(params, callback) {
  //   var queryString = 'SELECT username, hash FROM couples WHERE username = ?;';
  //   queryDb(queryString, params, callback);
  // }
};
