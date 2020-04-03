<template>
  <section class="grid-container bottomNav">
    <figure class="grid-x grid-margin-x">
      <router-link to="/about" class="cell" v-if="this.$route.name === 'Home'">
        <h1>Check out the studio <span class="arrow">&rarr;</span></h1>
      </router-link>

      <router-link to="/" class="cell" v-if="this.$route.name === 'About'">
        <h1>Check out the work <span class="arrow">&rarr;</span></h1>
      </router-link>
    </figure>
  </section>
</template>

<script>
export default {
  name: "BottomNav"
};
</script>
