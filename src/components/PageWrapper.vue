<template>
  <div>
    <Nav :key="$route.fullPath" />
    <transition name="slide" mode="out-in">
      <slot></slot>
    </transition>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "PageWrapper",
  components: {
    Nav,
    Footer
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>