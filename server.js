var express = require('express');
var app = express();
const socket = require('socket.io');
const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function () {
  console.log(`Server connected at http://localhost:${PORT}`);
});

var io = socket(server);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('User ' + socket.id);

  socket.on('messageSent', function (message) {
    socket.broadcast.emit('messageSent', message);
    
    // io.emit('messageSent', JSON.stringify(message))
  });
});
