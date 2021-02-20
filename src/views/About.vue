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
          <h1 class="markdown title" v-html="about.offeringIntro"></h1>
        </figure>

        <figure class="column body fade-in" v-in-viewport.once>
          <p class="body" v-html="about.offeringContent"></p>
        </figure>

        <figure class="column list fade-in" v-in-viewport.once>
          <ul>
            <li
              class="heading"
              v-for="item in about.serviceList"
              :key="item.id"
            >
              <div class="icon">
                <svg
                  width="472"
                  height="326"
                  viewBox="0 0 472 326"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M371.513 74.9572H337.905C337.905 114.937 355.562 150.855 383.473 175.414H331.159C330.711 175.414 315.538 175.299 293.471 172.519C288.233 126.435 270.701 77.749 239.194 40.5499C199.934 -5.79567 140.289 -9.85607 109.209 15.4318C85.6244 34.6309 74.8359 73.4765 115.287 124.931C151.994 171.62 213.677 192.377 261.758 201.601C261.791 224.876 257.949 246.041 250.521 262.029C241.148 282.207 227.288 292.437 209.323 292.437C178.064 292.437 161.435 272.968 140.382 248.32C112.596 215.791 78.0138 175.306 0 175.306V208.869C62.5068 208.869 87.9142 238.615 114.812 270.103C138.285 297.585 162.557 326 209.323 326C240.619 326 266.079 308.297 281.01 276.153C289.777 257.278 294.602 233.074 295.116 206.633C315.463 208.896 329.338 208.977 331.145 208.977H383.224C355.456 233.531 337.905 269.357 337.905 309.219H371.513C371.513 253.885 416.592 208.869 472 208.869V175.306C416.592 175.306 371.513 130.291 371.513 74.9572ZM141.721 104.205C120.127 76.7349 115.912 53.2787 130.443 41.4484C137.586 35.6373 146.189 33.1849 155.242 33.1849C176.633 33.1849 200.529 46.8738 213.536 62.2285C238.352 91.5266 253.163 129.782 258.945 166.642C218.152 157.781 169.845 139.974 141.721 104.205Z"
                    fill="black"
                  />
                </svg>
              </div>

              <h3 class="title markdown" v-html="item.listTitle"></h3>
            </li>
          </ul>
        </figure>
      </article>
    </section>

    <section class="outer-margin people">
      <article class="row column">
        <figure class="column network fade-in" v-in-viewport.once>
          <p class="markdown title" v-html="about.networkTitle"></p>
          <p class="markdown body" v-html="about.networkBody"></p>
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
            <h2 class="title">{{ person.name }}</h2>
            <p>{{ person.title }}</p>
            <p>
              <a :href="'mailto:' + person.email">
                {{ person.email }}
              </a>
            </p>
          </div>
        </figure>
      </article>
    </section>

    <section class="outer-margin clients">
      <article class="row">
        <figure class="column body">
          <div class="body">
            <div class="body" v-html="about.ffBody"></div>
          </div>
        </figure>
        <figure class="column list">
          <div class="heading" v-if="showLess">
            <h3
              class="pill title"
              v-for="asset in about.ffMarqueeOne.slice(0, 9)"
              :key="asset.id"
            >
              {{ asset.name }}
            </h3>
            <h3 class="pill title" @click="showLess = false">
              <span class="arrow">+</span>
            </h3>
          </div>
          <div class="heading" v-else>
            <h3
              class="pill title"
              v-for="asset in about.ffMarqueeOne"
              :key="asset.id"
            >
              {{ asset.name }}
            </h3>
            <h3 class="pill title" @click="showLess = true">
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
