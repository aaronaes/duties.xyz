<template>
  <div>
    <Nav />
    <transition name="loadPage" mode="out-in" appear>
      <slot></slot>
    </transition>
    <Footer />
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
  }
};
</script>
