module.exports = function(server){

  var path = require('path'); 
  var io = require('socket.io')(server);
  var name = [];
  var users = {};

  io.on('connection', function(socket){
    console.log('socket connected');
    //server listen to the emitted message from client
    socket.on('clientToSeverMsg', function(data){
      console.log('hi', JSON.stringify(data));
      //send msg to everyone BUT the sender
      socket.broadcast.emit('severToClientMsg', data);
    });
    socket.on('clientToSeverGetName', function(data){
      if(name.indexOf(data) === -1){
        name.push(data);
      }
      console.log('clientToSeverGetName', data);
      users[data] = socket;
      console.log(users);
      io.emit('severToClientGiveName', name);
    });

    socket.on('sendMsgToSever', function(data){
      console.log('sendMsgToSever', data); 
      // When a message is received, emit the data to the receiver.
      users[data.to].emit('receivedMessage', data);
    });

  });

};