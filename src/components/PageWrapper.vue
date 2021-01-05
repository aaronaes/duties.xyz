<template>
  <div>
    <transition name="nav" mode="out-in" appear>
      <Nav />
    </transition>
    <transition name="page" mode="out-in">
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
