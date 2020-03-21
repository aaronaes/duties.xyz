<template>
  <div>
    <header>
      <section class="row">
        <figure class="columns">
          <h1>
            An unordered collections of discarded work and unfinished ideas.
            Some of these were used, and some were rejected. i also have
            <router-link to="//www.instagram.com/foundoslo" target="_blank">
              instagram
              <span class="super">&nearr;</span>
            </router-link>
          </h1>
        </figure>
      </section>
    </header>
    <main class="row">
      <section class="float-left">
        <figure class="columns small-12 medium-6 large-6">
          <img src="/images/journal/01.png" />
        </figure>
        <figure class="columns small-12 medium-6 large-6">
          <img src="/images/journal/02.png" />
        </figure>
        <figure class="columns small-12 medium-6 large-6">
          <img src="/images/journal/02.png" />
        </figure>
        <figure class="columns small-12 medium-6 large-6">
          <img src="/images/journal/01.png" />
        </figure>
        <figure class="columns small-12 medium-6 large-6">
          <img src="/images/journal/01.png" />
        </figure>
        <figure class="columns small-12 medium-6 large-6">
          <img src="/images/journal/01.png" />
        </figure>
        <figure class="columns small-12 medium-6 large-6">
          <img src="/images/journal/01.png" />
        </figure>
        <figure class="columns small-12 medium-6 large-6">
          <img src="/images/journal/01.png" />
        </figure>
        <figure class="columns small-12 medium-6 large-6">
          <img src="/images/journal/01.png" />
        </figure>
      </section>
    </main>
    <footer>
      <div class="columns small-12 medium-10 large-10 float-left">
        <p>Explore my work</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Journal",
  beforeCreate: function() {
    document.body.className = "journal";
  }
};
</script>
