<template>
  <div class="content">
    <div class="grid-x">
      <div class="cell large-8 medium-10 description">
        <h3 class="cell large-10">
          Humid Magazine was a Norwegian neo-erotic publication with a different
          approach. Inspired by foreign neo-eroticism, Humid introduced the
          Norwegian woman as a sexual being on her own terms.
        </h3>
        <h3 class="cell large-10">
          We assisted in the design of the magazine masthead and produced a
          graphic language with a premium feel to exist alongside the
          photo-centric layouts across print and digital formats.
        </h3>
      </div>
      <div class="grid-x meta large-8 medium-10">
        <p class="cell large-4 medium-6 small-6 status">
          <span>Concept, 2015</span>
        </p>
        <p class="cell large-4 medium-6 small-6 category">
          <span>Identity, Art Direction & Digital Design</span>
        </p>
      </div>
    </div>
    <div
      class="grid-x grid-margin-x img-container"
      v-lazy-container="{ selector: 'img' }"
    >
      <div class="cell">
        <img
          data-src="/images/work/humid/humid-01.jpg"
          data-srcset="/images/work/humid/humid-01@2x.jpg 2x"
        />
        <img
          data-src="/images/work/humid/humid-02.jpg"
          data-srcset="/images/work/humid/humid-02@2x.jpg 2x"
        />
      </div>
      <div class="large-8 medium-8 center">
        <img
          class="space"
          data-src="/images/work/humid/humid-03.jpg"
          data-srcset="/images/work/humid/humid-03@2x.jpg 2x"
        />
      </div>
      <div class="cell">
        <img
          data-src="/images/work/humid/humid-04.jpg"
          data-srcset="/images/work/humid/humid-04@2x.jpg 2x"
        />
      </div>

      <div class="cell large-6 medium-6 small-12">
        <img
          data-src="/images/work/humid/humid-05.jpg"
          data-srcset="/images/work/humid/humid-05@2x.jpg 2x"
        />
      </div>
      <div class="cell large-6 medium-6 small-12">
        <img
          data-src="/images/work/humid/humid-06.jpg"
          data-srcset="/images/work/humid/humid-06@2x.jpg 2x"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "humid",
  data() {
    return {
      title: "Humid",
      showMore: false
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
