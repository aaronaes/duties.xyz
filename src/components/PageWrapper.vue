<template>
  <div>
    <!-- <transition name="fade" mode="out-in">
      <Nav :key="$route.fullPath"/>
    </transition>-->
    <transition name="slide" mode="out-in">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
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