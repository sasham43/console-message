$(function () {
  var cursor_blink = window.setInterval(function () {
    $('.cursor').toggleClass('hide');
  }, 500);

  $('.go-button').on('click', function(){
    var message = $('.message-input').val();
    console.log(message);
    displayMessage(message);
  });

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
});

function displayMessage(message){
  var container = {};
  $('.message-container').append('<div class="message"></div>');
  // $('.message').append(message);
  var wait_count = 0;
  var count = 0;
  for(var i = 0; i <= message.length; i++){
    wait_count += 100;
    window.setTimeout(function(){
      // wait

      $('.message').append(message.charAt(count));
      // console.log('wait',message, message.charAt(temp), temp);
      count++
    },wait_count)
  }
}
