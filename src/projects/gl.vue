<template>
  <div class="content">
    <div class="grid-x">
      <div class="cell large-8 medium-10 description">
        <h3>
          Godtlevert is a meal-kit company based in Norway. As a new service and
          player in the market, Godtlevert wanted to become a national household
          name and gain further traction in this emerging segment.
        </h3>
        <h3>
          Our solution was to take an holistic approach to their product by
          creating a new way to browse meals and weekly specials. Their whole
          app was revamped with a new UI alongside an updated website design.
        </h3>
        <h3>
          <a href="https://godtlevert.no/" target="_blankn">Visit site</a>
        </h3>
      </div>
      <div class="grid-x meta large-8 medium-10 small-12">
        <p class="cell large-3 medium-3 small-12 float-left status">
          <span>Ongoing</span>
        </p>
        <p class="cell large-6 medium-6 small-12 float-left category">
          <span>Art direction, UX & Design</span>
        </p>
      </div>
    </div>

    <div
      class="grid-x grid-margin-x img-container"
      v-lazy-container="{ selector: 'img' }"
    >
      <img
        data-src="/images/work/gl/godtlevert-01.jpg"
        data-srcset="/images/work/gl/godtlevert-01@2x.jpg 2x"
      />
      <img
        data-src="/images/work/gl/godtlevert-02.jpg"
        data-srcset="/images/work/gl/godtlevert-02@2x.jpg 2x"
      />

      <!-- DOUBLE -->

      <div class="cell large-6 medium-6 small-12">
        <img
          data-src="/images/work/gl/godtlevert-03.jpg"
          data-srcset="/images/work/gl/godtlevert-03@2x.jpg 2x"
        />
      </div>
      <div class="cell large-6 medium-6 small-12">
        <img
          data-src="/images/work/gl/godtlevert-04.jpg"
          data-srcset="/images/work/gl/godtlevert-04@2x.jpg 2x"
        />
      </div>

      <div class="cell">
        <img
          data-src="/images/work/gl/godtlevert-05.jpg"
          data-srcset="/images/work/gl/godtlevert-05@2x.jpg 2x"
        />
        <img
          data-src="/images/work/gl/godtlevert-06.jpg"
          data-srcset="/images/work/gl/godtlevert-06@2x.jpg 2x"
        />
      </div>

      <div class="cell large-6 medium-6 small-12">
        <img
          data-src="/images/work/gl/godtlevert-07.jpg"
          data-srcset="/images/work/gl/godtlevert-07@2x.jpg 2x"
        />
      </div>
      <div class="cell large-6 medium-6 small-12">
        <img
          data-src="/images/work/gl/godtlevert-08.jpg"
          data-srcset="/images/work/gl/godtlevert-08@2x.jpg 2x"
        />
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
