<template>
  <main class="project">
    <section class="row">
      <!-- Intro -->
      <div class="columns small-12 medium-10 large-8 float-left">
        <h1>{{ title }}</h1>
        <h2>Senior designer and art-director working with startups, brands, cultural projects and friends, telling their stories in a large variety of formats. I collect my unused ideas and concepts in my Journal and you can read my Bio here.</h2>
        <p>Senior designer and art-director working with startups, brands, cultural projects and friends, telling their stories in a large variety of formats. I collect my unused ideas and concepts in my Journal and you can read my Bio here.</p>
      </div>
    </section>
    <section style="background-color: beige;">
      <div class="row">
        <div class="columns">
          <figure>
            <img src="./../assets/images/work/img6.jpg">
            <p>Visjon / misjon</p>
          </figure>
        </div>
      </div>
    </section>
    <section class="feed">
      <div class="row">
        <div class="columns">
          <figure>
            <img src="./../assets/images/work/img6.jpg">
            <p>Dildofest 2025, website coming soon.</p>
          </figure>

          <figure>
            <img src="./../assets/images/work/img7.jpg">
          </figure>

          <figure>
            <img src="./../assets/images/work/img9.jpg">
          </figure>

          <figure>
            <img src="./../assets/images/work/img4.jpg">
          </figure>
        </div>

        <div class="columns float-left">
          <div class="small-12 medium-4 large-4 float-left">
            <p>Fuckhole-projects, available now!</p>
          </div>
          <div class="small-12 medium-8 large-8 float-right">
            <figure>
              <img src="./../assets/images/work/img8.jpg">
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="row">
      <div class="columns">
        <h1>{{ title }}</h1>
        <p>This is a small but fancy project.</p>
      </div>
      <div class="image-block">
        <figure class="columns small-12 medium-12 large-12">
          <img src="./../assets/images/work/img9.jpg">
        </figure>
        <figure class="columns small-12 medium-12 large-offset-1 large-4 float-left">
          <img src="./../assets/images/work/test-2.jpg">
          <p class="float-left">Gilligans Island</p>
          <p>
            <strong class="float-right">2018</strong>
          </p>
        </figure>
        <figure class="columns small-12 medium-12 large-5 float-left">
          <img src="./../assets/images/work/test-2.jpg">
        </figure>
      </div>
    </section>
    <section class="row">
      <div class="columns">
        <a class="toggle">See full case &darr;</a>
      </div>
      <div class="columns expanded">
        <img src="./../assets/images/work/img7.jpg">
        <img src="./../assets/images/work/img7.jpg">
        <img src="./../assets/images/work/img7.jpg">
      </div>
    </section>

    <section class="row">
      <div class="flex-block">
        <figure class="portrait">
          <img src="./../assets/images/work/test-2.jpg">
        </figure>
        <figure class="landscape">
          <img src="./../assets/images/work/img4.jpg">
        </figure>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
body.about {
  background-color: bisque;
  color: #242424;
}
</style>

<script>
export default {
  name: "Project1",
  data() {
    return {
      title: "Godt Levert"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  },
  beforeCreate: function() {
    document.body.className = "project1";
  }
};
</script>
