<template>
  <section class="content-block masthead-block">
    <article class="block-inner">
      <figure>
        <h1 class="markdown">
          We believe it’s our duty as designers to provide the world with
          thoughtfully designed products that are both functional, accessible
          and visually beautiful.
        </h1>
      </figure>
    </article>

    <article class="hide">
      <figure>
        <h1>
          A creative partner and design studio for thoughtfully crafted
          products.
        </h1>
      </figure>
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
