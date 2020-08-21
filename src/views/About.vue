<template>
  <main id="about top">
    <Masthead :heading="heading" :copy="copy"></Masthead>

    <section class="grid-container intro">
      <figure class="grid-x grid-padding-x align-center">
        <div class="cell large-6 medium-10 small-12">
          <div class="cell markdown" v-html="getMarkdown(about.aboutUs)"></div>
        </div>
      </figure>
    </section>

    <section class="grid-container people">
      <figure class="grid-x grid-padding-x align-center">
        <div class="cell large-4 medium-6 small-6 person">
          <div class="img-wrapper" v-lazy-container="{ selector: 'img' }">
            <img
              data-src="/images/about/Paul.jpg"
              data-srcset="/images/about/Paul@2x.jpg 2x"
              alt="Pauls face"
            />
          </div>
          <p>
            <span>Paul Conley</span>
            <span>Designer / partner</span>
            <span><a href="tel:+4796748685‬">+47 ‭967 48 685‬</a></span>
            <a href="mailto:paul@duties.xyz?subject=Hi Paul">paul@duties.xyz</a>
          </p>
        </div>

        <div class="cell large-4 medium-6 small-6 person">
          <div class="img-wrapper" v-lazy-container="{ selector: 'img' }">
            <img
              data-src="/images/about/Erling.jpg"
              data-srcset="/images/about/Erling@2x.jpg 2x"
              alt="Erlings face"
            />
          </div>
          <p>
            <span>Erling Aarønæs</span>
            <span>Designer / partner</span>
            <span><a href="tel:+4798660788">+47 986 60 788</a></span>
            <a href="mailto:erling@duties.xyz?subject=Hi Erling"
              >erling@duties.xyz</a
            >
          </p>
        </div>
      </figure>
    </section>

    <section class="grid-container clients">
      <figure class="grid-x grid-padding-x align-center">
        <div class="cell large-6 medium-10 small-12">
          <h2>
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
        </div>
      </figure>
      <figure class="grid-x grid-padding-x align-center">
        <div class="cell large-6 medium-10 small-12 footer">
          <h2 class="float-left">
            <a href="mailto:new@duties.xyz?subject=Hi there" target="_blank"
              >Email</a
            >
          </h2>
          <h2 class="float-left">
            <a class="float-left" href="//medium.com/duties-xyz" target="_blank"
              >Medium</a
            >
          </h2>
          <h2 class="float-left">
            <a
              class="float-left"
              href="//www.instagram.com/duties.xyz"
              target="_blank"
              >Instagram</a
            >
          </h2>
        </div>
      </figure>
    </section>
  </main>
</template>

<script>
import marked from "marked";
import gql from "graphql-tag";
import getData from "@/utils/getData";
import Masthead from "@/components/Masthead.vue";

export default {
  name: "About",
  async created() {
    const { data } = await getData({
      query: gql`
        query {
          about {
            aboutUs
          }
        }
      `
    });
    this.about = data.about;
  },
  data() {
    return {
      about: {
        aboutUs: ""
      }
    };
  },
  components: {
    Masthead
  },
  methods: {
    getMarkdown(content) {
      return marked(content);
    }
  },
  beforeCreate: function() {
    document.body.className = "about";
  }
};
</script>
