<template>
  <div>
    <transition name="fade-in" appear>
      <Nav />
      <main id="page">
        <slot></slot>
      </main>
      <Footer />
    </transition>
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
