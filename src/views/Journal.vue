<template>
  <main>
    <section class="row">
      <div class="columns small-12 medium-10 large-6 float-left">
        <h2>An unordered collections of non-organized work and unfinished ideas. Some of these concepts were used, and some were not. Either way, I liked them enough to save them.</h2>
        <h2>
          <router-link to="//www.instagram.com/foundoslo" target="_blank">Instagram —></router-link>
        </h2>
      </div>
      <figure class="columns small-12 medium-6 large-6 float-left">
        <img src="http://www.fillmurray.com/g/600/800">
      </figure>
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
  beforeCreate: function() {
    document.body.className = "journal";
  }
};
</script>
