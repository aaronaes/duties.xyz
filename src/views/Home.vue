<template>
  <div id="home">
    <header>
      <section class="row">
        <figure class="columns">
          <p>
            Erling
            <span class="hide-for-small-only">Aarønæs</span>
            <span class="show-for-small-only">A</span>
            <i style="opacity: .5; padding-left: 5px;">&nbsp;Design Lead</i>
          </p>
          <p class="timestamp float-right">
            <span class="local-time" data-tz="Europe/Oslo"></span>
            <!-- <span class="clock"></span> -->
            <span class="hide-for-small-only">&nbsp;&rarr;&nbsp;Oslo, NO</span>
          </p>
          <a @click="showMore = !showMore" class="toggle" :class="{ opened: showMore}">
            <p>
              <span></span>
            </p>
          </a>
          <div v-if="showMore" class="toggleBio">
            <p>I’m an Oslo-based senior designer, with over 10 years experience of creating websites, products and brands. My approach to design is working strategically with interdisciplinary teams to create sophisticated and strong products.</p>
            <p>I was born 50/50 Norwegian American, I always rely on Figma and design systems and I'm a nice guy.</p>
            <p>
              <a href="//www.linkedin.com/in/aaronaes" target="_blank">Credentials &nearr;</a>
              &nbsp;
              <a href="#" target="_blank">Instagram &nearr;</a>
              &nbsp;
              <a href="#">Business inquiry &nearr;</a>
            </p>
          </div>
        </figure>
        <figure class="columns btm">
          <p>
            Select work
            <span class="super">[ 2009 - 19 ]</span>
          </p>
          <p class="clients imagePeek">
            <a href="#fetch">
              Fetch
              <span>
                <img src="/images/work/fetch/fetch-01.png" alt="Dingo">
              </span>
            </a>
            <a href="#gl">
              Godt Levert
              <span>
                <img
                  src="https://cdn.dribbble.com/users/386883/screenshots/5470006/29102018-dribbble_2x.png"
                >
              </span>
            </a>
            <a href="#eika">Eika Gruppen</a>
            <a href="#ssf">Sparebanken Sogn og Fjordane</a>
            <a href="#">Humid Magazine</a>
          </p>
        </figure>
      </section>
    </header>

    <main id="main">
      <Fetch/>
      <GL/>
      <Eika/>
      <SSF/>
    </main>
    <a href="#home" class="toppp">&uarr;</a>
  </div>
</template>

<script>
import Eika from "@/projects/eika.vue";
import Fetch from "@/projects/fetch.vue";
import GL from "@/projects/godt-levert.vue";
import SSF from "@/projects/ssf.vue";

export default {
  name: "Home",
  components: {
    Eika,
    Fetch,
    GL,
    SSF
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
