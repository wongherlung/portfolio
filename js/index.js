/**
 * Created by wongherlung on 13/2/16.
 */
$(document).ready(function() {

  $('#splash-btn').click(function() {
    $('html, body').animate({
      scrollTop: $("#content-1").offset().top
    }, 500);
  });

});