<template>
  <main id="home">
    <!-- HERO -->
    <Masthead :heading="heading"></Masthead>

    <!-- CAROUSEL -->
    <section class="carousel grid-container">
      <Hooper
        class="carousel-inner"
        :settings="hooperSettings"
        ref="carousel"
        @slide="updateCarousel"
      >
        <Slide>
          <img
            src="/images/banner/banner-01.png"
            srcset="/images/banner/banner-01@2x.png 2x"
          />
          <p>
            <span>Studio</span>
            A growing selection of audio goodness from us to you.
            <a
              href="https://open.spotify.com/playlist/39NC0tBJ0FrrqBD8Tj156m?si=HS5YF10BQfmFFN6VHJtYOQ"
              target="_blank"
              >Listen here</a
            >.
          </p>
        </Slide>
        <Slide>
          <img
            src="/images/banner/banner-02.png"
            srcset="/images/banner/banner-02@2x.png 2x"
          />
          <p>
            <span>News</span>
            We are excited to continue collaborating with
            <a href="//www.godtlevert.no" target="_blank">Godtlevert</a>.
          </p>
        </Slide>
        <Slide>
          <img
            src="/images/banner/banner-03.png"
            srcset="/images/banner/banner-03@2x.png 2x"
          />
          <p>
            <span>News</span>
            We are revamping the way teams and stakeholders organise events for
            Samspill.
          </p>
        </Slide>
        <Slide class="large">
          <img
            src="/images/banner/banner-04.png"
            srcset="/images/banner/banner-04@2x.png 2x"
          />
          <p>
            <span>Studio</span>
            See what duties we can help your business with
            <router-link to="/about">here</router-link>.
          </p>
        </Slide>
        <Slide>
          <img
            src="/images/banner/banner-05.png"
            srcset="/images/banner/banner-05@2x.png 2x"
          />
          <p>
            We’re always sharing past and present work alongside other fun
            things on
            <a href="//www.instagram.com/duties.xyz" target="_blank"
              >Instagram</a
            >.
          </p>
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
        breakpoints: {
          1220: {
            itemsToShow: 4.25
          },
          768: {
            itemsToShow: 3.25
          },
          375: {
            itemsToShow: 2.25
          },
          0: {
            itemsToShow: 1.25
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
