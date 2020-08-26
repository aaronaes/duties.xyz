<template>
  <div>
    <Nav :key="$route.fullPath" />
    <transition name="global" mode="in-out">
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
  }
};
</script>
