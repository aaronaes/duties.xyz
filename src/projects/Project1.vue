<template>
  <main>
    <nav v-bind:class="['header']">
      <div class="row">
        <div class="float-left">
          <div class="columns">
            <router-link href="/" to="/">@aaronaes</router-link>
            <div v-if="showThis">
              <p>+ {{data.productTitle}}</p>
            </div>
          </div>
        </div>
        <div class="float-right">
          <div class="columns">
            <router-link style="padding-right: 30px;" class="link float-left" to="/">Projects</router-link>
            <router-link class="link float-left" to="/about">Information</router-link>
          </div>
        </div>
      </div>
    </nav>

    <section class="row test">
      <div class="large-12 columns">
        <img src="./../assets/images/work/img9.jpg">
        <p>Project</p>
      </div>
      <div class="large-12 columns">
        <img src="./../assets/images/work/img9.jpg">
        <p>Project</p>
      </div>
      <div class="large-12 columns">
        <img src="./../assets/images/work/img9.jpg">
        <p>Project</p>
      </div>
      <div class="large-12 columns">
        <img src="./../assets/images/work/img9.jpg">
        <p>Project</p>
      </div>
      <div class="large-12 columns">
        <img src="./../assets/images/work/img9.jpg">
        <p>Project</p>
      </div>
      <div class="large-12 columns">
        <img src="./../assets/images/work/img9.jpg">
        <p>Project</p>
      </div>
      <div class="large-12 columns">
        <img src="./../assets/images/work/img9.jpg">
        <p>Project</p>
      </div>
    </section>
  </main>
</template>

<script>
import Flickity from "vue-flickity";

export default {
  name: "Project1",
  components: {
    Flickity
  },
  data() {
    return {
      title: "Home",
      year: [
        {
          productTitle: "2018"
        }
      ],
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
  beforeCreate: function() {
    document.body.className = "project1";
  }
};
</script>
