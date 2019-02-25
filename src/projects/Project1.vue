<template>
  <main>
    <section class="feed">
      <div class="row">
        <div class="columns project">
          <figure>
            <img src="./../assets/images/work/img6.jpg">
          </figure>
        </div>
        <div class="columns project">
          <figure>
            <img src="./../assets/images/work/img7.jpg">
          </figure>
        </div>
        <div class="columns project">
          <figure>
            <img src="./../assets/images/work/img9.jpg">
          </figure>
        </div>
        <div class="columns project">
          <figure>
            <img src="./../assets/images/work/img4.jpg">
          </figure>
        </div>

        <div class="columns small-12 medium-11 large-10 project">
          <img src="./../assets/images/work/img8.jpg">
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
      title: "Threatlevel: Midnight"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
      return this.$route.title;
    }
  },
  beforeCreate: function() {
    document.body.className = "project1";
  }
};
</script>
