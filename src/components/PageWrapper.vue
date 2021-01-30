<template>
  <div>
    <transition name="navPop">
      <Nav />
    </transition>
    <transition name="loadPage" mode="out-in" appear>
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
