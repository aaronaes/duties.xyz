$(document).ready(function () {

  // Color change
  var top = $("header").offset().top; //gets offset of header
  var height = $("header").outerHeight(); //gets height of header

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > top + height / 10) {
      $(".imagePeek span img").css("opacity", "0");
      $(".imagePeek span img").css("heigh", "0");
    } else {
      $(".imagePeek span img").css("opacity", "1");
      $(".imagePeek span img").css("height", "auto");
    }

    if ($(window).scrollTop() > top + height / 2) {
      $("body").addClass("light");
      $(".toppp").addClass("show");
    } else {
      $("body").removeClass("light");
      $(".toppp").removeClass("show");
    }
  });

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
