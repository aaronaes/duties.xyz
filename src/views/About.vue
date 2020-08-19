<template>
  <main id="about top">
    <Masthead :heading="heading" :copy="copy"></Masthead>

    <section class="grid-container intro">
      <figure class="grid-x grid-padding-x align-center">
        <div class="columns small-12 medium-10 large-8">
          <div class="markdown" v-html="getMarkdown(about.aboutUs)"></div>
        </div>
      </figure>
    </section>

    <section class="grid-container services">
      <figure class="grid-x grid-padding-x align-center">
        <div class="columns small-12 medium-10 large-8">
          <div v-for="block in about.services" :key="block.id">
            <h1>{{ block.title }}</h1>
            <br />
            <h2 class="markdown" v-html="getMarkdown(block.content)"></h2>
            <h3 class="markdown" v-html="getMarkdown(block.lists)"></h3>
            <h3>
              <a href="'mailto:new@duties.xyz">
                Ask us how we can help
              </a>
            </h3>
          </div>
        </div>
      </figure>
    </section>

    <section class="grid-container people">
      <figure class="grid-x grid-padding-x align-center">
        <div
          class="columns small-10 medium-5 large-5 person"
          v-for="person in about.team"
          :key="person.id"
        >
          <div class="img-wrapper" v-lazy-container="{ selector: 'img' }">
            <img
              :data-src="getUrl(person.image.url)"
              :data-srcset="getUrl(person.image.url)"
            />
          </div>
          <p>
            <span>{{ person.name }}</span>
            <span>{{ person.title }}</span>
            <span>
              <a :href="'mailto:' + person.email">
                {{ person.email }}
              </a>
            </span>
          </p>
        </div>
      </figure>
    </section>

    <section class="grid-container clientList">
      <figure class="grid-x grid-padding-x align-center">
        <h3 class="small-12 medium-10 large-8 float-left">
          A few of our friends —
        </h3>
        <marquee scrollamount="5" loop="infinite" direction="left">
          <div class="inner">
            <h1 v-for="client in about.clientList" :key="client.id">
              {{ client.name }}
            </h1>
          </div>
        </marquee>
      </figure>
    </section>

    <section class="grid-container summary">
      <figure class="grid-x grid-padding-x align-center">
        <div class="columns small-12 medium-10 large-8">
          <div class="markdown" v-html="getMarkdown(about.summary)"></div>
        </div>
        <div class="columns small-12 medium-10 large-8 footer">
          <h2 class="float-left" v-for="link in about.contact" :key="link.id">
            <a :href="link.linkUrl" target="_blank">{{ link.linkTitle }}</a>
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
        services: "",
        team: {
          image: {
            url: ""
          },
          name: "",
          title: "",
          phoneNumber: "",
          email: ""
        },
        clientList: {
          name: ""
        },
        studioImages: {
          url: ""
        },
        summary: "",
        contact: {
          linkTitle: "",
          linkURl: ""
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
              services {
                ... on BlockRecord {
                  title
                  content
                  lists
                }
              }
              team {
                image {
                  url
                }
                name
                title
                phoneNumber
                email
              }
              clientList {
                name
              }
              studioImages {
                url
              }
              summary
              contact {
                linkTitle
                linkUrl
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
      ${imgix({ url: url, w: 576 })} 576w,
      ${imgix({ url: url, w: 640 })} 640w,
      ${imgix({ url: url, w: 1024 })} 1024w,
      ${imgix({ url: url, w: 1680 })} 1680w,
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
