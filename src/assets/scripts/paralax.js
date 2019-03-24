// Paralax

$(window).scroll(function () {
  $("body.home header").css("opacity", 1 - $(window).scrollTop() / 500);

  // var st = $(this).scrollTop();
  // $("body.home header").css({
  //   transform: "translateY(" + st / 2 + "px)"
  // });
});
