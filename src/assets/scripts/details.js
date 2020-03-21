$(document).ready(function() {
  //Project List Hack

  $("details summary")
    .not("details.coming")
    .click(function() {
      $("body,html").animate(
        {
          scrollTop: $(this).offset().top - 20
        },
        300
      );
      $("details")
        .not(this)
        .removeAttr("open");

      // if ($(this).attr("open"))
      //   $("body,html").animate(
      //     {
      //       scrollTop: $(".projectList").offset().top - 40
      //     },
      //     300
      //   );
    });
});
