<template>
  <div>
    <div class="content grid-container">
      <div class="grid-x description">
        <div class="cell">
          <h2>
            An ever changing selection of our favourite marks that we have
            created for our clients, friends and personal projects over the
            years. We hope to see yours here soon.
          </h2>
        </div>
      </div>
      <div class="grid-x meta">
        <div class="cell large-4 medium-4 small-12">
          <p class="title">Range</p>
          <p class="float-left">
            <span>Work from 2009 - 2020</span>
          </p>
        </div>
      </div>
    </div>
    <div class="img-container" v-lazy-container="{ selector: 'img' }">
      <div class="grid-x grid-margin-x grid-padding-x align-center">
        <div class="cell large-8">
          <img
            data-src="/images/work/marks/logo-02.jpg"
            data-srcset="/images/work/marks/logo-02@2x.jpg 2x"
          />
        </div>
        <div class="cell large-8">
          <img
            data-src="/images/work/marks/logo-03.jpg"
            data-srcset="/images/work/marks/logo-03@2x.jpg 2x"
          />
        </div>
        <div class="cell large-8">
          <img
            data-src="/images/work/marks/logo-04.jpg"
            data-srcset="/images/work/marks/logo-04@2x.jpg 2x"
          />
        </div>
        <div class="cell large-8">
          <img
            data-src="/images/work/marks/logo-05.jpg"
            data-srcset="/images/work/marks/logo-05@2x.jpg 2x"
          />
        </div>
        <div class="cell large-8">
          <img
            data-src="/images/work/marks/logo-06.jpg"
            data-srcset="/images/work/marks/logo-06@2x.jpg 2x"
          />
        </div>
        <div class="cell large-8">
          <img
            data-src="/images/work/marks/logo-07.jpg"
            data-srcset="/images/work/marks/logo-07@2x.jpg 2x"
          />
        </div>
        <div class="cell large-8">
          <img
            data-src="/images/work/marks/logo-08.jpg"
            data-srcset="/images/work/marks/logo-08@2x.jpg 2x"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "logos-and-wordmarks",
  data() {
    return {
      title: "Logos and wordmarks",
      image: ["/images/work/marks/logo.gif"],
      coverSize: "square",
      bg: "#f8f8f8"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
