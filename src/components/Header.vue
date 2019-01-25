<template>
  <nav v-bind:class="['header']">
    <div>
      <div class="item">
        <p>Me</p>
      </div>
      <div class="menu">
        <router-link class="link" to="/">Index</router-link>
        <router-link class="link" to="/about">About</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>
