<template>
  <section id="humid" class="project">
    <section class="row">
      <figure class="columns title">
        <h2>Humid Magazine</h2>
        <p>A neo-erotic magazine, by women for women.</p>
        <a href="#humid" @click="showMore = !showMore" class="toggle" :class="{ opened: showMore}">
          <p>
            <span></span>
          </p>
        </a>
        <div v-if="showMore" class="toggleInfo">
          <p
            class="copy"
          >Humid Magazine was the idea of a norwegian, neo-erotic magazine with a different approach. Inspired by foreign neo-eroticism, Humid introduced the Norwegian woman as a sexual being on her own terms.</p>
        </div>
      </figure>

      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/humid/humid-01.jpg">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/humid/humid-02.jpg">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/humid/humid-03.jpg">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/humid/humid-04.jpg">
      </figure>
      <figure class="large-6 medium-6 small-12 float-left" v-scroll-reveal>
        <div class="columns">
          <img src="/images/work/humid/humid-05.jpg">
        </div>
      </figure>
      <figure class="large-6 medium-6 small-12 float-left" v-scroll-reveal>
        <div class="columns">
          <img src="/images/work/humid/humid-06.jpg">
        </div>
      </figure>
    </section>
  </section>
</template>

<script>
export default {
  name: "Humid",
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
