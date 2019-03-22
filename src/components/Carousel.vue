<template>
  <figure>
    <flickity class="carousel" ref="flickity" :options="flickityOptions">
      <img class="carousel-cell" :src="image" :key="image" v-for="image in images">
      <span class="carousel-status"></span>
    </flickity>
  </figure>
</template>

<script>
import Flickity from "vue-flickity";

export default {
  name: "Carousel",
  props: ["images"],
  components: {
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        cellSelector: ".carousel-cell",
        pageDots: false,
        prevNextButtons: false,
        draggable: false,
        pauseAutoPlayOnHover: false,
        autoPlay: 2000,
        wrapAround: true
      }
    };
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    }
  }
};
</script>