<template>
  <main id="about">
    <section class="outer-margin intro">
      <article class="row">
        <figure class="column heading">
          <h1
            v-in-viewport.once="{ margin: '-5% 0%' }"
            :class="{ fadeOut: isHovering }"
            class="title"
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
            is an independent digital design studio based in Oslo.
          </h1>
          <p class="tagline" :class="{ highlight: isHovering }">
            * A moral or legal obligation a responsibility.
          </p>
        </figure>
        <figure class="column body">
          <p>
            We believe it’s our duty as designers to provide the world with
            thoughtfully designed products that are both functional, accessible
            and visually beautiful.
            <span class="block" />
            We believe it’s our duty as designers to provide the world with
            thoughtfully designed products that are both functional, accessible
            and visually beautiful.
          </p>
        </figure>
      </article>
    </section>

    <section class="outer-margin image fade-in" v-in-viewport.once>
      <article class="row">
        <figure class="column image">
          <img src="/images/about/studio-03.png" />
        </figure>
      </article>
    </section>

    <section class="outer-margin services">
      <article class="row column">
        <figure class="column heading fade-in" v-in-viewport.once>
          <h1
            class="markdown title"
            v-html="getMarkdown(about.offeringIntro)"
          ></h1>
        </figure>

        <figure class="column body fade-in" v-in-viewport.once>
          <p>
            We believe it’s our duty as designers to provide the world with
            thoughtfully designed products that are both functional, accessible
            and visually beautiful.
            <span class="block"></span>
            We believe it’s our duty as designers to provide the world with
            thoughtfully designed products that are both functional, accessible
            and visually beautiful.
          </p>
          <div class="inline-link">
            <p>Sound like a good fit? <a href="#">Get wit it.</a></p>
          </div>
        </figure>
        <figure class="column link fade-in" v-in-viewport.once>
          <p>Sound like a good fit? <a href="#">Get wit it.</a></p>
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
          <div class="body heading">
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
          <div class="body">
            <p class="body title">Small team = BIG network.</p>
            <p class="body">
              We believe it’s our duty as designers to provide the world with
              thoughtfully designed products that are both functional,
              accessible and visually beautiful.
            </p>
            <p class="body">
              We believe it’s our duty as designers to provide the world with
              thoughtfully designed products that are both functional,
              accessible and visually beautiful.
            </p>

            <p>Sound like a good fit? <a href="#">Get wit it.</a></p>
          </div>
        </figure>
      </article>
    </section>

    <section class="outer-margin carousel fade-in" v-in-viewport.once>
      <article class="row section-main">
        <figure class="column carousel-inner">
          <swiper
            ref="mySwiper"
            :options="swiperOptions"
            :auto-update="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide data-caption="caption-1">
              <div class="img-container">
                <img src="/images/offduty/offduty-01@2x.jpg" />
              </div>
            </swiper-slide>
            <swiper-slide data-caption="caption-2">
              <div class="img-container">
                <img src="/images/offduty/offduty-02@2x.jpg" />
              </div>
            </swiper-slide>
            <swiper-slide data-caption="caption-3">
              <div class="img-container">
                <img src="/images/offduty/offduty-03@2x.jpg" />
              </div>
            </swiper-slide>
            <swiper-slide data-caption="caption-4">
              <div class="img-container">
                <img src="/images/offduty/offduty-04@2x.jpg" />
              </div>
            </swiper-slide>
          </swiper>
          <div
            class="carousel-button-next"
            v-bind:style="{ cursor: cursorNext }"
          ></div>
          <div
            class="carousel-button-prev"
            v-bind:style="{ cursor: cursorPrev }"
          ></div>
        </figure>
        <figure class="column pagination">
          <div class="carousel-pagination"></div>
        </figure>
      </article>
    </section>

    <section class="outer-margin marquee fade-in" v-in-viewport.once>
      <article class="row">
        <figure class="column fade-in" v-in-viewport.once>
          <div class="body heading">
            <p class="body title">Friend & family</p>
            <p class="body">
              We believe it’s our duty as designers to provide the world with
              thoughtfully designed products that are both functional,
              accessible and visually beautiful.
            </p>
            <p>Sound like a good fit? <a href="#">Get wit it.</a></p>
          </div>
        </figure>
        <figure class="inline-marquee">
          <ul class="inner heading">
            <li>
              <h1 class="title">Domino’s Pizza</h1>
            </li>
            <li>
              <h1 class="title">Feed</h1>
            </li>
            <li>
              <h1 class="title">Circle K</h1>
            </li>
            <li>
              <h1 class="title">Simplenæss</h1>
            </li>
            <li>
              <h1 class="title">Bielke & Yang</h1>
            </li>
            <li>
              <h1 class="title">Humid Mag</h1>
            </li>
          </ul>

          <ul class="inner right heading ">
            <li>
              <h1 class="title">Nutrilett</h1>
            </li>
            <li>
              <h1 class="title">Orkla</h1>
            </li>
            <li>
              <h1 class="title">Godtlevert</h1>
            </li>
            <li>
              <h1 class="title">Ogle Image</h1>
            </li>
            <li>
              <h1 class="title">Spoortz</h1>
            </li>
            <li>
              <h1 class="title">Snowmelt</h1>
            </li>
            <li>
              <h1 class="title">Psynapse</h1>
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
        aboutUs: "",
        offeringIntro: "",
        offerings: [],
        team: {
          name: "",
          title: "",
          phoneNumber: "",
          email: "",
          image: {
            url: ""
          }
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
      },
      cursorPrev: `url("data:image/svg+xml,%3Csvg width='26' height='21' viewBox='0 0 26 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.2388 2.10976C11.6294 1.71923 11.6294 1.08607 11.2388 0.695542C10.8483 0.305018 10.2152 0.305018 9.82463 0.695542L0.824632 9.69554C0.434107 10.0861 0.434107 10.7192 0.824632 11.1098L9.82463 20.1098C10.2152 20.5003 10.8483 20.5003 11.2388 20.1098C11.6294 19.7192 11.6294 19.0861 11.2388 18.6955L3.94595 11.4026H24.5317C25.084 11.4026 25.5317 10.9549 25.5317 10.4026C25.5317 9.85036 25.084 9.40265 24.5317 9.40265H3.94595L11.2388 2.10976Z' fill='black'/%3E%3C/svg%3E%0A"), pointer`,
      cursorNext: `url("data:image/svg+xml,%3Csvg width='26' height='21' viewBox='0 0 26 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.5167 0.695542C16.1262 0.305018 15.493 0.305018 15.1025 0.695542C14.7119 1.08607 14.7119 1.71923 15.1025 2.10976L22.3954 9.40265H1.80957C1.25729 9.40265 0.80957 9.85036 0.80957 10.4026C0.80957 10.9549 1.25729 11.4026 1.80957 11.4026H22.3954L15.1025 18.6955C14.7119 19.0861 14.7119 19.7192 15.1025 20.1098C15.493 20.5003 16.1262 20.5003 16.5167 20.1098L25.5167 11.1098C25.9072 10.7192 25.9072 10.0861 25.5167 9.69554L16.5167 0.695542Z' fill='black'/%3E%3C/svg%3E%0A"), pointer`
    };
  },
  methods: {
    async getAbout() {
      const { data } = await getData({
        query: gql`
          query {
            about {
              aboutUs
              offeringIntro
              offerings {
                icon
                title
                content
              }
              team {
                name
                title
                phoneNumber
                email
                image {
                  url
                }
              }
              clientList {
                name
                id
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
