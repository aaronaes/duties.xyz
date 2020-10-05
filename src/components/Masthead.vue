<template>
  <section class="grid-container masthead-block">
    <figure class="grid-x grid-padding-x align-center">
      <div class="cell small-12 medium-8 large-6">
        <h1>
          A creative partner and design studio for thoughtfully crafted
          products.
        </h1>
      </div>
    </figure>
  </section>
</template>

<script>
export default {
  name: "Masthead",
  data() {
    return {
      showContent: false
    };
  },
  methods: {
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  }
};
</script>
<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
