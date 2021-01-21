<template>
  <header class="global">
    <article>
      <figure class="nav-item heading">
        <router-link :to="{ name: 'Home' }">
          <h2 class="title" v-if="$route.name !== 'Project'">
            XYZ
            <svg
              width="300"
              height="147"
              viewBox="0 0 300 147"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M117.118 9.48168C119.33 9.48168 275.275 -8.73747 291.865 51.194C308.455 111.125 168.823 137.974 144.215 139.413C119.607 140.851 8.45477 146.605 6.51929 93.3857C4.9709 50.8104 88.4547 29.299 130.39 23.8652C160.621 21.6278 226.777 23.0981 249.561 46.8789"
                stroke="#E5594D"
                class="path"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </h2>
        </router-link>
      </figure>
      <figure class="nav-item logo heading">
        <router-link :to="{ name: 'Home' }" v-if="$route.name !== 'Project'">
          <img
            class="hide-for-small-only"
            src="/images/assets/logo.svg"
            alt="Logo"
          />
          <img
            class="show-for-small-only"
            src="/images/assets/logo-symbol.svg"
            alt="Logo"
          />
        </router-link>
      </figure>
      <figure class="nav-item heading">
        <router-link :to="{ name: 'About' }" v-if="$route.name !== 'Project'">
          <h2 class="title">
            About
          </h2>
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
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </figure>
    </article>
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
