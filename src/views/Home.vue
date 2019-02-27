<template>
  <main id="home">
    <Intro/>
    <!-- Feed -->
    <section class="feed">
      <div class="row flex-block">
        <div class="columns small-12 medium-6 large-6 float-left project">
          <figure v-scroll-reveal>
            <img src="https://images.unsplash.com/photo-1534237187820-7177d9bbd685">
            <router-link class="project-link" to="/project1">
              <h2>{{ this.$route.name }}</h2>
            </router-link>
          </figure>
        </div>
      </div>

      <div class="row flex-block">
        <div class="columns project">
          <figure v-scroll-reveal>
            <img src="./../assets/images/work/img8.jpg">
            <br>
            <router-link class="project-link" to="/project2">Threatlevel: Midnight, part II</router-link>
            <span style="font-size: .5em; vertical-align: super; padding-left: 20px;">[2018]</span>
          </figure>
        </div>
      </div>

      <div class="row flex-block">
        <div class="columns project">
          <figure v-scroll-reveal>
            <v-lazy-image src="http://lorempixel.com/400/400/"/>
            <router-link class="project-link" to="/project2">Threatlevel: Midnight, part III</router-link>
          </figure>
        </div>
      </div>

      <div class="row flex-block" v-scroll-reveal>
        <div class="columns project">
          <figure class="square">
            <img src="https://images.unsplash.com/photo-1534237187820-7177d9bbd685">
            <router-link class="project-link" to="/project2">Threatlevel: Midnight, part II</router-link>
          </figure>
        </div>
        <div class="columns project">
          <figure class="portrait">
            <img src="./../assets/images/work/test-2.jpg">
            <router-link class="project-link" to="/project2">Threatlevel: Midnight, part II</router-link>
          </figure>
        </div>
      </div>

      <div class="row flex-block">
        <div class="columns small-12 medium-6 large-4 float-left project">
          <figure v-scroll-reveal>
            <img src="./../assets/images/work/img8.jpg">
            <router-link class="project-link" to="/project2">Threatlevel: Midnight, part II</router-link>
          </figure>
        </div>
        <div class="columns small-12 medium-6 large-4 float-left project">
          <figure v-scroll-reveal>
            <img src="./../assets/images/work/img11.jpg">
            <router-link class="project-link" to="/project2">Threatlevel: Midnight, part II</router-link>
          </figure>
        </div>
      </div>
    </section>

    <section>
      <div class="row">
        <Carousel
          class="large-6 medium-6 small-12 float-center"
          :images="[
          require('@/assets/images/pikk/mobile-img01.png'),
          require('@/assets/images/pikk/mobile-img02.png'),
          require('@/assets/images/pikk/mobile-img03.png'),
          require('@/assets/images/pikk/mobile-img04.png'),
          require('@/assets/images/pikk/mobile-img05.png')
          ]"
        />
      </div>
    </section>

    <section>
      <div class="row">
        <Carousel
          class="columns"
          :images="[
          require('@/assets/images/work/img3.jpg'),
          require('@/assets/images/work/img9.jpg'),
          require('@/assets/images/work/img8.jpg'),
          require('@/assets/images/work/img10.jpg')
          ]"
        />
      </div>
    </section>

    <!-- Resume -->
    <section id="readMore" class="resume">
      <div class="row">
        <div class="small-12 medium-6 large-6 float-left">
          <div class="columns">
            <p>A design partner for your team.</p>
            <br>
            <p>
              Located in Oslo,
              <span style="color: red;">@aaronaes</span> is a design consultant working closely together with clients & agencies to create relevant digital experiences. I work strategically with my partners to create sophisticated and strong solutions.
            </p>
          </div>
        </div>
        <div class="small-12 medium-3 large-3 float-left">
          <div class="columns">
            <p>Select clients</p>
            <br>
            <p>Godt Levert</p>
            <p>OBOS</p>
            <p>Sparebanken Sogn og Fjordane</p>
            <p>Proviant</p>
            <p>Virke</p>
            <p>Eika Gruppen</p>
            <p>Coop</p>
            <p>Amedia Group</p>
            <p>Humid</p>
            <p>Brygg Magasin</p>
            <p>Holzweiler</p>
          </div>
        </div>
        <div class="small-12 medium-3 large-3 float-left">
          <div class="columns">
            <p>Book a meet</p>
            <br>
            <p>
              <a class="clearfix" href="#">Email me</a>
              <a class="clearfix" href="#">+47 986 60 677</a>
              <a class="clearfix" href="#">Instagram</a>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  </main>
</template>

<script>
import Intro from "@/components/Intro.vue";
import Carousel from "@/components/Carousel.vue";
import Footer from "@/components/Footer.vue";
import VLazyImage from "v-lazy-image";

export default {
  name: "Home",
  components: {
    Intro,
    Carousel,
    VLazyImage,
    Footer
  },
  beforeCreate: function() {
    document.body.className = "home";
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    }
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
