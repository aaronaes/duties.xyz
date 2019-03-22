<template>
  <div id="app">
    <!-- <div class="cursor"></div> -->
    <PageWrapper>
      <router-view :key="$route.fullPath"></router-view>
    </PageWrapper>
  </div>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";

export default {
  name: "App",
  components: {
    PageWrapper
  }
};
</script>

<style lang="scss">
@import "./../src/assets/styles/main.scss";
</style>
