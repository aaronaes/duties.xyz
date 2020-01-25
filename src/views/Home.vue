<template>
  <div id="home">
    <header>
      <section class="row">
        <Preview />
      </section>
    </header>

    <main id="main">
      <GL class="list-item current" />
      <Gro class="list-item" />
      <AS class="list-item" />
      <Fetch class="list-item" />
      <Humid class="list-item" />
      <Eika class="list-item" />
    </main>
    <Footer />
    <div class="toppp">
      <a href="#app">
        <p>
          &uarr;
          <span>Index</span>
        </p>
      </a>
    </div>
  </div>
</template>

<script>
//Components
import Preview from "@/components/Preview.vue";
import Footer from "@/components/Footer.vue";

//Projects
import Eika from "@/projects/eika.vue";
import Fetch from "@/projects/fetch.vue";
import GL from "@/projects/godt-levert.vue";
import Humid from "@/projects/humid.vue";
import Gro from "@/projects/gro.vue";
import AS from "@/projects/as.vue";

export default {
  name: "Home",
  components: {
    Preview,
    Eika,
    Fetch,
    GL,
    Humid,
    Gro,
    AS,
    Footer
  },
  data() {
    return {
      title: "Home",
      showMore: false
    };
  },
  beforeCreate: function() {
    document.body.className = "home";
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
