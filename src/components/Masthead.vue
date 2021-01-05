<template>
  <section class="masthead-block">
    <article>
      <h1>
        A creative partner and design studio for thoughtfully crafted products.
      </h1>
    </article>
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
