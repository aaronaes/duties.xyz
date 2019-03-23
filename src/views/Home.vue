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
            <span class="clock"></span>
            <span class="hide-for-small-only">&nbsp;&rarr;&nbsp;Oslo, NO</span>
          </p>
          <a @click="showMore = !showMore" class="toggle" :class="{ opened: showMore}">
            <p>
              <span></span>
            </p>
          </a>
          <div v-if="showMore" class="toggleBio">
            <div class="large-6 float-left">
              <p>I’m an Oslo-based senior designer, with over 10 years experience of creating websites, products and brands. My approach to design is working strategically with interdisciplinary teams to create sophisticated and strong products.</p>
              <br>
              <p>
                I'm 50/50 Norwegian American.
                <br>I love Figma and design systems.
                <br>I'm a nice person.
              </p>
              <p>
                <a href="//www.linkedin.com/in/aaronaes" target="_blank">Credentials &nearr;</a>
                <br>
                <a href="#" target="_blank">Instagram &nearr;</a>
                <br>
                <a href="#">Business inquiry &nearr;</a>
              </p>
            </div>
            <div class="large-6 float-left" style="padding-left: 2.5vw;">
              <!-- <p>Through my career, I've had the pleasure to work closely with a large variety of clients.</p> -->
              <small
                style="text-transform: uppercase; opacity: .5; font-weight: bold; letter-spacing:2px; padding-bottom: 20px;"
              >Client list</small>
              <p
                style="max-width: 400px;"
              >Fetch / Aftenposten / Schibsted / Anthon B Nilsen / Godt Levert / Eika Gruppen / Amedia Group / Graphiq / Bielke & Yang / OBOS / Coop / Sparebanken Sogn & Fjordane / Posten Norge / Mathias Fossum</p>
            </div>
          </div>
        </figure>
        <figure class="columns btm">
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
            <a href="#">Humid Magazine</a>
          </p>
        </figure>
      </section>
    </header>

    <main id="main">
      <Fetch/>
      <GL/>
      <Eika/>
    </main>
    <a href="#home" class="toppp">&uarr;</a>
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

// Moment
$("span.clock");

function update() {
  $("span.clock").html(moment().format("LT"));
}
setInterval(update, 100);
</script>
