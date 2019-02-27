$(document).ready(function() {
  // Toggle Menu
  $(".project-toggle").click(() => {
    $(".project-exp").toggleClass("open");
  });

  $(".toggle").bind("click", function(e) {
    $(".expanded")
      .toggleClass("open")
      .animateAuto("height", 1000);
  });
});

$(window)
  .scroll(function() {
    // selectors
    var $window = $(window),
      $body = $("body"),
      $panel = $(".panel");

    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + $window.height() / 3;

    $panel.each(function() {
      var $this = $(this);

      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if (
        $this.position().top <= scroll &&
        $this.position().top + $this.height() > scroll
      ) {
        // Remove all classes on body with color-
        $body.removeClass(function(index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
        });

        // Add class of currently active div
        $body.addClass("color-" + $(this).data("color"));
      }
    });
  })
  .scroll();

$(function() {
  function setHeight(ab) {
    var target = $("img.carousel-cell"),
      heightImage;
    if (target[0].complete || target[0].readyState === 4) {
      heightImage = target.height();
      ab.height(heightImage);
    } else {
      target.on("load", function() {
        heightImage = $(this).height();
        console.log(heightImage);
        ab.height(heightImage);
      });
    }
  }
  setHeight($(".flickity-viewport"));
  $(window).resize(function() {
    setHeight($(".flickity-viewport"));
  });
});
