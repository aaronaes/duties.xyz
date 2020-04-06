$(document).ready(function() {
  $("body").css("opacity", "1");

  // Start at top
  $(window).on("unload", function() {
    $(window).scrollTop(0);
  });

  $(window).on("resize", function() {
    $(".masonnry").masonry("reloadItems");
  });
  $(window).trigger("resize");
});
