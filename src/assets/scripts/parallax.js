// Paralax
$(window).scroll(function (e) {
  $("nav").css("opacity", 1 - $(window).scrollTop() / 400);

});

$(window).on('scroll', function () {
  yPos = window.pageYOffset;
  shift = yPos * 0.5 + 'px';
  $('nav').css('top',
    shift);
});

// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();

//   if (scroll >= 50) {
//     $(".clients").addClass("disable-hover");
//   } else {
//     $(".clients").removeClass("disable-hover");
//   }
// });
