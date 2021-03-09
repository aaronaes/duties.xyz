<template>
  <main id="about">
    <section class="outer-margin intro">
      <article class="row first">
        <figure class="column header">
          <h3
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
          </h3>
          <p class="markdown tagline" :class="{ highlight: isHovering }">
            * A moral or legal obligation a responsibility.
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
        <figure class="column heading fade-in" v-in-viewport.once>
          <h1 class="markdown title hide" v-html="about.offeringIntro"></h1>
          <h1 class="markdown title big outlined">Services</h1>
        </figure>

        <figure class="column body fade-in" v-in-viewport.once>
          <h3>
            We can help you with <span class="number">1</span> designing your
            next app, <span class="number">2</span> enhancing user experience,
            <span class="number">3</span>
            writing engaging microcopy, <span class="number">4</span> creating a
            website that converts or <span class="number">5</span> defining your
            brand position.
          </h3>
          <p class="body markdown hide" v-html="about.offeringContent"></p>
        </figure>

        <figure class="column legend fade-in" v-in-viewport.once>
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
        </figure>
      </article>
    </section>

    <section class="outer-margin people">
      <article class="row">
        <figure class="heading title fade-in" v-in-viewport.once>
          <h1 class="markdown title big outlined">Team</h1>
        </figure>
        <figure
          class="column header hide-for-small-only fade-in"
          v-in-viewport.once
        >
          <h3 class="markdown title" v-html="about.networkTitle"></h3>
          <p class="markdown body " v-html="about.networkBody"></p>
        </figure>
        <figure
          class="column person fade-in"
          v-in-viewport.once
          v-for="person in about.team"
          :key="person.id"
        >
          <div class="image">
            <img
              :src="getUrl(person.image.url)"
              :srcset="getUrl(person.image.url)"
            />
          </div>
          <div class="heading">
            <h3>{{ person.name }}</h3>
            <p>
              <small>{{ person.title }}</small>
            </p>
            <p>
              <a :href="'mailto:' + person.email">
                <small>{{ person.email }}</small>
              </a>
            </p>
          </div>
        </figure>
        <figure
          class="column body show-for-small-only fade-in"
          v-in-viewport.once
        >
          <h3 class="markdown title" v-html="about.networkTitle"></h3>
          <p class="markdown body" v-html="about.networkBody"></p>
        </figure>
      </article>
    </section>

    <section class="outer-margin clients hide">
      <article class="row">
        <figure class="column header">
          <h2>
            We have been lucky enough to work with a variety of excellent
            companies and people throughout the years, like NBX, 🍕Domino's
            Pizza, 🌀Psynapse, 🍜Food Society, 🥗Godtlevert and more.
          </h2>
        </figure>
        <figure class="column body hide">
          <div class="body">
            <h3 class="markdown" v-html="about.ffBody"></h3>
          </div>
        </figure>
        <figure class="column list">
          <div class="heading" v-if="showLess">
            <h3
              class="pill"
              v-for="asset in about.ffMarqueeOne.slice(0, 9)"
              :key="asset.id"
            >
              {{ asset.name }}
            </h3>
            <h3 class="pill" @click="showLess = false">
              <span class="arrow">+</span>
            </h3>
          </div>
          <div class="heading" v-else>
            <h3
              class="pill"
              v-for="asset in about.ffMarqueeOne"
              :key="asset.id"
            >
              {{ asset.name }}
            </h3>
            <h3 class="pill" @click="showLess = true">
              <span class="arrow">–</span>
            </h3>
          </div>
        </figure>
      </article>
    </section>

    <section class="outer-margin carousel hide">
      <article class="row">
        <figure class="column carousel-inner">
          <swiper
            ref="mySwiper"
            :options="swiperOptions"
            :auto-update="true"
            :auto-destroy="true"
          >
            <swiper-slide v-for="asset in about.gallery" :key="asset.id">
              <div class="img-container">
                <img :src="getUrl(asset.url)" :srcset="getSrcSet(asset.url)" />
              </div>
            </swiper-slide>
          </swiper>
          <div class="carousel-button-next"></div>
          <div class="carousel-button-prev"></div>
        </figure>
      </article>
      <article class="row pagination">
        <figure class="column">
          <div class="body">
            <p class="title">(we have some pretty cool friends...)</p>
          </div>
        </figure>
        <figure class="column">
          <p class=" title carousel-pagination"></p>
        </figure>
      </article>
    </section>

    <section class="outer-margin marquee fade-in hide" v-in-viewport.once>
      <article class="row">
        <figure class="column fade-in" v-in-viewport.once>
          <div class="body heading">
            <p class="body title">{{ about.ffTitle }}</p>
            <div class="body" v-html="about.ffBody"></div>
          </div>
        </figure>
        <figure class="inline-marquee left">
          <div class="title inner first heading">
            <h1
              class="first"
              v-for="asset in about.ffMarqueeOne"
              :key="asset.id"
            >
              {{ asset.name }}
            </h1>
          </div>
          <div class="title inner last heading">
            <h1
              class="first"
              v-for="asset in about.ffMarqueeOne"
              :key="asset.id"
            >
              {{ asset.name }}
            </h1>
          </div>
        </figure>
        <figure class="inline-marquee right">
          <div class="title inner first heading">
            <h1 v-for="asset in about.ffMarqueeTwo" :key="asset.id">
              {{ asset.name }}
            </h1>
          </div>
          <div class="title inner last heading">
            <h1 v-for="asset in about.ffMarqueeTwo" :key="asset.id">
              {{ asset.name }}
            </h1>
          </div>
        </figure>
      </article>
    </section>

    <Footer />
  </main>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";
import marked from "marked";
import Footer from "@/components/Footer.vue";

export default {
  name: "About",
  async created() {
    this.about = await this.getAbout();
  },
  components: {
    Footer
  },
  data() {
    return {
      isHovering: false,
      showLess: true,
      about: {
        introduction: "",
        image: {
          url: ""
        },
        offeringIntro: "",
        offeringsContent: "",
        serviceList: {
          listTitle: ""
        },
        team: {
          name: "",
          title: "",
          phoneNumber: "",
          email: "",
          image: {
            url: ""
          }
        },
        networkTitle: "",
        networkBody: "",
        gallery: {
          url: ""
        },
        ffTitle: "",
        ffBody: "",
        ffMarqueeOne: {
          name: ""
        },
        ffMarqueeTwo: {
          name: ""
        }
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
  },
  beforeCreate: function() {
    document.body.className = "about";
  }
};
</script>
