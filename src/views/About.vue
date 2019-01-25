<template>
  <main v-bind:class="['about']">
    <section class="row columns">
      <section class="large-6 medium-9 small-12 float-center">
        <h3>Senior designer and art-director at Netlife, working with startups, brands, cultural projects and friends, telling their stories in a large variety of formats.</h3>
      </section>
      <section class="large-6 medium-9 small-12 float-center">
        <p>
          I am an Oslo-based designer running the interdisciplinary studio known as Found. Found builds digital
          design solutions for all screens. Being committed to quality design with a human-centered approach, I aim
          to make sure that the right skills are brought to each project. At Netlife, I lead digital design
          projects together with a interdisciplinary team, focusing on creating immersive digital experiences for
          all screen.
        </p>
      </section>
      <small class="large-6 medium-9 small-12 float-center">
        (In my free time, I work with startups, brands, cultural projects and friends,
        telling their stories in a large variety of formats.)
      </small>
    </section>
    <section class="row columns" @click="next()">
      <flickity ref="flickity" :options="flickityOptions">
        <img class="carousel-cell" src="./../assets/images/work/img1.jpg">
        <img class="carousel-cell" src="./../assets/images/work/img4.jpg">
        <img class="carousel-cell" src="./../assets/images/work/img6.jpg">
      </flickity>
    </section>
  </main>
</template>

<script>
import Flickity from "vue-flickity";

export default {
  name: "About",
  components: {
    Flickity
  },

  data() {
    return {
      flickityOptions: {
        pageDots: false,
        prevNextButtons: false,
        setGallerySize: false,
        draggable: false,
        wrapAround: true,
        autoPlay: 5000
      }
    };
  },

  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  },
  mounted() {
    this.toggleBodyClass("addClass", "dark");
  },
  destroyed() {
    this.toggleBodyClass("removeClass", "dark");
  }
};
</script>
