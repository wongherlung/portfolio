/**
 * Created by wongherlung on 13/2/16.
 */
$(document).ready(function() {

  attachScrollEvents();
  attachNavbarEvent();

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