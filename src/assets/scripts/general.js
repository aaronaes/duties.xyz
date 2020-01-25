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

});
