$(document).ready(function() {
  $("body").css("opacity", "1");

  // Start at top
  $(window).on("unload", function() {
    $(window).scrollTop(0);
  });

  // BG FADE
  var top = $("header").offset().top; //gets offset of header
  var height = $("body").outerHeight(); //gets height of header

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > top + height / 3) {
      $("body.home, main").addClass("light");
    } else {
      $("body.home, main").removeClass("light");
    }
  });

  var numImgs = $(".projectList > details > img").length;
  $(".count").text(numImgs);
});
