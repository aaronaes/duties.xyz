<template>
  <div>
    <Nav :key="$route.fullPath" />
    <transition name="page" mode="out-in" appear>
      <slot></slot>
    </transition>
    <transition name="bottomNav" mode="out-in" appear>
      <BottomNav :key="$route.fullPath" />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import BottomNav from "@/components/BottomNav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "PageWrapper",
  components: {
    Nav,
    BottomNav,
    Footer
  }
};
</script>
