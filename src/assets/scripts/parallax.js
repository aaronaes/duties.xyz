// Paralax

$(window).scroll(function () {

  var scroll = $(window).scrollTop();

  if (scroll > 0) {
    $("header").css("opacity", "0");
    $("header .clients a span").css("opacity", "0");
    $("header .clients a span").css("top", "-100vh");
  } else {
    $("header").css("opacity", "1");
    $("header .clients a span").css("opacity", "1");
    $("header .clients a span").css("top", "0");
  }


});
