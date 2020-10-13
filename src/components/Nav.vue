<template>
  <header class="global">
    <nav class="align-middle">
      <div class="home-btn">
        <div class="logo">
          <router-link :to="{ name: 'Home' }">
            <svg
              class="small"
              width="10"
              height="33"
              viewBox="0 0 10 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4.92227C0 2.21665 2.16128 0 4.87096 0H5.12904C7.80646 0 10 2.18405 10 4.92227C10 7.62788 7.83872 9.84453 5.12904 9.84453H4.87096C2.19354 9.84453 0 7.62788 0 4.92227Z"
                fill="#17171C"
              />
              <path
                d="M0 27.5775C0 24.8719 2.16128 22.6553 4.87096 22.6553H5.12904C7.80646 22.6553 10 24.8393 10 27.5775C10 30.2832 7.83872 32.4998 5.12904 32.4998H4.87096C2.19354 32.4998 0 30.2832 0 27.5775Z"
                fill="#17171C"
              />
            </svg>
          </router-link>
        </div>
      </div>

      <div class="nav-item">
        <h2 v-if="this.$route.name === 'About'">
          <router-link :to="{ name: 'Home' }">
            Work

            <svg
              width="525"
              height="146"
              viewBox="0 0 525 146"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M203.038 5.71637C207.038 5.71637 489.038 -13.2836 519.038 49.2164C549.038 111.716 296.538 139.716 252.038 141.216C207.538 142.716 6.53841 148.716 3.03841 93.2163C0.238414 48.8163 151.205 26.383 227.038 20.7163C281.705 18.383 401.338 19.9163 442.538 44.7163"
                stroke="#E5594D"
                class="path"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </h2>
        <h2 v-if="this.$route.name === 'Projects'">
          <router-link :to="{ name: 'Home' }">
            Work
            <svg
              width="525"
              height="146"
              viewBox="0 0 525 146"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M203.038 5.71637C207.038 5.71637 489.038 -13.2836 519.038 49.2164C549.038 111.716 296.538 139.716 252.038 141.216C207.538 142.716 6.53841 148.716 3.03841 93.2163C0.238414 48.8163 151.205 26.383 227.038 20.7163C281.705 18.383 401.338 19.9163 442.538 44.7163"
                stroke="#E5594D"
                class="path"
                stroke-width="12"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </h2>
        <h2 v-if="this.$route.name === 'Home'">
          <router-link :to="{ name: 'About' }">
            About
            <svg
              width="525"
              height="146"
              viewBox="0 0 525 146"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M203.038 5.71637C207.038 5.71637 489.038 -13.2836 519.038 49.2164C549.038 111.716 296.538 139.716 252.038 141.216C207.538 142.716 6.53841 148.716 3.03841 93.2163C0.238414 48.8163 151.205 26.383 227.038 20.7163C281.705 18.383 401.338 19.9163 442.538 44.7163"
                stroke="#E5594D"
                class="path"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </h2>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      hover: false
    };
  }
};
</script>
