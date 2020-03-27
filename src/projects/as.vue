<template>
  <div class="content">
    <div class="grid-x grid-margin-x">
      <div class="cell meta">
        <h4 class="status">Completed 2017</h4>
      </div>
      <div class="cell large-8 medium-10 description">
        <h3>
          Authentic Scandinavia is a dedicated online tour operator, creating
          and selling premium package tours throughout Scandinavia and the
          Nordic region.
        </h3>
        <h3>
          To help reflect their high-end travel offering we produced a visual
          identity and website design that utilised luxurious headline
          typography alongside a fresh yet understated colour palette.
        </h3>
      </div>
    </div>
    <div class="img-container" v-lazy-container="{ selector: 'img' }">
      <div class="grid-x grid-margin-x">
        <div class="cell">
          <img
            class="space"
            data-src="/images/work/as/as-01.jpg"
            data-srcset="/images/work/as/as-01@2x.jpg 2x"
          />
          <img
            data-src="/images/work/as/as-02.jpg"
            data-srcset="/images/work/as/as-02@2x.jpg 2x"
          />
          <img
            data-src="/images/work/as/as-03.jpg"
            data-srcset="/images/work/as/as-03@2x.jpg 2x"
          />
        </div>

        <!-- DOUBLE -->

        <div class="cell large-6 medium-6 small-12">
          <img
            data-src="/images/work/as/as-04.jpg"
            data-srcset="/images/work/as/as-04@2x.jpg 2x"
          />
        </div>
        <div class="cell large-6 medium-6 small-12">
          <img
            data-src="/images/work/as/as-05.jpg"
            data-srcset="/images/work/as/as-05@2x.jpg 2x"
          />
        </div>

        <div class="cell">
          <img
            data-src="/images/work/as/as-09.jpg"
            data-srcset="/images/work/as/as-09@2x.jpg 2x"
          />
        </div>
        <!-- DOUBLE -->

        <div class="cell large-6 medium-6 small-12">
          <img
            data-src="/images/work/as/as-07.jpg"
            data-srcset="/images/work/as/as-07@2x.jpg 2x"
          />
        </div>
        <div class="cell large-6 medium-6 small-12">
          <img
            data-src="/images/work/as/as-08.jpg"
            data-srcset="/images/work/as/as-08@2x.jpg 2x"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "authentic-scandinavia",
  data() {
    return {
      title: "Authentic Scandinavia"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
