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
    <section>
      <div class="row">
        <div class="columns">
          <figure>
            <img src="./../assets/images/work/img6.jpg">
            <small>-> This was created with the surgical digital precision of a tweezer.</small>
          </figure>

          <figure>
            <img src="./../assets/images/work/img6.jpg">
          </figure>

          <figure class="columns">
            <div class="small-12 medium-8 large-6 float-center">
              <h2>Senior designer and art-director working with startups, brands, cultural projects and friends, telling their stories in a large variety of formats.</h2>
            </div>
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

        <div class="float-left">
          <p class="columns small-12 medium-4 large-4 float-left">Fuckhole-projects, available now!</p>
          <figure class="columns small-12 medium-8 large-8 float-right">
            <img src="./../assets/images/work/img8.jpg">
          </figure>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Dildo",
  data() {
    return {
      title: "Dildo"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss">
body.project2 {
  background-color: rgb(240, 219, 219);
  color: #212121;
}
</style>