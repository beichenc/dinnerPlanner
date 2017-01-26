$(document).ready(function() {
  $('img').mouseenter(function() {
    $(this).animate({"opacity": 0.7}, 500);
  });

  $('img').mouseleave(function() {
    $(this).animate({"opacity": 1}, 500);
  });
});
