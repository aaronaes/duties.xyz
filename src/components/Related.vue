<template>
  <section class="related">
    <div class="row list">
      <p class="list-title columns">
        <b>Select work (2009 — 2018)</b>
      </p>

      <div class="large-12 medium-12 small-12 left">
        <div class="columns">
          <ul>
            <li>
              <img id="cursor" src="/images/work/img2.jpg" class="mouse-hovered">
              <div class="large-12 medium-12 small-12">
                <p class="hover-text" data-image-id="cursor">Manwhore for rent, $1</p>
              </div>
            </li>
            <li>
              <img id="cursor" src="/images/work/img2.jpg" class="mouse-hovered">
              <div class="large-12 medium-12 small-12">
                <p class="hover-text" data-image-id="cursor">Manwhore for rent, $1</p>
              </div>
            </li>
            <li>
              <img id="cursor" src="/images/work/img2.jpg" class="mouse-hovered">
              <div class="large-12 medium-12 small-12">
                <p class="hover-text" data-image-id="cursor">Manwhore for rent, $1</p>
              </div>
            </li>
          </ul>
        </div>

        <ul class="columns">
          <li data-image-id="cursor">
            <p>
              <span class="large-6 medium-6 small-12 left">
                <a href="#project1" class="popup left">Project name, 2019</a>
              </span>
            </p>
            <p>
              <span class="large-6 medium-6 hide-for-small-only right rollover_img">
                <img src="/images/work/img2.jpg">
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Related"
};

$(".popup").modaal();

$(".hover-text")
  .mousemove(function(e) {
    $img = $("#" + $(this).data("image-id"));
    $img.stop(1, 1).show();
    $img.offset({
      top: e.pageY + 30,
      left: e.pageX + 30
    });
  })
  .mouseleave(function() {
    $img = $("#" + $(this).data("image-id"));
    $img.hide();
  });
</script>