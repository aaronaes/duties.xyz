<template>
  <main id="about">
    <section class="content-block intro">
      <article class="block-inner">
        <figure>
          <!-- <h2 class="markdown" v-html="getMarkdown(about.aboutUs)"></h2> -->
          <h2
            class="markdown fittext"
            v-in-viewport.once="{ margin: '-5% 0%' }"
            :class="{ fadeOut: isHovering }"
          >
            Established in 2020,
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
              Duties*
            </span>
            is an independent digital design studio based in Oslo. We believe
            it’s our duty as designers to provide the world with thoughtfully
            designed products that are both functional, accessible and visually
            beautiful.
          </h2>
          <p class="tagline" :class="{ highlight: isHovering }">
            * A moral or legal obligation a responsibility.
          </p>
        </figure>
      </article>
    </section>

    <section class="content-block masthead hide">
      <article class="block-inner">
        <figure>
          <div class="heading title">
            <h2 class="title">Duty / Duties</h2>
          </div>
          <div class="dictionary">
            <div class="meta">
              <p class="font-body">
                / djuːti / <span>noun</span>
                <span
                  class="audio icon"
                  ref="audioElm"
                  @click.prevent="
                    playSound(
                      'https://dictionary.cambridge.org/media/english/uk_pron/u/ukd/ukdus/ukdusts008.mp3'
                    )
                  "
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 60 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.1111 6.85181L14.2716 13.9075H4V28.685H14.2716L27.1111 35.7407V6.85181Z"
                      stroke="#E5594D"
                      stroke-width="6"
                    />
                    <path
                      d="M47.4748 3C52.5066 7.85299 55.3333 14.4342 55.3333 21.2963C55.3333 28.1584 52.5066 34.7396 47.4748 39.5926M38 12.1352C40.5159 14.5617 41.9293 17.8523 41.9293 21.2834C41.9293 24.7144 40.5159 28.005 38 30.4315"
                      stroke="#E5594D"
                      stroke-width="6"
                    />
                  </svg>
                  Listen
                </span>
              </p>
            </div>
            <div class="meaning">
              <p>
                A moral or legal obligation; a responsibility.
              </p>
              <p>
                A task or action that one is required to perform as part of
                one’s job.
              </p>
            </div>
          </div>
        </figure>
      </article>
    </section>

    <section class="content-block studioImages">
      <article class="image-grid">
        <figure class="fade-in" v-in-viewport.once style="--index: 1;">
          <img src="/images/about/studio-01.png" />
        </figure>
        <figure class="fade-in" v-in-viewport.once style="--index: 2;">
          <img src="/images/about/studio-03.png" />
        </figure>
        <figure class="fade-in" v-in-viewport.once style="--index: 3;">
          <img src="/images/about/studio-02.png" />
        </figure>
      </article>
    </section>
    <section class="content-block studioImages hide">
      <article class="image-grid">
        <figure class="fade-in" v-in-viewport.once style="--index: 1;">
          <img
            src="https://media1.tenor.com/images/f49ee9c7011c6dcfacc063b4b733b41d/tenor.gif?itemid=5143866"
          />
        </figure>
        <figure class="fade-in" v-in-viewport.once style="--index: 2;">
          <img
            src="https://www.datocms-assets.com/33121/1601924843-studioimage-01.jpg"
          />
        </figure>
        <figure class="fade-in" v-in-viewport.once style="--index: 6;">
          <img
            src="https://www.datocms-assets.com/33121/1601925059-studioshot-01.png?auto=format&ar=3154%3A1972&fit=max&ixlib=react-9.0.1&w=594"
          />
        </figure>

        <figure class="fade-in" v-in-viewport.once style="--index: 4;">
          <img
            src="https://www.datocms-assets.com/33121/1601926682-studioimg.png?auto=format&ar=740%3A852&fit=max&ixlib=react-9.0.1&w=282"
          />
        </figure>
        <figure class="fade-in" v-in-viewport.once style="--index: 3;">
          <img
            src="https://www.datocms-assets.com/33121/1598817693-img2924.jpg?auto=format&ar=3024%3A4032&fit=max&ixlib=react-9.0.1&w=442"
          />
        </figure>
        <figure class="fade-in" v-in-viewport.once style="--index: 5;">
          <img
            src="https://www.datocms-assets.com/33121/1601926752-img.png?auto=format&ar=500%3A530&fit=max&ixlib=react-9.0.1&w=380"
          />
        </figure>
      </article>
    </section>

    <section class="content-block services">
      <article class="block-inner">
        <figure class="service-title">
          <h2 class="markdown" v-html="getMarkdown(about.offeringIntro)"></h2>
        </figure>

        <div class="service-items" v-if="about.offerings.length > 0">
          <figure
            class="service-item"
            v-for="offer in about.offerings"
            :key="offer.id"
          >
            <div class="heading hide">
              <h2 class="title">
                <span>{{ offer.icon }}</span>
                {{ offer.title }}
              </h2>
            </div>
            <div class="text-block">
              <p class="icon">{{ offer.icon }}</p>
              <div class="body">
                <p class="title bold">
                  {{ offer.title }}
                </p>
                <p class="markdown" v-html="getMarkdown(offer.content)"></p>
              </div>
            </div>
          </figure>
        </div>
      </article>
    </section>

    <section class="content-block people">
      <article>
        <figure
          class="person fade-in"
          v-in-viewport.once
          v-for="person in about.team"
          :key="person.id"
        >
          <div class="img-wrapper">
            <img
              :src="getUrl(person.image.url)"
              :srcset="getUrl(person.image.url)"
            />
          </div>
          <div class="main-text-block heading">
            <h2 class="title">{{ person.name }}</h2>

            <p>{{ person.title }}</p>
            <a :href="'callto:' + person.phoneNumber">
              <p>{{ person.phoneNumber }}</p>
            </a>
            <a :href="'mailto:' + person.email">
              <p>{{ person.email }}</p>
            </a>
          </div>
        </figure>
      </article>
    </section>

    <section class="content-block marquee">
      <article class="align-center">
        <figure class="block-inner fade-in" v-in-viewport.once>
          <p class="float-left">A few of our friends</p>
        </figure>
        <figure class="block-marquee">
          <div class="inner fade-in heading" v-in-viewport.once>
            <h1 class="title">Domino’s Pizza</h1>
            <h1 class="title">Feed</h1>
            <h1 class="title">Circle K</h1>
            <h1 class="title">Simplenæss</h1>
            <h1 class="title">Bielke & Yang</h1>
            <h1 class="title">Humid Mag</h1>
          </div>
          <div class="inner right heading fade-in" v-in-viewport.once>
            <h1 class="title">Nutrilett</h1>
            <h1 class="title">Orkla</h1>
            <h1 class="title">Godtlevert</h1>
            <h1 class="title">Ogle Image</h1>
            <h1 class="title">Spoortz</h1>
            <h1 class="title">Snowmelt</h1>
            <h1 class="title">Psynapse</h1>
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
        slidesPerView: 1.5,
        centeredSlides: false,
        spaceBetween: 40,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        loop: false,
        grabCursor: true,
        speed: 1000,
        autoHeight: true, //enable auto height
        breakpoints: {
          768: {
            slidesPerView: 2.75
          },
          1366: {
            slidesPerView: 3.5,
            spaceBetween: 60,
            slidesOffsetBefore: 120,
            slidesOffsetAfter: 120
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

    // $(".fittext").each(function() {
    //   let t = $(this),
    //     width = t.data("width") * 1.5,
    //     characters = t.html().length,
    //     size = width / characters;

    //   $(this).css("font-size", `${size}vw`);
    // });
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  },
  beforeCreate: function() {
    document.body.className = "about";
  }
};
</script>
