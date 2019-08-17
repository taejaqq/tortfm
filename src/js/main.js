"use strict";
$(document).ready(function(){
  new fullpage('#fullpage', {
    scrollingspeed: 1300
  });
  
  $('.content__picture').on( "click", function() {
    $('.slider').css("transform", "translateX(-50%)");
  });

});
