<template>
  <main id="home" class="slide" data-color="about">
    <Masthead :heading="heading" :copy="copy"></Masthead>

    <section class="grid-container intro">
      <figure class="grid-x grid-margin-x">
        <h3 class="cell large-8 medium-10">
          Established in 2020, Duties is an independent digital design studio
          based in Oslo. We believe it’s our duty as designers to provide the
          world with thoughtfully designed products that are both functional,
          accessible and visually beautiful.
        </h3>
        <h3 class="cell large-8 medium-10">
          We work at the intersection of visual and functional design; focusing
          on brand identity design, product strategy, web and native application
          development plus a bit of xyz…
        </h3>
        <h3 class="cell large-8 medium-10">
          We have worked with a range of excellent companies and people
          throughout the years such as: Godtlevert, Orkla, SSF, Authentic
          Scandinavia, Fetch, Eika Gruppen, Brygg Magasin, Humid Mag, Well
          Dressed Vandals, Aftenposten, Holzweiler, Mathias Fossum, Amedia and
          Berg-Hansen Reisebureau.
        </h3>
      </figure>
    </section>

    <section class="grid-container people slide">
      <figure
        class="grid-x grid-margin-x"
        v-lazy-container="{ selector: 'img' }"
      >
        <div class="cell large-3 medium-6 small-12 person">
          <div class="img-wrapper">
            <img
              data-src="/images/about/Paul.jpg"
              data-srcset="/images/about/Paul@2x.jpg 2x"
              alt="Paul Polite v2.0"
            />
          </div>
          <p>Paul Conley</p>
          <p>
            <a href="#">paul@duties.xyz</a>
          </p>
        </div>

        <div class="cell large-3 medium-6 small-12 person">
          <div class="img-wrapper erling">
            <img
              data-src="/images/about/Erling.jpg"
              data-srcset="/images/about/Erling@2x.jpg 2x"
              alt="Unge Aarønæs"
            />
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
        <h2 class="cell large-8 medium-10">
          When we are off-duty you can
          <a href="//instagram.com/duties.xyz" target="_blank"
            >find us creating</a
          >
          experimental typefaces, dabbling in photography and curating our
          <a
            href="https://open.spotify.com/playlist/39NC0tBJ0FrrqBD8Tj156m?si=HS5YF10BQfmFFN6VHJtYOQ"
            target="_blank"
            >studio playlists</a
          >.
        </h2>
      </figure>
      <figure class="grid-x">
        <div class="image-grid" v-lazy-container="{ selector: 'img' }">
          <img
            class="item"
            data-src="/images/offduty/offduty-01.jpg"
            data-srcset="/images/offduty/offduty-01@2x.jpg 2x"
            alt=""
          />
          <img
            class="item"
            data-src="/images/offduty/offduty-02.jpg"
            data-srcset="/images/offduty/offduty-02@2x.jpg 2x"
            alt=""
          />
          <img
            class="item"
            data-src="/images/offduty/offduty-03.jpg"
            data-srcset="/images/offduty/offduty-03@2x.jpg 2x"
            alt=""
          />
          <img
            class="item"
            data-src="/images/offduty/offduty-06.jpg"
            data-srcset="/images/offduty/offduty-06@2x.jpg 2x"
            alt=""
          />
          <img
            class="item"
            data-src="/images/offduty/offduty-04.jpg"
            data-srcset="/images/offduty/offduty-04@2x.jpg 2x"
            alt=""
          />
          <img
            class="item"
            data-src="/images/offduty/offduty-05.jpg"
            data-srcset="/images/offduty/offduty-05@2x.jpg 2x"
            alt=""
          />
          <img
            class="item"
            data-src="/images/offduty/offduty-09.jpg"
            data-srcset="/images/offduty/offduty-09@2x.jpg 2x"
            alt=""
          />
          <img
            class="item"
            data-src="/images/offduty/offduty-07.jpg"
            data-srcset="/images/offduty/offduty-07@2x.jpg 2x"
            alt=""
          />
          <img
            class="item"
            data-src="/images/offduty/offduty-08.jpg"
            data-srcset="/images/offduty/offduty-08@2x.jpg 2x"
            alt=""
          />
          <img
            class="item"
            data-src="/images/offduty/offduty-10.jpg"
            data-srcset="/images/offduty/offduty-10@2x.jpg 2x"
            alt=""
          />
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
      heading: "Equal parts creative partner and digital studio.",
      copy: ""
    };
  },
  beforeCreate: function() {
    document.body.className = "about";
  }
};
</script>
