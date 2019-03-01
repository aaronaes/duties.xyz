<template>
  <main id="home">
    <Currently/>
    <section>
      <div class="row recently">
        <div class="columns">
          <div class="title">— Recently</div>
        </div>
        <div class="columns">
          <figure class="small-12 medium-10 large-10 float-left" v-scroll-reveal>
            <router-link to="/project2">
              <img src="https://www.placecage.com/1200/800">
              <p>1. Yah</p>
            </router-link>
          </figure>
        </div>
        <div class="columns">
          <figure v-scroll-reveal>
            <router-link class="project-link" to="/project2">
              <img src="/images/work/img8.jpg">
              <p>
                Threatlevel: Midnight, part II
                <span class="year">[2018]</span>
              </p>
            </router-link>
          </figure>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Footer from "@/components/Footer.vue";
import Currently from "@/components/Currently.vue";
import VLazyImage from "v-lazy-image";

export default {
  name: "Home",
  components: {
    Currently,
    Carousel,
    VLazyImage,
    Footer
  },
  beforeCreate: function() {
    document.body.className = "home";
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    }
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
