// Click to change color

$(document).ready(function () {
  $('.font-test').on('click', function (event) {
    var fonts = [
      "Ginto",
      "Px Grotesk",
      "Graebenbach",
      "Maison Neue",
      "Graphik",
      "Inter"
    ];
    var rand = Math.floor(Math.random() * fonts.length);

    $('*').css("font-family", fonts[rand], '!important');
  });

});
