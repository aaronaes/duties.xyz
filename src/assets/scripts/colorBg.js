// Click to change color

$(document).ready(function () {
  var colors = [
    "#231A73",
    "#b32e37",
    "#00BF80",
    "#64637C",
    "#1E1E1E",
    "#002EE8"
  ];
  var rand = Math.floor(Math.random() * colors.length);
  $('body').css("background-color", colors[rand]);

  $('header').on('click', function (event) {
    var colors = ["#231A73", "#b32e37", "#00BF80", "#64637C", "#1E1E1E", "#002EE8"];
    var rand = Math.floor(Math.random() * colors.length);

    $('body').css("background-color", colors[rand]);
  });

});
