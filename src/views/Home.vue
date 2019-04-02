<template>
  <div id="home">
    <header>
      <section class="row">
        <figure class="columns">
          <p>
            Erling
            <span class="hide-for-small-only">Aarønæs</span>
            <span class="show-for-small-only">A</span>
          </p>
          <p>
            <small class="timestamp float-right">
              It's
              <span class="hide-for-small-only">currently&nbsp;</span>
              <span style="border-bottom: 2px solid;" class="local-time" data-tz="Europe/Oslo"></span>
              <span class="hide-for-small-only">&nbsp;in Oslo, Norway</span>
              <span class="show-for-small-only">&nbsp;in Oslo</span>
            </small>
          </p>
          <a @click="showMore = !showMore" class="toggle" :class="{ opened: showMore}">
            <p class="bio">
              <span></span>
            </p>
          </a>
          <div v-if="showMore" class="toggleBio">
            <p>I’m an Oslo-based product designer, with over 10 years experience of creating user-friendly products, apps and webites for humans. My ideal approach to a new project is working closely with interdisciplinary teams to create and build sophisticated and solid products that work really well.</p>
            <p>Yes, I am currently available for projects :)</p>
            <p>
              <a href="//www.linkedin.com/in/aaronaes" target="_blank">Credentials &nearr;</a>
              <br>
              <a href="https://www.instagram.com/aaronaes.studio/" target="_blank">Instagram &nearr;</a>
              <br>
              <a href="mailto:hello@aaronaes.studio?subject=Hi">Contact me &nearr;</a>
            </p>
          </div>
        </figure>
        <figure class="columns btm" :class="{ fuk: showMore}">
          <p>
            Select work
            <span class="super">[ 2009 - 19 ]</span>
          </p>
          <p class="clients">
            <a href="#gl" class="gl">
              Godt Levert
              <span></span>
            </a>
            <a href="#gro" class="gro">
              Gro Grønt
              <span></span>
            </a>
            <a href="#as" class="as">
              Authentic Scandinavia
              <span></span>
            </a>
            <a href="#fetch" class="fetch">
              Fetch
              <span></span>
            </a>
            <a href="#humid" class="humid">
              Humid Magazine
              <span></span>
            </a>
            <a href="#eika" class="eika">
              Eika Gruppen
              <span></span>
            </a>
          </p>
        </figure>
      </section>
    </header>

    <main id="main">
      <GL/>
      <Gro/>
      <AS/>
      <Fetch/>
      <Humid/>
      <Eika/>
    </main>
    <a href="#home" class="toppp">&uarr;</a>
  </div>
</template>

<script>
import Eika from "@/projects/eika.vue";
import Fetch from "@/projects/fetch.vue";
import GL from "@/projects/godt-levert.vue";
import Humid from "@/projects/humid.vue";
import Gro from "@/projects/gro.vue";
import AS from "@/projects/as.vue";

export default {
  name: "Home",
  components: {
    Eika,
    Fetch,
    GL,
    Humid,
    Gro,
    AS
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