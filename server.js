var express = require('express');
var app = express();
var server = require('http').createServer(app);

var io = require('socket.io')(server);
io.on('connection', function(client){
  client.on('event', function(data){});
  client.on('disconnect', function(){});

  app.use('/message/:message', function(req, res){
    console.log(req.params.message);
    client.emit('message', req.params.message);
    res.sendStatus(200);
  });

});

app.use(express.static('public'));

// app.use('/', function(req, res){
//   res.sendFile('index.html');
// });

server.listen(3000, function(){
  console.log('listening on 3000...');
});
