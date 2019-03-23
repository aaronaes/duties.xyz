<template>
  <section id="gl" class="project">
    <section class="row">
      <figure class="columns title">
        <p>
          Godt Levert, a food-to-your-door service.
          <span class="super">[2018 - 19]</span>
        </p>
        <a href="#gl" @click="showMore = !showMore" class="toggle">
          <p>
            <span></span>
          </p>
        </a>
        <div v-if="showMore" class="toggleInfo">
          <p>Godt Levert didn't have as much of a presence in the market as they wanted. The service was new and was gaining traction, and with that Godt Levert wanted to become a household name.</p>
          <p>The solution was to take a more holistic approach to their product, through creating a new way to browse meals and weekly deals. As a part of the project, the whole app was revamped with new UI and a new website.</p>
          <a href="//www.godtlevert.no" target="_blank">Visit site &nearr;</a>
        </div>
      </figure>

      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/gl/gl-01.png">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/gl/gl-02.png">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/gl/gl-03.png">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/gl/gl-04.png">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/gl/gl-05.png">
      </figure>
    </section>
  </section>
</template>

<script>
export default {
  name: "Godt Levert",
  data() {
    return {
      title: "Godt Levert",
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
