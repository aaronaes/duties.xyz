$(document).ready(function() {
  // Toggle Menu
  // $(".project-toggle").click(() => {
  //   $(".project-exp").toggleClass("open");
  // });

  $(".toggle").bind("click", function(e) {
    $(".expanded")
      .toggleClass("open")
      .animateAuto("height", 1000);
  });
});

var firstPanelTitle = $(".page-wrap#home .project:first-child").attr(
  "data-panel-hook"
);

$(".header-wrap .project-scroll-title").html(", " + firstPanelTitle);

$(".page-wrap#home .project").each(function() {
  var indexPanel = $(this);
  $(window).on("scroll", function() {
    var targetOffset = indexPanel.offset().top,
      targetWindowHalf = $(window).height() / 2,
      finalTargetOffset = targetOffset - targetWindowHalf,
      morePanelTitles = indexPanel.attr("data-panel-hook");
    if ($(window).scrollTop() > finalTargetOffset) {
      $(".header-wrap .project-scroll-title").html(", " + morePanelTitles);
    }
  });
});
