<template>
  <main id="home">
    <!-- HERO -->
    <Masthead :heading="heading"></Masthead>
    <!-- CAROUSEL -->
    <section class="carousel">
      <Hooper
        class="carousel-inner"
        :settings="hooperSettings"
        ref="carousel"
        @slide="updateCarousel"
      >
        <Slide>
          <img src="/images/banner/banner-1.png" />
          <p class="tag"><span>[WIP]</span> A new food thing</p>
        </Slide>
        <Slide>
          <img src="/images/banner/banner-2.png" />
          <p class="tag"><a href="#">Download Falafel Regular </a>↘</p>
        </Slide>
        <Slide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9MbuL7MOKsv5qOM_-i6__6oiQQJJPrXYc_nxkL891Jixe4xKI"
          />
          <p class="tag">
            We are excited to start working with Askeladden & Co on their new
            venture
          </p>
        </Slide>
        <Slide>
          <img src="/images/banner/banner-3.png" />
          <p class="tag">Title</p>
        </Slide>
        <Slide class="big">
          <img src="/images/banner/banner-4.png" />
          <p class="tag">Title</p>
        </Slide>
      </Hooper>
    </section>
    <!-- PROJECT LIST -->
    <section id="main" class="slide" data-color="light">
      <ProjectList />
    </section>
  </main>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

import Masthead from "@/components/Masthead.vue";
import ProjectList from "@/components/ProjectList.vue";

export default {
  name: "Home",
  components: {
    Masthead,
    Hooper,
    Slide,
    ProjectList
  },
  data() {
    return {
      title: "Home",
      heading:
        "A creative partner and design studio for thoughtfully crafted products.",
      carouselData: 0,
      hooperSettings: {
        transition: 300,
        wheelControl: false,
        trimWhiteSpace: false,
        breakpoints: {
          992: {
            itemsToShow: 4
          },
          768: {
            itemsToShow: 3
          },
          375: {
            itemsToShow: 2
          },
          0: {
            itemsToShow: 1
          }
        }
      }
    };
  },
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData);
    }
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    }
  },
  currentRouteName() {
    return this.$route.name;
  },
  beforeCreate: function() {
    document.body.className = "home";
  }
};
</script>
