<template>
  <main>
    <section class="intro">
      <div class="row">
        <h1
          class="columns small-12 medium-10 large-8"
        >An unordered collections of non-organized work and unfinished ideas.</h1>
      </div>
    </section>

    <section class="feed">
      <div class="row">
        <div class="columns project">
          <figure class="small-12 medium-10 large-10 float-left">
            <img src="http://www.fillmurray.com/g/1200/800">
          </figure>
        </div>
      </div>
    </section>

    <section class="row image-block">
      <figure class="columns small-12 medium-6 large-6 float-left">
        <img src="http://www.fillmurray.com/g/600/600">
        <p>Unused concept for a client.</p>
      </figure>
      <figure class="columns small-12 medium-offset-1 medium-5 large-offset-2 large-4 float-left">
        <img src="http://www.fillmurray.com/g/300/300">
        <p>Unused concept for a client.</p>
      </figure>
    </section>
  </main>
</template>

<script>
export default {
  name: "Journal",
  components: {},
  beforeCreate: function() {
    document.body.className = "journal";
  }
};
</script>

<style lang="scss">
body.journal {
  background-color: darkolivegreen;
  color: white !important;

  a {
    color: white !important;

    &:hover {
      border-bottom: 2px solid white;
    }
  }
}
</style>

