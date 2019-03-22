$(document).ready(function () {
  // Tooltip only Text
  $('.tooltip-master').hover(function () {
    // Hover over code
    var title = $(this).attr('title');
    $(this).data('tipText', title).removeAttr('title');
    $('<h3 class="tooltip"></h3>')
      .html(title)
      .appendTo('body')
      .fadeIn('1000');
  }, function () {
    // Hover out code
    $(this).attr('title', $(this).data('tipText'));
    $('.tooltip').remove();
  }).mousemove(function (e) {
    var mousex = e.pageX + 20; //Get X coordinates
    var mousey = e.pageY; //Get Y coordinates
    $('.tooltip')
      .css({
        top: mousey,
        left: mousex
      })
  });
});
