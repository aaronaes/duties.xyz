<template>
  <main id="about top">
    <Masthead :heading="heading" :copy="copy"></Masthead>

    <section class="grid-container intro">
      <figure class="grid-x">
        <div class="cell large-8 medium-10 small-12">
          <h3>Studio &searr;</h3>
          <h3>
            Established in 2020, Duties is an independent digital design studio
            based in Oslo. We believe it’s our duty as designers to provide the
            world with thoughtfully designed products that are both functional,
            accessible and visually beautiful.
          </h3>
          <h3>
            We work at the intersection of visual and functional design;
            focusing on brand identity design, product strategy, web and native
            application development plus a bit of xyz…
          </h3>
        </div>
      </figure>
    </section>

    <section class="people">
      <figure class="grid-x">
        <div class="grid-container">
          <div class="cell">
            <h3>People &searr;</h3>
          </div>
          <div class="grid-x grid-margin-x">
            <div class="cell large-4 medium-4 small-6 person">
              <div class="img-wrapper" v-lazy-container="{ selector: 'img' }">
                <img
                  data-src="/images/about/Paul.jpg"
                  data-srcset="/images/about/Paul@2x.jpg 2x"
                  alt="Paul Polite v2.0"
                />
              </div>
              <p>
                <span>Paul Conley</span>
                <span>Designer / partner</span>
                <span><a href="#">+47 ‭967 48 685‬</a></span>
                <a href="#">paul@duties.xyz</a>
              </p>
            </div>

            <div class="cell large-4 medium-4 small-6 person">
              <div class="img-wrapper" v-lazy-container="{ selector: 'img' }">
                <img
                  data-src="/images/about/Erling.jpg"
                  data-srcset="/images/about/Erling@2x.jpg 2x"
                  alt="Unge Aarønæs"
                />
              </div>
              <p>
                <span>Erling Aarønæs</span>
                <span>Designer / partner</span>
                <span><a href="#">+47 986 60 788</a></span>
                <a href="#">erling@duties.xyz</a>
              </p>
            </div>
          </div>
        </div>
      </figure>

      <figure class="grid-container client">
        <div class="grid-x">
          <div class="cell large-8 medium-10 small-12">
            <h3>
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
            </h3>
          </div>
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
