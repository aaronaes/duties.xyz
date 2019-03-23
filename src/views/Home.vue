<template>
  <div id="home">
    <header>
      <section class="row">
        <figure class="columns">
          <p>
            Erling Aarønæs
            <i style="opacity: .5;">Design Lead</i>
          </p>
          <p class="timestamp float-right">
            <span class="clock"></span>
            <span>&nbsp;&rarr;&nbsp;Oslo, NO</span>
          </p>
          <a @click="showMore = !showMore" class="toggle" :class="{ opened: showMore}">
            <p>
              <span></span>
            </p>
          </a>
          <div v-if="showMore" class="toggleBio">
            <p>I’m an Oslo-based senior designer, with over 10 years experience of creating websites, products and brands. My approach to design is working strategically with interdisciplinary teams to create sophisticated and strong products.</p>
            <br>
            <p>
              I'm 50/50 Norwegian American.
              <br>I love Figma and design systems.
              <br>I'm a nice person.
            </p>
            <br>
            <p>
              <a href="//www.linkedin.com/in/aaronaes" target="_blank">Credentials &nearr;</a>
            </p>
            <p>
              <a href="#" target="_blank">Instagram &nearr;</a>
            </p>
            <p>
              <a href="#">Business inquiry &nearr;</a>
            </p>
          </div>
          <!-- <p v-if="pageName ==='Home'">
            <span style="opacity: 0;">Erling Aarønæs</span>&nbsp;enjoys working with startups, established brands, cultural projects and good friends &horbar; telling their stories throught a large variety of formats.
          </p>-->
        </figure>
        <figure class="columns sticky">
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
