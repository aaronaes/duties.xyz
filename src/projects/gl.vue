<template>
  <div class="content">
    <div class="grid-x grid-margin-x">
      <div class="cell meta">
        <h4>Ongoing</h4>
      </div>
      <div class="cell large-8 medium-10 description">
        <h3 class="cell large-10">
          Godtlevert is a meal-kit company based in Norway. As a new service and
          player in the market, Godtlevert wanted to become a national household
          name and gain further traction in this emerging segment.
        </h3>
        <h3 class="cell large-10">
          Our solution was to take an holistic approach to their product by
          creating a new way to browse meals and weekly specials. Their whole
          app was revamped with a new UI alongside an updated website design.
        </h3>
      </div>
      <div class="cell meta">
        <h4>All photography done in-house.</h4>
        <h4>Site built in-house.</h4>
      </div>
    </div>

    <div class="img-container" v-lazy-container="{ selector: 'img' }">
      <div class="grid-x grid-margin-x">
        <div class="cell">
          <img
            data-src="/images/work/gl/godtlevert-01.png"
            data-srcset="/images/work/gl/godtlevert-01@2x.png 2x"
          />
          <img
            data-src="/images/work/gl/godtlevert-02.png"
            data-srcset="/images/work/gl/godtlevert-02@2x.png 2x"
          />
        </div>

        <!-- DOUBLE -->
        <div class="grid-x">
          <div class="cell auto grid-padding-x">
            <img
              data-src="/images/work/gl/godtlevert-03.png"
              data-srcset="/images/work/gl/godtlevert-03@2x.png 2x"
            />
          </div>
          <div class="cell auto grid-padding-x">
            <img
              data-src="/images/work/gl/godtlevert-04.png"
              data-srcset="/images/work/gl/godtlevert-04@2x.png 2x"
            />
          </div>
        </div>

        <div class="cell">
          <img
            data-src="/images/work/gl/godtlevert-05.png"
            data-srcset="/images/work/gl/godtlevert-05@2x.png 2x"
          />
          <img
            data-src="/images/work/gl/godtlevert-06.png"
            data-srcset="/images/work/gl/godtlevert-06@2x.png 2x"
          />
        </div>

        <div class="grid-x double">
          <div class="cell auto grid-padding-x">
            <img
              data-src="/images/work/gl/godtlevert-07.png"
              data-srcset="/images/work/gl/godtlevert-07@2x.png 2x"
            />
          </div>
          <div class="cell auto grid-padding-x">
            <img
              data-src="/images/work/gl/godtlevert-08.png"
              data-srcset="/images/work/gl/godtlevert-08@2x.png 2x"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gl",
  data() {
    return {
      title: "Godt Levert",
      active: false
    };
  }
};
</script>
