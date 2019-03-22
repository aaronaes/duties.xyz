<template>
  <nav id="top">
    <section class="row">
      <figure class="columns small-12 medium-6 large-6">
        <div class="menu float-left">
          <p>
            <router-link to="/about" v-if="pageName ==='Home'">Erling Aarønæs</router-link>
            <router-link to="/" mode="out-in" v-if="pageName ==='About'">Erling Aarønæs</router-link>
            <router-link v-if="pageName === 'Journal'" to="/journal">&nbsp; &rarr; &nbsp;Journal</router-link>
            <span
              v-if="pageName !== 'About' && pageName !== 'Home' && pageName !== 'Journal'"
            >&nbsp; &rarr; &nbsp;{{ this.pageName }}</span>
          </p>
        </div>
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