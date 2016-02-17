/**
 * Created by wongherlung on 13/2/16.
 */
$(document).ready(function() {

  attachScrollEvents();
  attachNavbarEvent();
  attachValidation();

});

function attachScrollEvents() {
  var animationTime = 500

  $('#splash-btn').click(function() {
    $('html, body').animate({
      scrollTop: $("#content-1").offset().top
    }, animationTime);
  });

  $('#content-1-btn').click(function() {
    $('html, body').animate({
      scrollTop: $("#content-2").offset().top
    }, animationTime);
  });

  $('#content-2-btn').click(function() {
    $('html, body').animate({
      scrollTop: $("#content-3").offset().top
    }, animationTime);
  });

  $('#viddsee-btn').click(function() {
    $('html, body').animate({
      scrollTop: $("#content-4").offset().top
    }, animationTime);
  });

  $('#xfers-btn').click(function() {
    $('html, body').animate({
      scrollTop: $("#content-4").offset().top
    }, animationTime);
  });

  $('#cvwo-btn').click(function() {
    $('html, body').animate({
      scrollTop: $("#content-4").offset().top
    }, animationTime);
  });

  $('#content-4-btn').click(function() {
    $('html, body').animate({
      scrollTop: $("#content-3").offset().top
    }, animationTime);
  });
}

function attachNavbarEvent() {
  var navbarThreshold = $('#content-1').offset().top;
  $(window).scroll(function() {
    if ($(this).scrollTop() >= navbarThreshold) {
      $('.navbar').hide();
    } else {
      $('.navbar').show();
      $('.navbar').css({
        'opacity': 1 - $(this).scrollTop()/navbarThreshold
      });
    }
  });
}

function attachValidation() {
  $("#submit-message").click(function() {
    var email = $("#email").val();
    var message = $("#message").val();
    var emailErrorMessage = '';
    var messageErrorMessage = '';
    $('.email-form-group').removeClass('has-error');
    $('.message-form-group').removeClass('has-error');
    $('#email-help-block').text('');
    $('#message-help-block').text('');

    if (!email) {
      $('.email-form-group').addClass('has-error');
      emailErrorMessage += 'Email field is empty. ';
    }

    if (!message) {
      $('.message-form-group').addClass('has-error');
      messageErrorMessage += 'Message field is empty. ';
    }

    if (email && !validateEmail(email)) {
      $('.email-form-group').addClass('has-error');
      emailErrorMessage += 'Email is not a valid email format. ';
    }

    if (emailErrorMessage) {
      $('#email-help-block').text(emailErrorMessage);
    }

    if (messageErrorMessage) {
      $('#message-help-block').text(messageErrorMessage);
    }

    if (emailErrorMessage || messageErrorMessage) {
      return;
    }

    alert('Thank you for contacting me. I\'ll get in touch with you soon!');
    $("#email").val('');
    $("#message").val('');
    var emailErrorMessage = '';
    var messageErrorMessage = '';
    $('.email-form-group').removeClass('has-error');
    $('.message-form-group').removeClass('has-error');
    $('#email-help-block').text('');
    $('#message-help-block').text('');

  });
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}