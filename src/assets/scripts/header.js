$(document).ready(function () {
  // // Hide Header on on scroll down
  // var didScroll;
  // var lastScrollTop = 0;
  // var delta = 5;
  // var navbarHeight = $("body.projects header").outerHeight();

  // $(window).scroll(function (event) {
  //   didScroll = true;
  // });

  // setInterval(function () {
  //   if (didScroll) {
  //     hasScrolled();
  //     didScroll = false;
  //   }
  // }, 250);

  // function hasScrolled() {
  //   var st = $(this).scrollTop();

  //   // Make sure they scroll more than delta
  //   if (Math.abs(lastScrollTop - st) <= delta) return;

  //   // If they scrolled down and are past the navbar, add class .nav-up.
  //   // This is necessary so you never see what is "behind" the navbar.
  //   if (st > lastScrollTop && st > navbarHeight) {
  //     // Scroll Down
  //     $("body.projects header")
  //       .removeClass("nav-down")
  //       .addClass("nav-up");
  //   } else {
  //     // Scroll Up
  //     if (st + $(window).height() < $(document).height()) {
  //       $("body.projects header")
  //         .removeClass("nav-up")
  //         .addClass("nav-down");
  //     }
  //   }

  //   lastScrollTop = st;
  // }

  $(window).scroll(function () {
    $("body.home header").css("opacity", 1 - $(window).scrollTop() / 500);
    $("body.home main").css("opacity", 0 + $(window).scrollTop() / 500);

    var st = $(this).scrollTop();
    $("body.home header").css({
      transform: "translateY(" + st / 2 + "px)"
    });
  });

});
