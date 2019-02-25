<template>
  <footer class="row" v-if="this.$route.name === 'Home'">
    <div class="columns small-12 medium-3 large-3 float-left">
      <p>&copy; It's my stuff.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
