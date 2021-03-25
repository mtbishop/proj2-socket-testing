var socket = io.connect('http://localhost:3000');

function sendMessage() {
  socket.emit('messageSent', {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  });
}

socket.on('messageSent', function (message) {
  $.notify('New Message\n' + message.message + '\n\nFrom: ' + message.name,
    {
      autoHide: false,
      className: 'success',
    });
});
