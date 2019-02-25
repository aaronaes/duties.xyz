$(document).ready(function() {
  // Fade in images on scroll
  $(".project > figure")
    .slice(1)
    .addClass("foo");

  $(window).load(() => {
    window.sr = ScrollReveal();
    sr.reveal(".foo", {
      scale: 1,
      duration: 600,
      delay: 0,
      distance: "60px",
      viewFactor: 0.2,
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
      opacity: 0,
      mobile: false,
      viewOffset: {
        top: 0,
        bottom: 0
      },
      reset: true
    });
  });
});
