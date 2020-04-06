<template>
  <main id="home">
    <!-- Masthead -->
    <Masthead :heading="heading"></Masthead>

    <!-- Project List -->
    <ProjectList />

    <!-- News -->
    <Ongoing />
    <!-- About -->
    <section class="grid-container clients">
      <div class="grid-x">
        <h2 class="section-title">
          Clients & friends &searr;
        </h2>
      </div>
      <figure class="grid-x client-grid">
        <div class="grid-x large-8 medium-12 small-12">
          <h2 class="cell shrink">Godtlevert</h2>
          <h2 class="cell shrink">Orkla</h2>
          <h2 class="cell shrink">Nutrilett</h2>
          <h2 class="cell shrink">Eika Gruppen</h2>
          <h2 class="cell shrink">Brygg Magasin</h2>
          <h2 class="cell shrink">Humid</h2>
          <h2 class="cell shrink">WDV</h2>
          <h2 class="cell shrink">Aftenposten</h2>
          <h2 class="cell shrink">Schibsted Digital</h2>
          <h2 class="cell shrink">Holzweiler Store</h2>
          <h2 class="cell shrink">Kjentfolk</h2>
          <h2 class="cell shrink">Bielke & Yang</h2>
          <h2 class="cell shrink">Mathias Fossum</h2>
          <h2 class="cell shrink">Amedia</h2>
          <h2 class="cell shrink">Berg-Hansen</h2>
        </div>
      </figure>
      <figure class="grid-x">
        <h2 class="cell large-8 medium-12 small-12">
          We have worked with a range of excellent companies and people
          throughout the years and we’re always looking for new collaborators.
        </h2>
        <h2 class="cell large-8 medium-10 small-12">
          To get in touch, email us at
          <a href="mailto:new@duties.xyz?subject=Hi there" target="_blank"
            >new@duties.xyz</a
          >
        </h2>
      </figure>
    </section>
  </main>
</template>

<script>
import Masthead from "@/components/Masthead.vue";
import ProjectList from "@/components/ProjectList.vue";
import Ongoing from "@/components/Ongoing.vue";

export default {
  name: "Home",
  components: {
    Masthead,
    ProjectList,
    Ongoing
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
