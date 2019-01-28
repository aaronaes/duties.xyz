$(document).ready(function () {

  // Toggle Menu
  $('.open-menu').click(() => {
    $('body').toggleClass('menu-open');
  });

  $('.case-toggle').click(() => {
    $('.case-content').toggleClass('open');
  });
});