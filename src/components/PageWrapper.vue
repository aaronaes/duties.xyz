<template>
  <div>
    <transition name="fade" mode="out-in">
      <Nav :key="$route.fullPath"/>
    </transition>
    <slot></slot>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Home from "@/views/Home.vue";

export default {
  name: "PageWrapper",
  components: {
    Nav
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>