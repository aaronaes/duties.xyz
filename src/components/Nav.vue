<template>
  <header class="outer-margin global">
    <article class="row">
      <figure class="column nav-item heading">
        <router-link :to="{ name: 'Home' }">
          <mark>
            <svg
              width="300"
              height="147"
              viewBox="0 0 300 147"
              fill="none"
              class="svg"
            >
              <path
                d="M117.118 9.48168C119.33 9.48168 275.275 -8.73747 291.865 51.194C308.455 111.125 168.823 137.974 144.215 139.413C119.607 140.851 8.45477 146.605 6.51929 93.3857C4.9709 50.8104 88.4547 29.299 130.39 23.8652C160.621 21.6278 226.777 23.0981 249.561 46.8789"
                stroke="#E5594D"
                class="path"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 class="title" v-if="$route.name !== 'Project'">
              XYZ
            </h3>
          </mark>
        </router-link>
      </figure>
      <figure class="column nav-item heading">
        <router-link :to="{ name: 'Home' }" v-if="$route.name !== 'Project'">
          <mark>
            <h3 class="logo hide-for-small-only">Duties:</h3>
            <svg
              width="22"
              height="70"
              viewBox="0 0 22 70"
              fill="none"
              class="svg"
            >
              <path
                d="M0 10.6018C0 4.77432 4.75482 0 10.7161 0H11.2839C17.1742 0 22 4.70411 22 10.6018C22 16.4293 17.2452 21.2036 11.2839 21.2036H10.7161C4.82579 21.2036 0 16.4293 0 10.6018Z"
              />
              <path
                d="M0 59.3982C0 53.5707 4.75482 48.7964 10.7161 48.7964H11.2839C17.1742 48.7964 22 53.5005 22 59.3982C22 65.2257 17.2452 70 11.2839 70H10.7161C4.82579 70 0 65.2257 0 59.3982Z"
              />
            </svg>
          </mark>
        </router-link>
      </figure>
      <figure class="column nav-item heading">
        <router-link :to="{ name: 'About' }" v-if="$route.name !== 'Project'">
          <mark>
            <svg
              class="svg"
              width="525"
              height="146"
              viewBox="0 0 525 146"
              fill="none"
            >
              <path
                d="M203.038 5.71637C207.038 5.71637 489.038 -13.2836 519.038 49.2164C549.038 111.716 296.538 139.716 252.038 141.216C207.538 142.716 6.53841 148.716 3.03841 93.2163C0.238414 48.8163 151.205 26.383 227.038 20.7163C281.705 18.383 401.338 19.9163 442.538 44.7163"
                stroke="#E5594D"
                class="path"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 class="title">
              About
            </h3>
          </mark>
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
