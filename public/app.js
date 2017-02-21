$(function () {
  var cursor_blink = window.setInterval(function () {
    $('.cursor').toggleClass('hide');
  }, 500);

  $('.go-button').on('click', function(){
    var message = $('.message-input').val();
    console.log(message);

    message_count++;
    displayMessage(message);
  });

  var message_count = 0;
  var count = 0;

  var socket = io.connect('http://localhost:3000');

  socket.on('connect', function () {
    console.log('connected.');
  });

  socket.on('message', function(message){
    console.log(message);
    displayMessage(message);
    // count++
  });

  function displayMessage(message){
    var container = {};
    message += '\n';
    // $('.message-container').append('<div class="message' + message_count + '"></div>');
    $('<br/><div class="message message' + message_count + '"></div>').insertBefore('.cursor');
    // $('.message').append(message);
    var wait_count = 0;
    var count = 0;
    for(var i = 0; i <= message.length; i++){
      wait_count += 100;
      window.setTimeout(function(){
        $('.message' + message_count).append(message.charAt(count));
        count++
      },wait_count)
    }
  }
});
