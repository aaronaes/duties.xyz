<template>
  <div @click="next()">
    <flickity class="carousel" ref="flickity" :options="flickityOptions">
      <img class="carousel-cell" :src="image" :key="image" v-for="image in images">
    </flickity>
  </div>
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
        setGallerySize: false,
        draggable: false,
        wrapAround: true,
        autoPlay: 2000
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