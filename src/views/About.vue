<template>
  <main id="about">
    <section class="outer-margin intro">
      <article class="row">
        <figure class="column heading">
          <h1
            v-in-viewport.once="{ margin: '-5% 0%' }"
            :class="{ fadeOut: isHovering }"
            class="markdown title"
          >
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
            is a digital design studio and creative collaborator based in Oslo.
          </h1>
          <p class="markdown tagline" :class="{ highlight: isHovering }">
            * A moral or legal obligation a responsibility.
          </p>
        </figure>
        <figure class="column body">
          <!-- <p v-html="block.title"></p> -->
          <p class="markdown" v-html="about.introduction"></p>
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
          <h1 class="title">
            {{ about.offeringIntro }}
          </h1>
        </figure>

        <figure class="column body fade-in" v-in-viewport.once>
          <p class="body" v-html="about.offeringContent"></p>
        </figure>
      </article>
    </section>

    <section class="outer-margin people">
      <article class="row column">
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
            <h2 class="title">{{ person.name }}</h2>
            <p>{{ person.title }}</p>
            <p>
              <a :href="'callto:' + person.phoneNumber">
                {{ person.phoneNumber }}
              </a>
            </p>
            <p>
              <a :href="'mailto:' + person.email">
                {{ person.email }}
              </a>
            </p>
          </div>
        </figure>
        <figure class="column network fade-in" v-in-viewport.once>
          <p class="markdown title" v-html="about.networkTitle"></p>
          <p class="markdown body" v-html="about.networkBody"></p>
        </figure>
      </article>
    </section>

    <section class="outer-margin carousel">
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

    <section class="outer-margin marquee fade-in" v-in-viewport.once>
      <article class="row">
        <figure class="column fade-in" v-in-viewport.once>
          <div class="body heading">
            <p class="body title">{{ about.ffTitle }}</p>
            <div class="body" v-html="about.ffBody"></div>
          </div>
        </figure>
        <figure class="inline-marquee">
          <ul class="inner heading">
            <li v-for="asset in about.ffMarqueeOne" :key="asset.id">
              <h1 class="title">{{ asset.name }}</h1>
            </li>
          </ul>

          <ul class="inner right heading">
            <li v-for="asset in about.ffMarqueeTwo" :key="asset.id">
              <h1 class="title">{{ asset.name }}</h1>
            </li>
          </ul>
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
      about: {
        introduction: "",
        image: {
          url: ""
        },
        offeringIntro: "",
        offeringsContent: "",
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
      ${imgix({ url: url, w: 640, q: 60 })} 640w,
      ${imgix({ url: url, w: 768, q: 60 })} 768w,
      ${imgix({ url: url, w: 1024, q: 80 })} 1024w,
      ${imgix({ url: url, w: 1366, q: 80 })} 1366w,
      ${imgix({ url: url, w: 1600, q: 80 })} 1600w,
      ${imgix({ url: url, w: 1920, q: 80 })} 1920w,
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
    document.body.className = "about dark";
  }
};
</script>
