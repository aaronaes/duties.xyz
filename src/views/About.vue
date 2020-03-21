<template>
  <main id="home" class="slide" data-color="about">
    <Masthead :heading="heading" :copy="copy"></Masthead>

    <section class="grid-container full bleed">
      <figure v-lazy-container="{ selector: 'img' }">
        <img
          data-src="/images/about/banner/about-1.png"
          data-srcset="/images/about/banner/about-1@2x.png 2x"
        />
        <img
          data-src="/images/about/banner/about-2.png"
          data-srcset="/images/about/banner/about-2@2x.png 2x"
        />
        <img
          data-src="/images/about/banner/about-3.png"
          data-srcset="/images/about/banner/about-3@2x.png 2x"
        />
        <img
          data-src="/images/about/banner/about-4.png"
          data-srcset="/images/about/banner/about-4@2x.png 2x"
        />
      </figure>
    </section>
    <section class="grid-container intro">
      <figure class="grid-x grid-margin-x">
        <h3 class="cell large-10">
          Established in 2020, Duties is an independent digital design studio
          based in Oslo. We believe it’s our duty as designers to provide the
          world with thoughtfully designed products that are both functional,
          accessible and visually beautiful.
        </h3>
        <h3 class="cell large-10">
          We work at the intersection of visual and functional design; focusing
          on brand identity design, product strategy, web and native application
          development plus a bit of xyz...
        </h3>
        <h3 class="cell large-10">
          We have worked with a range of excellent companies and people
          throughout the years such as: Godtlevert, Orkla, Eika Gruppen, Amedia,
          Berg-Hansen, Brygg Magasin, Humid Mag, Well Dressed Vandals,
          Aftenposten, SSF, Authentic Scandinavia, Fetch, Holzweiler, Mathias
          Fossum.
        </h3>
      </figure>
    </section>

    <section class="grid-container people slide">
      <figure class="grid-x grid-margin-x">
        <div class="cell large-3 medium-6 auto person">
          <div class="img-wrapper">
            <img src="/images/about/Paul.png" alt="Paul Polite v2.0" />
          </div>
          <p>Paul Conley</p>
          <p>
            <a href="#">paul@duties.xyz</a>
          </p>
        </div>

        <div class="cell large-3 medium-6 auto person">
          <div class="img-wrapper erling">
            <img src="/images/about/Erling.png" alt="Unge Erling 3000" />
          </div>
          <p>Erling Aarønæs</p>
          <p>
            <a href="#">erling@duties.xyz</a>
          </p>
        </div>
      </figure>
    </section>

    <section class="grid-container offduty slide" data-color="offduty">
      <figure class="grid-x">
        <div class="image-grid">
          <img class="item" src="/images/offduty/offduty-01.png" alt="" />
          <img class="item" src="/images/offduty/offduty-02.png" alt="" />
          <img class="item" src="/images/offduty/offduty-03.png" alt="" />
          <img class="item" src="/images/offduty/offduty-06.png" alt="" />
          <img class="item" src="/images/offduty/offduty-04.png" alt="" />
          <img class="item" src="/images/offduty/offduty-05.png" alt="" />
          <img class="item" src="/images/offduty/offduty-09.png" alt="" />
          <img class="item" src="/images/offduty/offduty-07.png" alt="" />
          <img class="item" src="/images/offduty/offduty-08.png" alt="" />
          <img class="item" src="/images/offduty/offduty-10.png" alt="" />
        </div>
      </figure>
    </section>
  </main>
</template>

<script>
import Masthead from "@/components/Masthead.vue";

export default {
  name: "About",
  components: {
    Masthead
  },
  data() {
    return {
      //heading: "Equal parts creative partner and digital studio."
    };
  },
  beforeCreate: function() {
    document.body.className = "about";
  }
};
</script>
