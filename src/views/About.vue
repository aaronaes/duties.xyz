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
        <div
          class="cell large-4 medium-6 small-6 person"
          v-for="(person, i) in about.team"
          :key="i"
        >
          <div class="cell large-4 medium-6 small-6 person">
            <div class="img-wrapper" v-lazy-container="{ selector: 'img' }">
              <img
                :data-src="getUrl(person.image.url)"
                :data-srcset="getUrl(person.image.url)"
              />
            </div>
            <p>
              <span>{{ person.name }}</span>
              <span>{{ person.title }}</span>
              <span
                ><a :href="'tel:' + person.phoneNumber">
                  {{ person.phoneNumber }}</a
                >
              </span>
              <span>
                <a :href="'mailto:' + person.email">
                  {{ person.email }}
                </a>
              </span>
            </p>
          </div>
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
import gql from "graphql-tag";
import getData from "@/utils/getData";
import marked from "marked";
import imgix from "@/utils/imgix";
import Masthead from "@/components/Masthead.vue";

export default {
  name: "About",
  components: {
    Masthead
  },
  async created() {
    this.about = await this.getAbout();
  },
  data() {
    return {
      about: {
        aboutUs: "",
        team: {
          person: {
            image: "",
            name: "",
            title: "",
            phoneNumber: "",
            email: ""
          }
        }
      }
    };
  },
  methods: {
    async getAbout() {
      const { data } = await getData({
        query: gql`
          query {
            about {
              aboutUs
              team {
                person {
                  image {
                    url
                  }
                  name
                  title
                  phoneNumber
                  email
                }
              }
            }
          }
        `
      });
      return data.about;
    },
    getMarkdown(content) {
      return marked(content);
    },
    getUrl(url) {
      return imgix({ url: url });
    },
    getSrcSet(url) {
      return `
      ${imgix({ url: url, w: 2048 })} 2048w,
      ${imgix({ url: url, w: 1024 })} 1024w,
      ${imgix({ url: url, w: 640 })} 640w,
      ${imgix({ url: url, w: 576 })} 576w,
      `;
    },
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    }
  },
  beforeCreate: function() {
    document.body.className = "about";
  }
};
</script>
