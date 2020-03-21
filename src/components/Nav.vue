<template>
  <nav>
    <section class="grid-container">
      <figure class="grid-x grid-margin-x globalNav">
        <router-link class="cell shrink" to="/">
          <p class="logo">Duties<span></span></p>
        </router-link>

        <router-link class="cell shrink" to="/about">
          <p>
            Studio
          </p>
        </router-link>
      </figure>
    </section>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    darkMode() {
      var body = document.body;
      body.classList.toggle("darkMode");
    }
  }
};
</script>
