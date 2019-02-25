<template>
  <main>
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

<script>
export default {
  name: "Project2",
  data() {
    return {
      title: "Threatlevel: Midnight, part II"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  },
  beforeCreate: function() {
    document.body.className = "project2";
  }
};
</script>

<style lang="scss">
body.project2 {
  background-color: rgb(240, 219, 219);
  color: #212121;
}
</style>