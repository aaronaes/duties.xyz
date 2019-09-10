<template>
  <div id="app">
    <!-- <div class="cursor hide-for-small-only"></div> -->
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

// VH height
function calcVH() {
  $("body").innerHeight($(this).innerHeight());
}
(function($) {
  calcVH();
  $(window).on("orientationchange resize", function() {
    calcVH();
  });
})(jQuery);
</script>

<style lang="scss">
@import "./../src/assets/styles/main.scss";
</style>
