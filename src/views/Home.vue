<template>
  <div id="home">
    <header>
      <section class="row">
        <figure class="columns">
          <p v-if="pageName ==='Home'">
            <span style="opacity: 0;">Erling Aarønæs</span>
            enjoys working with startups, established brands, cultural projects and good friends &horbar; telling their stories throught a large variety of formats.
          </p>
          <p>...</p>
          <p>Recent work</p>
          <p class="clients">
            <a href="#fetch">Fetch</a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#gl">Godt Levert</a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#eika">Eika Gruppen</a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#">Sparebanken Sogn og Fjordane</a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#">Graphiq</a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#">Fetch</a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#">University of Oslo</a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#">Humid Mag</a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#">Eika Gruppen</a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#">Berg Hansen Reisebureau</a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#">Amedia</a>
          </p>
          <p>...</p>
          <p>Links</p>
          <p>
            <a href="#" target="_blank">Credentials &nearr;</a>
          </p>
          <p>
            <a href="#">Business inquiry &nearr;</a>
          </p>
          <p>
            <a href="#" target="_blank">Instagram &nearr;</a>
          </p>
        </figure>
      </section>
    </header>

    <main id="main">
      <Fetch/>
      <GL/>
      <Eika/>
    </main>
    <a href="#top" class="toppp">&uarr;</a>
  </div>
</template>

<script>
import Eika from "@/projects/eika.vue";
import Fetch from "@/projects/fetch.vue";
import GL from "@/projects/godt-levert.vue";

export default {
  name: "Home",
  components: {
    Eika,
    Fetch,
    GL
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
