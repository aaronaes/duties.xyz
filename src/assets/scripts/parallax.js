// Paralax

$(window).scroll(function() {
  var distance = $(this).scrollTop();
  $(".masthead").css("opacity", 1 - $(window).scrollTop() / 300);
  $(".masthead").css({
    top: distance * 0.175 + "px"
  });
});
