$(document).ready(function(){
  $('.nav-toggle-container').click(function(){
    $('#nav').toggleClass('is-active');
    $('#toggle').toggleClass('active');
  });
  $('.popup-close').click(function(){
    $('#popup').addClass('popup-closed');
  });
});
$(window).on('load', function () {
  alert("Window Loaded");
});