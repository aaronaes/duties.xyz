<template>
  <div id="app">
    <PageWrapper>
      <transition name="fade-slide" mode="out-in">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
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
