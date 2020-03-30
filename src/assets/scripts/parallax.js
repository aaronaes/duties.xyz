// Paralax

$(window).scroll(function() {
  var distance = $(this).scrollTop();
  //$(".masthead").css("opacity", 1 - $(window).scrollTop() / 300);
  $("body.home .masthead").css({
    top: distance * -0.25 + "px"
  });
});
