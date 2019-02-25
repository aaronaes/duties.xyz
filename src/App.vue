<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <PageWrapper>
        <router-view :key="$route.fullPath"></router-view>
      </PageWrapper>
    </transition>
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
