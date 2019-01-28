<template>
  <main v-bind:class="['about']">
    <section class="row columns">
      <section class="resume">
        <h1>Senior designer and art-director at Netlife, working with startups, brands, cultural projects and friends, telling their stories in a large variety of formats.</h1>
        <p class="large-8 medium-10">
          I am an Oslo-based designer running the interdisciplinary studio known as Found. Found builds digital
          design solutions for all screens. Being committed to quality design with a human-centered approach, I aim
          to make sure that the right skills are brought to each project. At Netlife, I lead digital design
          projects together with a interdisciplinary team, focusing on creating immersive digital experiences for
          all screen.
        </p>
      </section>
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
  beforeCreate: function() {
    document.body.className = "about";
  }
};
</script>
