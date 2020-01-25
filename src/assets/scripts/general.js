$(document).ready(function () {

  // BG FADE
  var top = $("header").offset().top; //gets offset of header
  var height = $("header").outerHeight(); //gets height of header

  $(window).on("scroll", function () {

    if ($(window).scrollTop() > top + height / 4) {
      $("body").addClass("light");
      //$("nav").css("transform", "translateY(-200px)");
      $(".toppp").addClass("show");
    } else {
      $("body").removeClass("light");
      //$("nav").css("transform", "translateY(0px)");
      $(".toppp").removeClass("show");
    }
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() + $(window).height() > ($(document).height() - 4)) {
      //you are at bottom
      $("body").removeClass("light");
    }
  });

  // Random image shuffle
  var images = [
    'banner-1.png',
    'banner-2.png',
    'banner-3.png',
    'banner-4.png',
    'banner-5.png',
    'banner-6.png',
    'banner-7.png',
    'banner-8.png',
    'banner-9.png'
  ];

  $('<img src="/images/banner/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.banner1');
  $('<img src="/images/banner/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.banner2');
  $('<img src="/images/banner/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.banner3');

  // Manual shuffle
  $(".shuffle-container").imagesLoaded(function () {
    $(".shuffle-container img").hover(function () {
      $(this).toggleClass("shuffleShow");
    });
  });

  var $carousel = $(".carousel").flickity({
    pauseAutoPlayOnHover: false
  });

  var $carouselStatus = $(".carousel-status");
  var flkty = $carousel.data("flickity");

  function updateStatus() {
    var cellNumber = flkty.selectedIndex + 1;
    $carouselStatus.text(cellNumber + "/" + flkty.slides.length);
  }
  updateStatus();
  $carousel.on("change.flickity", updateStatus);

  $carousel.on("mouseenter", function () {
    $carousel.on("mouseleave", onNavMouseleave);
  });

  function onNavMouseleave() {
    $carousel.flickity("playPlayer");
    $carousel.off("mouseleave", onNavMouseleave);
  }

  // Carousel fix
  function setHeight(ab) {
    var target = $("img.carousel-cell"),
      heightImage;
    if (target[0].complete || target[0].readyState === 4) {
      heightImage = target.height();
      ab.height(heightImage);
    } else {
      target.on("load", function () {
        heightImage = $(this).height();
        console.log(heightImage);
        ab.height(heightImage);
      });
    }
  }
  setHeight($(".flickity-viewport"));

  $(window).resize(function () {
    setHeight($(".flickity-viewport"));
  });

  var $carousel = $(".carousel").flickity({});

  $carousel.on("mouseenter", function () {
    $carousel.on("mouseleave", onNavMouseleave);
  });

  function onNavMouseleave() {
    $carousel.flickity("playPlayer");
    $carousel.off("mouseleave", onNavMouseleave);
  }

});
