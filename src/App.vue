<template>
  <div>
    <Header/>
    <div id="app">
      <transition name="slide" mode="out-in" appear>
        <router-view/>
      </transition>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss">
@import "./../src/assets/styles/main.scss";
</style>
