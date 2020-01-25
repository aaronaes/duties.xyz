<template>
  <nav id="top">
    <section class="row">
      <figure class="columns">
        <router-link to="/">
          <div class="logo">
            <h3>Aa—studio</h3>
            <h3>Thoughts & Process</h3>
          </div>
        </router-link>

        <button>
          <router-link to="/about" v-if="pageName === 'Home'">
            <p>Read</p>
          </router-link>
          <router-link to="/" v-if="pageName === 'About'">
            <p>Projects</p>
          </router-link>
        </button>
      </figure>
    </section>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
