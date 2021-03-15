<template>
  <main id="about">
    <section class="outer-margin page-header intro">
      <article class="row first">
        <figure class="column header">
          <h2
            v-in-viewport.once="{ margin: '-5% 0%' }"
            :class="{ fadeOut: isHovering }"
            class="markdown"
          >
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
            <span>A moral or legal obligation a responsibility.</span>
          </p>
        </figure>
      </article>
      <article class="row hide">
        <figure class="column body">
          <h3 class="markdown" v-html="about.introduction"></h3>
        </figure>
      </article>
    </section>

    <section class="outer-margin image fade-in" v-in-viewport.once>
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
      <article class="row column">
        <figure class="column header">
          <h1 class="markdown title hide" v-html="about.offeringIntro"></h1>
          <h3>Services & Capabilities</h3>
        </figure>

        <figure class="column main">
          <h3>
            We can help you with <span class="number">1</span> designing your
            next app, <span class="number">2</span> enhancing user experience,
            <span class="number">3</span>
            writing engaging microcopy, <span class="number">4</span> creating a
            website that converts or <span class="number">5</span> defining your
            brand position.
          </h3>
          <p class="body markdown hide" v-html="about.offeringContent"></p>

          <div class="body">
            <div class="legend">
              <p>Capabilites</p>
              <p>
                <span class="number">1</span>
                <span class="caption">Product design</span>
              </p>
              <p>
                <span class="number">2</span>
                <span class="caption">UX</span>
              </p>
              <p>
                <span class="number">3</span>
                <span class="caption">Content</span>
              </p>
              <p>
                <span class="number">4</span>
                <span class="caption">Strategy</span>
              </p>
              <p>
                <span class="number">5</span>
                <span class="caption">Branding</span>
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
        <figure class="person" v-for="person in about.team" :key="person.id">
          <div class="image">
            <img
              :src="getUrl(person.image.url)"
              :srcset="getUrl(person.image.url)"
            />
          </div>
          <div>
            <h3 class="title">{{ person.name }}</h3>
            <p>
              {{ person.title }}
            </p>
            <p>
              <a :href="'mailto:' + person.email">
                {{ person.email }}
              </a>
            </p>
          </div>
        </figure>
        <figure class="body">
          <p class="markdown" v-html="about.networkBody"></p>
        </figure>
      </article>
    </section>

    <intersect
      :threshold="[0.2, 0.2]"
      :root="main"
      @enter="addBodyClass"
      @leave="removeBodyClass"
    >
      <section class="outer-margin clientOverview">
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
            <p>
              You can see the work we have done
              <router-link :to="{ name: 'Projects' }">here</router-link>.
            </p>
          </figure>
        </article>
      </section>
    </intersect>
  </main>
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
    addBodyClass() {
      document.body.classList.add("dark");
    },
    removeBodyClass() {
      document.body.classList.remove("dark");
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
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
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
