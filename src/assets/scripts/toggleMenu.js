$(document).ready(function () {

  // OPTION A: OPEN PROJECT DRAWER

  $('.btn').click(function () {
    $('.toppp').toggleClass('open');
  });

  $('.toppp ul li a').click(function (e) {
    $('.toppp').removeClass('open');
  });




  // OPTION 2: NEXT PROJECT FUNCTION

  $('.next').click(function (e) {

    var selected = $(".list-item.current");
    var anchors = $(".list-item");

    var pos = anchors.index(selected);
    var next = anchors.get(pos + 1);
    var prev = anchors.get(pos - 1);

    target = $(next);

    $(selected).removeClass("current");
    $(next).addClass("current");

    if (target.offset()) {
      $('html, body').animate({
        scrollTop: target.offset().top + 'px'
      }, 500);
    }

    e.preventDefault();
  });

  $('.prev').click(function (e) {

    var selected = $(".list-item.current");
    var anchors = $(".list-item");

    var pos = anchors.index(selected);
    var next = anchors.get(pos + 1);
    var prev = anchors.get(pos - 1);

    target = $(prev);

    $(selected).removeClass("current");
    $(prev).addClass("current");

    if (target.offset()) {
      $('html, body').animate({
        scrollTop: target.offset().top + 'px'
      }, 500);
    }

    e.preventDefault();
  });

});
