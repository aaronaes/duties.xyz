<template>
  <div>
    <Header/>
    <div id="app">
      <transition name="slide" mode="out-in" appear>
        <router-view/>
      </transition>
      <!-- <Footer/> -->
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "./../src/assets/styles/main.scss";
</style>
