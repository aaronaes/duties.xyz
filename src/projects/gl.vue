<template>
  <div>
    <div class="content grid-container" id="projectTop">
      <div class="grid-x description">
        <div class="cell">
          <h2>
            Godtlevert is a meal-kit company based in Norway. As a new service
            and player in the market, Godtlevert wanted to become a national
            household name and gain further traction in this emerging segment.
          </h2>
          <h2>
            Our solution was to take an holistic approach to their product by
            creating a new way to browse meals and weekly specials. Their whole
            app was revamped with a new UI alongside an updated website design.
          </h2>
          <h2 class="this">
            <a href="https://godtlevert.no/" target="_blankn">Visit site</a>
          </h2>
        </div>
      </div>

      <div class="grid-x meta">
        <div class="cell">
          <p>Service</p>
        </div>
        <div class="cell">
          <h3 class="float-left">
            Art direction
          </h3>
          <h3 class="float-left">
            User Experience
          </h3>
          <h3 class="float-left">Design</h3>
        </div>
      </div>
    </div>
    <div class="content grid-container fluid">
      <div
        class="grid-x grid-margin-x img-container align-center"
        v-lazy-container="{ selector: 'img' }"
      >
        <div class="cell">
          <img
            data-src="/images/work/gl/godtlevert-01.jpg"
            data-srcset="/images/work/gl/godtlevert-01@2x.jpg 2x"
          />
          <img
            data-src="/images/work/gl/godtlevert-02.jpg"
            data-srcset="/images/work/gl/godtlevert-02@2x.jpg 2x"
          />
        </div>

        <div class="cell large-6 medium-8 small-12">
          <img
            data-src="/images/work/gl/godtlevert-03.jpg"
            data-srcset="/images/work/gl/godtlevert-03@2x.jpg 2x"
          />
        </div>
        <div class="cell large-6 medium-8 small-12">
          <img
            data-src="/images/work/gl/godtlevert-04.jpg"
            data-srcset="/images/work/gl/godtlevert-04@2x.jpg 2x"
          />
        </div>

        <div class="large-8 medium-10 small-12">
          <img
            data-src="/images/work/gl/godtlevert-05.jpg"
            data-srcset="/images/work/gl/godtlevert-05@2x.jpg 2x"
          />
        </div>
        <div class="large-8 medium-10 small-12">
          <img
            data-src="/images/work/gl/godtlevert-06.jpg"
            data-srcset="/images/work/gl/godtlevert-06@2x.jpg 2x"
          />
        </div>

        <div class="large-8 medium-10 small-12">
          <img
            data-src="/images/work/gl/godtlevert-07.jpg"
            data-srcset="/images/work/gl/godtlevert-07@2x.jpg 2x"
          />
        </div>
        <div class="large-8 medium-10 small-12">
          <img
            data-src="/images/work/gl/godtlevert-08.jpg"
            data-srcset="/images/work/gl/godtlevert-08@2x.jpg 2x"
          />
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
      image: "/images/work/gl/godtlevert-01.jpg",
      coverSize: "landscape",
      bg: "#eeedeb"
    };
  }
};
</script>
