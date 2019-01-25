$(document).ready(function () {

  // Toggle Menu
  $('.open-menu').click(() => {
    $('body').toggleClass('menu-open');
  });

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top,
      },
      500
    );
  });
});