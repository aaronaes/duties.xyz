<template>
  <main id="home">
    <!-- Masthead -->
    <Masthead :heading="heading"></Masthead>

    <!-- Project List -->
    <ProjectList />
    <!-- About -->
    <section class="grid-container clients">
      <figure class="grid-x">
        <h3 class="section-title">
          Clients & friends &searr;
        </h3>
      </figure>
      <figure class="grid-x client-grid">
        <h3 class="cell large-3 shrink">Godtlevert</h3>
        <h3 class="cell large-3 shrink">Adams Matkasse</h3>
        <h3 class="cell large-3 shrink">Orkla</h3>
        <h3 class="cell large-3 shrink">Nutrilett</h3>
        <h3 class="cell large-3 shrink">Eika Gruppen</h3>
        <h3 class="cell large-3 shrink">Brygg Magasin</h3>
        <h3 class="cell large-3 shrink">Humid</h3>
        <h3 class="cell large-3 shrink">WDV</h3>
        <h3 class="cell large-3 shrink">Aftenposten</h3>
        <h3 class="cell large-3 shrink">Schibsted Digital</h3>
        <h3 class="cell large-3 shrink">Holzweiler Store</h3>
        <h3 class="cell large-3 shrink">Kjentfolk</h3>
        <h3 class="cell large-3 shrink">Bielke & Yang</h3>
        <h3 class="cell large-3 shrink">Mathias Fossum</h3>
        <h3 class="cell large-3 shrink">Amedia</h3>
        <h3 class="cell large-3 shrink">Berg-Hansen</h3>
      </figure>
      <figure class="grid-x grid-margin-x">
        <h3 class="cell large-8 medium-10 small-12">
          We have worked with a range of excellent companies and people
          throughout the years annd we’re always looking for new collaborators.
        </h3>
        <h3 class="cell large-8 medium-10 small-12">
          To get in touch, email us at
          <a href="mailto:new@duties.xyz?subject=Hi there" target="_blank"
            >new@duties.xyz</a
          >.
        </h3>
      </figure>
    </section>

    <!-- Carousel -->
    <Carousel />
  </main>
</template>

<script>
import Masthead from "@/components/Masthead.vue";
import Carousel from "@/components/Carousel.vue";
import ProjectList from "@/components/ProjectList.vue";

export default {
  name: "Home",
  components: {
    Masthead,
    ProjectList,
    Carousel
  },
  data() {
    return {
      title: "Home",
      heading:
        "A creative partner and design studio for thoughtfully crafted products.",
      carouselData: 0,
      hooperSettings: {
        transition: 500,
        wheelControl: false,
        trimWhiteSpace: false,
        breakpoints: {
          1220: {
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
  },
  currentRouteName() {
    return this.$route.name;
  },
  beforeCreate: function() {
    document.body.className = "home";
  }
};
</script>
