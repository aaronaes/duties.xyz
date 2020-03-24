<template>
  <nav>
    <section class="grid-container">
      <figure class="grid-x grid-margin-x globalNav">
        <router-link class="cell shrink" to="/">
          <p class="logo">Duties<span></span></p>
        </router-link>

        <router-link
          class="cell shrink burger"
          to="/about"
          v-if="this.$route.name === 'Home'"
        >
          <svg
            class="burger"
            width="14"
            height="46"
            viewBox="0 0 14 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.77419 0C3.16129 0 0 3.26667 0 7C0 10.7333 3.16129 13.5333 6.77419 14H7.22581C10.8387 14 14 10.7333 14 7C14 3.26667 10.8387 0 7.22581 0H6.77419ZM6.77419 32C3.16129 32 0 35.2667 0 39C0 42.7333 3.16129 46 6.77419 46H7.22581C10.8387 46 14 42.7333 14 39C14 35.2667 10.8387 32 7.22581 32H6.77419Z"
              fill="#17171C"
            />
          </svg>
        </router-link>
        <router-link
          class="cell shrink burger"
          to="/"
          v-if="this.$route.name === 'About'"
        >
          <svg
            class="burger"
            width="14"
            height="46"
            viewBox="0 0 14 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.77419 0C3.16129 0 0 3.26667 0 7C0 10.7333 3.16129 13.5333 6.77419 14H7.22581C10.8387 14 14 10.7333 14 7C14 3.26667 10.8387 0 7.22581 0H6.77419ZM6.77419 32C3.16129 32 0 35.2667 0 39C0 42.7333 3.16129 46 6.77419 46H7.22581C10.8387 46 14 42.7333 14 39C14 35.2667 10.8387 32 7.22581 32H6.77419Z"
              fill="#17171C"
            />
          </svg>
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
