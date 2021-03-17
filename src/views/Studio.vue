<template>
  <div id="content">
    <section class="outer-margin section header-pad">
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
              Duties<strong>*</strong>
            </span>
            we help our clients and friends with website design, apps, UX, brand
            identities and a bit of XYZ.
          </h2>
          <p class="tagline" :class="{ highlight: isHovering }">
            <span class="icon" :class="{ highlight: isHovering }">*</span>
            <span>A moral or legal obligation; a responsibility.</span>
          </p>
        </figure>
      </article>
      <article class="row hide">
        <figure class="column body">
          <h3 class="markdown" v-html="about.introduction"></h3>
        </figure>
      </article>
    </section>

    <section class="outer-margin image">
      <article class="row">
        <figure class="column image">
          <img
            :src="getUrl(about.image.url)"
            :srcset="getSrcSet(about.image.url)"
          />
        </figure>
      </article>
    </section>

    <section class="outer-margin services">
      <article class="row">
        <figure class="header">
          <h3>Services & Capabilities</h3>
        </figure>

        <figure class="column main">
          <h3 class="number">
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
                <span>➀</span>
                <span class="caption">UX</span>
              </p>
              <p class="number">
                <span>➁</span>
                <span class="caption">Apps</span>
              </p>
              <p class="number">
                <span>➂</span>
                <span class="caption">Websites</span>
              </p>
              <p class="number">
                <span>➃</span>
                <span class="caption">Branding</span>
              </p>
              <p class="number">
                <span>➄</span>
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

    <section class="outer-margin people">
      <article class="row">
        <figure class="header">
          <h3>Team & Network</h3>
        </figure>
        <div class="team">
          <figure class="person" v-for="person in about.team" :key="person.id">
            <div class="image">
              <img
                :src="getUrl(person.image.url)"
                :srcset="getUrl(person.image.url)"
              />
            </div>
            <div>
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

    <intersect
      :threshold="[0.5]"
      :root="main"
      @enter="addIntersectClass"
      @leave="removeIntersectClass"
    >
      <section class="outer-margin client-overview">
        <article class="row">
          <figure class="header">
            <h3>Our clients & friends</h3>
          </figure>
          <figure class="body">
            <h3>
              We have been lucky enough to work with a variety of ambitious
              companies and talented people throughout the years.
            </h3>
            <ul>
              <li v-for="(client, i) in allClients" :key="i">
                <p>{{ client.name }}</p>
              </li>
            </ul>
            <p @click="removeIntersectClass()">
              You can see the work we have done
              <router-link :to="{ name: 'Projects' }">here</router-link>.
            </p>
          </figure>
        </article>
      </section>
    </intersect>
  </div>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";
import marked from "marked";
import Intersect from "vue-intersect";

export default {
  name: "About",
  async created() {
    this.about = await this.getAbout();
    this.allClients = await this.getAllClients();
  },
  components: {
    Intersect
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
              }
              team {
                _modelApiKey
                image {
                  url
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
      ${imgix({ url: url, w: 640, q: 50 })} 640w,
      ${imgix({ url: url, w: 768, q: 50 })} 768w,
      ${imgix({ url: url, w: 1024, q: 60 })} 1024w,
      ${imgix({ url: url, w: 1366, q: 60 })} 1366w,
      ${imgix({ url: url, w: 1600, q: 70 })} 1600w,
      ${imgix({ url: url, w: 1920, q: 70 })} 1920w,
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
