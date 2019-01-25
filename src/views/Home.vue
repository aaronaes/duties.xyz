<template>
  <main>
    <section class="row columns">
      <section class="large-8 medium-10 small-12 float-center">
        <h3>Senior designer and art-director at Netlife, working with startups, brands, cultural projects and friends, telling their stories in a large variety of formats.</h3>
      </section>
      <section class="large-8 medium-10 small-12 float-center">
        <p>
          I am an Oslo-based designer running the interdisciplinary studio known as Found. Found builds digital
          design solutions for all screens. Being committed to quality design with a human-centered approach, I aim
          to make sure that the right skills are brought to each project. At Netlife, I lead digital design
          projects together with a interdisciplinary team, focusing on creating immersive digital experiences for
          all screen.
        </p>
      </section>
      <small class="large-8 medium-10 small-12 float-center">
        (In my free time, I work with startups, brands, cultural projects and friends,
        telling their stories in a large variety of formats.)
      </small>
    </section>
    <section class="row columns" @click="next()">
      <flickity ref="flickity" :options="flickityOptions">
        <img class="carousel-cell" src="./../assets/images/work/img1.jpg">
        <img class="carousel-cell" src="./../assets/images/work/img4.jpg">
        <img class="carousel-cell" src="./../assets/images/work/img6.jpg">
      </flickity>
    </section>

    <section class="row">
      <div class="image-row" style="display: flex; padding-bottom: 2vw;">
        <div class="columns large-4 left" style="flex:0.77;">
          <img src="./../assets/images/work/test-2.jpg">
        </div>
        <div class="columns large-8 left" style="flex:1.765;">
          <img src="./../assets/images/work/img4.jpg">
        </div>
      </div>

      <div class="image-row" style="display: flex;">
        <div class="columns large-8 left" style="flex:1.765;">
          <img src="./../assets/images/work/img9.jpg">
        </div>
        <div class="columns large-4 left" style="flex:0.765;">
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

    <section class="row">
      <div class="columns large-4 medium-4 small-12 left">
        <b>Title</b>
        <p>Second sentence, 20XX</p>
        <a href="#">Link to project &rarr;</a>
      </div>
      <div class="columns large-4 medium-4 small-12 left">
        <b>Title</b>
        <p>Second sentence, 20XX</p>
        <a href="#">Link to project &rarr;</a>
      </div>
      <div class="columns large-4 medium-4 small-12 left">
        <b>Title</b>
        <p>Second sentence, 20XX</p>
        <a href="#">Link to project &rarr;</a>
      </div>
    </section>

    <section class="large-8 medium-10 small-12 float-center">
      <transition name="slide" mode="out-in" appear>
        <router-link class="left" to="/projects/project2">View casestudy &rarr;</router-link>
      </transition>
    </section>

    <section class="row" style="display: flex;">
      <div class="large-4 columns" style="align-self: flex-end;">
        <img src="//www.fillmurray.com/300/350" style=" padding-bottom: 1em;">
        <p>Project &rarr;</p>
      </div>
      <div class="large-4 columns" style="align-self: flex-end;">
        <img src="//www.fillmurray.com/300/300" style=" padding-bottom: 1em;">
        <p>Project &rarr;</p>
      </div>
      <div class="large-4 columns" style="align-self: flex-end;">
        <img src="//www.fillmurray.com/300/380" style=" padding-bottom: 1em;">
        <p>Project &rarr;</p>
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
  }
};
</script>
