$(document).ready(function () {

  // Toggle Menu
  $('.open-menu').click(() => {
    $('body').toggleClass('menu-open');
  });

  $('.case-toggle').click(() => {
    $('.case-content').toggleClass('open');
  });

  if ($("main").hasClass("about") === true) {
    $("body").addClass("dark");
  } else {
    $("body").removeClass("dark");
  }

  // // // Carousel
  // var $carousel = $('.flickity').flickity({

  //   // options
  //   pageDots: true,
  //   prevNextButtons: false,
  //   setGallerySize: false,
  //   draggable: false,
  //   lazyload: true,
  //   wrapAround: true,
  //   autoPlay: 2000
  // });

  // $('.flickity').on('click', function () {
  //   $carousel.flickity('next');
  // });

  // Image Hover
  $('.hover-text').mousemove(function (e) {
    $img = $("#" + $(this).data('image-id'))
    $img.stop(1, 1).show();
    $img.offset({
      top: e.pageY - 300,
      left: e.pageX + 30
    });
  }).mouseleave(function () {
    $img = $("#" + $(this).data('image-id'))
    $img.hide();
  });

});
