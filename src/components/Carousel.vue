<template>
  <!-- CAROUSEL -->
  <div>
    <section class="grid-container carousel-title">
      <div class="grid-x">
        <h3>Some news &searr;</h3>
      </div>
    </section>
    <section class="carousel grid-container fluid">
      <Hooper
        class="carousel-inner"
        :settings="hooperSettings"
        ref="carousel"
        @slide="updateCarousel"
      >
        <Slide>
          <img
            src="/images/banner/banner-01.jpg"
            srcset="/images/banner/banner-01@2x.jpg 2x"
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
            src="/images/banner/banner-03.jpg"
            srcset="/images/banner/banner-03@2x.jpg 2x"
          />
          <p>
            <span>News</span>
            We are revamping the way teams and stakeholders organise events for
            Samspill.
          </p>
        </Slide>
        <Slide>
          <img
            src="/images/banner/banner-02.jpg"
            srcset="/images/banner/banner-02@2x.jpg 2x"
          />
          <p>
            <span>News</span>
            We are excited to continue collaborating with
            <a href="//www.godtlevert.no" target="_blank">Godtlevert</a>.
          </p>
        </Slide>
        <Slide class="large-8">
          <img
            src="/images/banner/banner-04.jpg"
            srcset="/images/banner/banner-04@2x.jpg 2x"
          />
          <p>
            <span>Studio</span>
            See what duties we can help your business with
            <router-link to="/about">here</router-link>.
          </p>
        </Slide>
        <Slide>
          <img
            src="/images/banner/banner-05.jpg"
            srcset="/images/banner/banner-05@2x.jpg 2x"
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
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "Carousel",
  components: {
    Hooper,
    Slide
  },
  data() {
    return {
      title: "Carousel",
      carouselData: 0,
      hooperSettings: {
        transition: 200,
        wheelControl: false,
        breakpoints: {
          1200: {
            itemsToShow: 4.25
          },
          768: {
            itemsToShow: 3.25
          },
          576: {
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
  }
};
</script>
