<template>
  <div>
    <Nav />
    <main id="page">
      <transition name="fade" mode="out-in">
        <slot></slot>
      </transition>
    </main>
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
