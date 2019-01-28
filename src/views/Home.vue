<template>
  <main>
    <section class="row columns">
      <section class="large-10 medium-11 small-12 left">
        <h1>Senior designer and art-director at Netlife, working with startups, brands, cultural projects and friends, telling their stories in a large variety of formats.</h1>
      </section>
    </section>

    <!-- <section class="row columns">
      <div @click="next()">
        <flickity ref="flickity" :options="flickityOptions">
          <img class="carousel-cell" src="./../assets/images/work/img1.jpg">
          <img class="carousel-cell" src="./../assets/images/work/img4.jpg">
          <img class="carousel-cell" src="./../assets/images/work/img6.jpg">
        </flickity>
      </div>
    </section>-->
    <section class="row project">
      <div class="image-row">
        <div class="columns left" style="flex:0.77;">
          <video autoplay muted loop>
            <source
              preload="none"
              src="http://nicolasvittori.com/assets/images/shelves-mobile-animation.mp4"
              type="video/mp4"
            >
          </video>
        </div>
        <div class="columns left" style="flex:1.765;">
          <img src="./../assets/images/work/img4.jpg">
        </div>
      </div>
      <div>
        <div class="image-row">
          <div class="large-12 columns">
            <img src="./../assets/images/work/img6.jpg">
          </div>
        </div>
        <div>
          <a href="#" class="case-toggle">See full case</a>
        </div>
      </div>
    </section>

    <!-- Non-flex -->
    <section class="row columns">
      <div class="case-content">
        <img src="./../assets/images/work/img7.jpg">
        <img src="./../assets/images/work/img7.jpg">
        <img src="./../assets/images/work/img7.jpg">
      </div>
    </section>

    <!-- Flex -->
    <section class="row">
      <div class="image-row">
        <div class="columns left" style="flex:0.77;">
          <img src="./../assets/images/work/img2.jpg">
        </div>
        <div class="columns left" style="flex:1.765;">
          <img src="./../assets/images/work/img4.jpg">
        </div>
      </div>
    </section>

    <section class="row">
      <div class="image-row">
        <div class="columns large-8" style="flex:1.765;">
          <img src="./../assets/images/work/img9.jpg">
        </div>
        <div class="columns large-4" style="flex:0.765;">
          <video autoplay muted loop>
            <source
              preload="none"
              src="http://nicolasvittori.com/assets/images/shelves-mobile-animation.mp4"
              type="video/mp4"
            >
          </video>
        </div>
      </div>
    </section>

    <section class="row image-row">
      <div class="large-8 columns" style="align-self: center;">
        <img src="./../assets/images/work/img9.jpg">
      </div>
      <div class="large-4 columns" style="align-self: center;">
        <img src="//www.fillmurray.com/320/320">
      </div>
    </section>

    <section class="row image-row">
      <div class="large-4 columns" style="align-self: center;">
        <img src="//www.fillmurray.com/250/250" style=" padding-bottom: 1em;">
        <p>Project</p>
      </div>
      <div class="large-4 columns" style="align-self: center;">
        <img src="//www.fillmurray.com/250/400" style=" padding-bottom: 1em;">
        <p>Project</p>
      </div>
      <div class="large-4 columns" style="align-self: center;">
        <img src="//www.fillmurray.com/350/300" style=" padding-bottom: 1em;">
        <p>Project</p>
      </div>
    </section>

    <section style="background-color: white; padding: 12vw 0;">
      <div class="row">
        <div class="columns large-4 medium-4 small-12 left">
          <b>Title</b>
          <p>Second sentence, 20XX</p>
          <a href="#">Link to project</a>
        </div>
        <div class="columns large-4 medium-4 small-12 left">
          <b>Title</b>
          <p>Second sentence, 20XX</p>
          <a href="#">Link to project</a>
        </div>
        <div class="columns large-4 medium-4 small-12 left">
          <b>Title</b>
          <p>Second sentence, 20XX</p>
          <a href="#">Link to project</a>
        </div>
      </div>
    </section>

    <!-- <section class="large-8 medium-10 small-12 float-center">
      <ul>
        <li>
          <a href="#" class="case-toggle">
            <h2 class="hover-text" data-image-id="cursor">Projectname, identity and digital</h2>
          </a>
          <div class="case-content">
            <img src="./../assets/images/work/img2.jpg">
          </div>
        </li>
      </ul>
    </section>-->
  </main>
</template>

<script>
import Flickity from "vue-flickity";

export default {
  name: "Home",
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
    }
  },
  beforeCreate: function() {
    document.body.className = "home";
  }
};
</script>
