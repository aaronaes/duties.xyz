<template>
  <div>
    <Nav />
    <transition name="page" mode="out-in">
      <main id="page">
        <slot></slot>
      </main>
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
