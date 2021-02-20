<template>
  <div>
    <Nav />
    <transition name="loadPage">
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
