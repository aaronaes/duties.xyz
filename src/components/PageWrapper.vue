<template>
  <div>
    <transition name="loadPage" mode="out-in">
      <Nav />
    </transition>
    <transition name="loadPage" mode="out-in">
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
