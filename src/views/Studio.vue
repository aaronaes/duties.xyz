<template>
  <div>
    <section class="outer-margin section intro header-pad">
      <article class="row">
        <figure class="column header">
          <h2 :class="{ fadeOut: isHovering }">
            At
            <span
              class="audio"
              ref="audioElm"
              @click.prevent="
                playSound(
                  'https://dictionary.cambridge.org/media/english/uk_pron/u/ukd/ukdus/ukdusts008.mp3'
                )
              "
              @mouseover="isHovering = true"
              @mouseout="isHovering = false"
              :class="{ highlight: isHovering }"
            >
              Duties<sup>*</sup>
            </span>
            we help our clients and friends with website design, apps, UX, brand
            identities and a bit of XYZ.
          </h2>
          <p class="tagline" :class="{ highlight: isHovering }">
            <span class="icon" :class="{ highlight: isHovering }">*</span>
            A moral or legal obligation; a responsibility.
          </p>
        </figure>
      </article>
    </section>

    <section class="outer-margin banner">
      <article class="row">
        <figure class="column media fade-in" v-in-viewport.once>
          <img
            :src="getUrl(about.image.url)"
            :srcset="getUrl(about.image.url)"
          />
        </figure>
      </article>
    </section>

    <section class="outer-margin section services">
      <article class="row">
        <figure class="header">
          <p>
            Services & Capabilities
          </p>
        </figure>

        <figure class="column main">
          <h3>
            We can help you with designing your next app<sup>1</sup>, enhancing
            user-experience<sup>2</sup>, writing engaging microcopy<sup>3</sup>,
            creating a website that converts<sup>4</sup> or defining your brand
            position<sup>5</sup>.
          </h3>
          <p class="body markdown hide" v-html="about.offeringContent"></p>

          <div class="body">
            <div class="legend hide-for-small-only">
              <p>Capabilites</p>
              <p class="number">
                <span>1</span>
                <span class="caption">Websites</span>
              </p>
              <p class="number">
                <span>2</span>
                <span class="caption">Apps</span>
              </p>
              <p class="number">
                <span>3</span>
                <span class="caption">UX</span>
              </p>
              <p class="number">
                <span>4</span>
                <span class="caption">Branding</span>
              </p>
              <p class="number">
                <span>5</span>
                <span class="caption">XYZ</span>
              </p>
            </div>
            <div class="copy">
              <p>
                We believe it’s our duty as designers to provide the world with
                thoughtfully designed products that are both functional,
                accessible and visually beautiful.
              </p>
              <p>
                Being a small independent studio enables us to advise,
                collaborate and engage with clients and creative agencies of all
                scales.
              </p>
              <p>
                Sound like a good fit?
                <a>Get in touch</a>
              </p>
            </div>
          </div>
        </figure>
      </article>
    </section>

    <section class="outer-margin section people">
      <article class="row">
        <div class="header">
          <p>
            Team & Network
          </p>
        </div>
        <div class="team">
          <figure class="person" v-for="person in about.team" :key="person.id">
            <div class="media fade" v-in-viewport.reset>
              <img
                :src="getUrl(person.image.url)"
                :srcset="getUrl(person.image.url)"
              />
            </div>

            <div class="meta">
              <h3>{{ person.name }}</h3>
              <p>
                {{ person.title }}
              </p>
              <a :href="'mailto:' + person.email">
                <p>
                  {{ person.email }}
                </p>
              </a>
            </div>
          </figure>
        </div>
        <figure class="body">
          <p class="markdown" v-html="about.networkBody"></p>
        </figure>
      </article>
    </section>

    <ClientList />
  </div>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";
import marked from "marked";
import ClientList from "@/components/ClientList.vue";

export default {
  name: "About",
  components: {
    ClientList
  },
  async created() {
    this.about = await this.getAbout();
    this.allClients = await this.getAllClients();
  },
  data() {
    return {
      isHovering: false,
      showLess: true,
      about: [],
      allClients: {
        client: []
      },
      swiperOptions: {
        speed: 200,
        loop: true,
        centeredSlides: false,
        slidesPerView: "auto",
        grabCursor: "true",
        allowTouchMove: "true",
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        pagination: {
          el: ".carousel-pagination",
          type: "fraction"
        },
        navigation: {
          nextEl: ".carousel-button-next",
          prevEl: ".carousel-button-prev"
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
              introduction
              offeringIntro
              offeringContent
              serviceList {
                listTitle
              }
              image {
                url
                width
                height
                responsiveImage {
                  aspectRatio
                  base64
                  bgColor
                }
              }
              team {
                _modelApiKey
                image {
                  url
                  width
                  height
                  responsiveImage {
                    aspectRatio
                    base64
                    bgColor
                  }
                }
                name
                title
                phoneNumber
                email
              }
              networkTitle
              networkBody
              gallery {
                url
                width
                height
                responsiveImage {
                  aspectRatio
                  base64
                  bgColor
                }
              }
              ffTitle
              ffBody
              ffMarqueeOne {
                name
              }
              ffMarqueeTwo {
                name
              }
            }
          }
        `
      });
      return data.about;
    },
    async getAllClients() {
      const { data } = await getData({
        query: gql`
          query {
            allClients(orderBy: name_ASC) {
              name
            }
          }
        `
      });
      return data.allClients;
    },
    addIntersectClass() {
      document.body.classList.add("darkmode");
    },
    removeIntersectClass() {
      document.body.classList.remove("darkmode");
    },
    getMarkdown(content) {
      return marked(content);
    },
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    getUrl(url) {
      return imgix({ url: url });
    },
    getSrcSet(url) {
      return `
      ${imgix({ url: url, w: 640, q: 30 })} 640w,
        ${imgix({ url: url, w: 768, q: 40 })} 768w,
        ${imgix({ url: url, w: 1024, q: 50 })} 1024w,
        ${imgix({ url: url, w: 1366, q: 60 })} 1366w,
        ${imgix({ url: url, w: 1600, q: 60 })} 1600w,
        ${imgix({ url: url, w: 1920, q: 70 })} 1920w
      `;
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    pageName() {
      return this.$route.name;
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  }
};
</script>
