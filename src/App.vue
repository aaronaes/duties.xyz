<template>
  <div id="app">
    <PageWrapper>
      <router-view :key="$route.fullPath"></router-view>
    </PageWrapper>
  </div>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";

export default {
  name: "App",
  components: {
    PageWrapper
  },
  metaInfo() {
    return {
      title:
        "Duties.xyz — A creative partner and design studio for thoughtfully crafted products",
      meta: [
        {
          name: "description",
          content:
            "We work at the intersection of visual and functional design; focusing on brand identity design, product strategy, web and native application development plus a bit of xyz…."
        },
        {
          property: "og:title",
          content:
            "Duties.xyz — A creative partner and design studio for thoughtfully crafted products"
        },
        { property: "og:site_name", content: "Epiloge" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" }
      ]
    };
  }
};
</script>
