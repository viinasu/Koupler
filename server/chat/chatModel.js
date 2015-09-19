var dbConnection = require('../db/index.js');

//processParams takes two usernames and returns two sorted userids 
function processParams (unprocessedParams, callback) {
  var queryString = 'SELECT id FROM couples WHERE username = (?) UNION ALL SELECT id FROM couples WHERE username = (?);';
  dbConnection.query(queryString, [unprocessedParams.to, unprocessedParams.from], function(err, data) {

    if (err) console.log("query error", err);
    
    else {
      var senderId =data[0].id;
      var receiverId = data[1].id;
      if (senderId < receiverId) {
        console.log("processed data is ", data);
        callback ([ [senderId + ":" + receiverId], [senderId] ]);
      }

      else {
        callback([ [receiverId + ":" + senderId], [senderId] ]);
      }
    }
  });

}

module.exports = {

  //update total_messages table and messages table
  postMessage: function(unprocessedParams, callback) { 
    
    //unprocessedParams is [sender, receiver, msg]. the param being returned is [userParams, senderParams]
    processParams(unprocessedParams, function(param){
      var usersParam = param[0];
      var senderParam = param[1];

      console.log("usersParam", usersParam);
      var updateTotalQuery = 'INSERT INTO total_messages (identifier, total_messages) VALUES (?, 1)ON DUPLICATE KEY UPDATE total_messages = total_messages + 1;';
      dbConnection.query(updateTotalQuery, usersParam, function(err, data) {

        var getTotalQuery = 'SELECT total_messages FROM total_messages WHERE identifier = (?)';
        dbConnection.query(getTotalQuery, usersParam, function(err, data) {
          var total = data[0].total_messages;
          
          var messagesParam = [usersParam + ":" + total, unprocessedParams.message, senderParam];
          console.log("messagesParam is ", messagesParam);
          console.log("got through query2! data got back ", data);
          //after retrieving total_messages, eg. (4), we add new messages with an identifier of user1:user2:4.
          var updateMessagesQuery = 'INSERT INTO messages ( identifier_message_number, message, sender ) VALUES (?,?,?)';
          dbConnection.query(updateMessagesQuery, messagesParam, callback);
        });
      });
    });
  }
};
