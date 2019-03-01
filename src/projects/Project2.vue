<template>
  <main class="project">
    <section class="row">
      <!-- Intro -->
      <div class="columns">
        <figure class="small-12 medium-10 large-8 float-left">
          <h1>{{ title }}</h1>
          <h2>Senior designer and art-director working with startups, brands, cultural projects and friends, telling their stories in a large variety of formats. I collect my unused ideas and concepts in my Journal and you can read my Bio here.</h2>
          <p>Senior designer and art-director working with startups, brands, cultural projects and friends, telling their stories in a large variety of formats. I collect my unused ideas and concepts in my Journal and you can read my Bio here.</p>
        </figure>

        <figure v-scroll-reveal>
          <img src="/images/work/img6.jpg">
          <small>-> This was created with the surgical digital precision of a tweezer.</small>
        </figure>

        <figure v-scroll-reveal>
          <img src="/images/work/img4.jpg">
        </figure>

        <figure class="columns" v-scroll-reveal>
          <h2
            class="small-12 medium-10 large-8 float-center"
          >Senior designer and art-director working with startups, brands, cultural projects and friends, telling their stories in a large variety of formats.</h2>
        </figure>

        <figure v-scroll-reveal>
          <img src="/images/work/img7.jpg">
        </figure>

        <figure v-scroll-reveal>
          <img src="/images/work/img9.jpg">
        </figure>

        <figure class="small-12 medium-8 large-8 float-right" v-scroll-reveal>
          <img src="/images/work/img8.jpg">
          <p>Project Projects, available now!</p>
        </figure>

        <figure v-scroll-reveal>
          <img src="/images/work/img6.jpg">
        </figure>
      </div>
    </section>
    <section class="row next-project">
      <div class="columns">
        <h2>
          <router-link to="/">Next project —></router-link>
        </h2>
      </div>
    </section>
  </main>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  name: "Dildo",
  components: {
    VLazyImage
  },
  data() {
    return {
      title: "Project title"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>

<style scoped>
/* .v-lazy-image {
  filter: blur(10px);
  transition: filter 0.5s;
}
.v-lazy-image-loaded {
  filter: blur(0px);
} */
</style>