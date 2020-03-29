<template>
  <main id="home">
    <!-- Masthead -->
    <Masthead :heading="heading"></Masthead>
    <!-- Carousel -->
    <Carousel />
    <!-- Project List -->
    <ProjectList />
    <!-- About -->
    <section class="grid-container clients">
      <figure class="grid-x grid-margin-x">
        <h3 class="cell large-8 medium-12 small-12 clients">
          We have worked with a range of excellent companies and people
          throughout the years such as: Godtlevert, Orkla, SSF, Authentic
          Scandinavia, Fetch, Eika Gruppen, Brygg Magasin, Humid Mag, Well
          Dressed Vandals, Aftenposten, Holzweiler, Mathias Fossum, Amedia and
          Berg-Hansen Reisebureau.n, Holzweiler, Mathias Fossum, Amedia and
          Berg-Hansen Reisebureau.
        </h3>
      </figure>
    </section>
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
