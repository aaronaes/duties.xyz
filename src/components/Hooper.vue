<template>
  <div class="carousel">
    <Hooper class="carousel-inner" :settings="hooperSettings">
      <Slide v-for="image in images" :key="image">
        <img :src="image.url" />
        <div class="tag">
          <p class="title">{{ image.title }} —</p>
          <p class="subtitle">{{ image.subtitle }}</p>
        </div>
      </Slide>
    </Hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "Hooper",
  components: {
    Hooper,
    Slide
  },
  props: {
    images: {
      type: Array
    }
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 3,
        autoPlay: true,
        hoverPause: true,
        touchDrag: true,
        transition: 300
      }
    };
  }
};
</script>
