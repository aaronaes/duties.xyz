<template>
  <main id="about">
    <!-- <section class="grid-container masthead-block content-block masthead">
      <figure class="grid-x grid-margin-x grid-padding-x align-center">
        <div class="cell small-12 medium-10 block-inner">
          <h1>Duty / Duties</h1>
          <div class="dictionary">
            <div class="cell meta">
              <p>
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
            <div class="cell meaning">
              <p>
                A moral or legal obligation; a responsibility.
              </p>
              <p>
                A task or action that one is required to perform as part of
                one’s job.
              </p>
            </div>
          </div>
        </div>
      </figure>
    </section> -->

    <section class="content-block intro">
      <article>
        <figure class="block-inner" v-in-viewport.once>
          <h2 class="markdown" v-html="getMarkdown(about.aboutUs)"></h2>
        </figure>
      </article>
    </section>

    <section class="content-block studioImages">
      <article class="image-grid">
        <figure class="fade-up" v-in-viewport.once>
          <img
            src="https://media1.tenor.com/images/f49ee9c7011c6dcfacc063b4b733b41d/tenor.gif?itemid=5143866"
          />
        </figure>
        <figure class="fade-up" v-in-viewport.once>
          <img
            src="https://www.datocms-assets.com/33121/1601924843-studioimage-01.jpg"
          />
        </figure>
        <figure class="fade-up" v-in-viewport.once>
          <img
            src="https://www.datocms-assets.com/33121/1601925059-studioshot-01.png?auto=format&ar=3154%3A1972&fit=max&ixlib=react-9.0.1&w=594"
          />
        </figure>
        <figure class="fade-up" v-in-viewport.once>
          <img
            src="https://www.datocms-assets.com/33121/1601926682-studioimg.png?auto=format&ar=740%3A852&fit=max&ixlib=react-9.0.1&w=282"
          />
        </figure>
        <figure class="fade-up" v-in-viewport.once>
          <img
            src="https://www.datocms-assets.com/33121/1598817693-img2924.jpg?auto=format&ar=3024%3A4032&fit=max&ixlib=react-9.0.1&w=442"
          />
        </figure>
        <figure class="fade-up" v-in-viewport.once>
          <img
            src="https://www.datocms-assets.com/33121/1601926752-img.png?auto=format&ar=500%3A530&fit=max&ixlib=react-9.0.1&w=380"
          />
        </figure>
      </article>
    </section>

    <section class="content-block services">
      <article class="block-inner">
        <figure v-for="block in about.services" :key="block.id">
          <div class="service-items title">
            <h1>
              Concepts. Branding. Design. Code. Products. UX. Apps. Websites.
              One-pagers. XYZ...
            </h1>
            <br />
          </div>
          <div class="service-items body-text">
            <div class="main-text-block heading">
              <h3 class="title">Ideas</h3>
              <p>
                We work at the intersection of visual and functional design;
                focusing on...
              </p>
              <ul style="list-style: arrow;">
                <li>
                  <p>Brand Identity</p>
                </li>
                <li>
                  <p>Product Strategy</p>
                </li>
                <li>
                  <p>Digital Design</p>
                </li>
                <li>
                  <p>Tech development</p>
                </li>
              </ul>
            </div>
            <div class="main-text-block heading">
              <h3 class="title">Products</h3>
              <p>
                We work at the intersection of visual and functional design;
                focusing on...
              </p>
              <ul style="list-style: arrow;">
                <li>
                  <p>Brand Identity</p>
                </li>
                <li>
                  <p>Product Strategy</p>
                </li>
                <li>
                  <p>Digital Design</p>
                </li>
                <li>
                  <p>Tech development</p>
                </li>
              </ul>
            </div>
            <div class="main-text-block heading">
              <h3 class="title">Brands</h3>
              <p>
                We work at the intersection of visual and functional design;
                focusing on...
              </p>
              <ul style="list-style: arrow;">
                <li>
                  <p>Brand Identity</p>
                </li>
                <li>
                  <p>Product Strategy</p>
                </li>
                <li>
                  <p>Digital Design</p>
                </li>
                <li>
                  <p>Tech development</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="service-items body-text">
            <div class="main-text-block link">
              <p>
                <span class="arrow">
                  &rarr;
                </span>
                <a class="text-link" href="'mailto:new@duties.xyz"
                  >Let's chat!</a
                >
              </p>
            </div>
          </div>
        </figure>
      </article>
    </section>

    <section class="content-block people">
      <article>
        <figure
          class="person fade-up"
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

            <p>
              <a class="text-link" :href="'callto:' + person.phoneNumber">
                {{ person.phoneNumber }}
              </a>
            </p>
            <p>
              <a class="text-link" :href="'mailto:' + person.email">
                {{ person.email }}
              </a>
            </p>
          </div>
        </figure>
        <figure class="bing">
          <svg
            width="22"
            height="70"
            viewBox="0 0 22 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 11.1018C0 5.27432 4.75482 0.5 10.7161 0.5H11.2839C17.1742 0.5 22 5.20411 22 11.1018C22 16.9293 17.2452 21.7036 11.2839 21.7036H10.7161C4.82579 21.7036 0 16.9293 0 11.1018Z"
              fill="#F8F8F8"
            />
            <path
              d="M0 59.8987C0 54.0712 4.75482 49.2969 10.7161 49.2969H11.2839C17.1742 49.2969 22 54.001 22 59.8987C22 65.7262 17.2452 70.5005 11.2839 70.5005H10.7161C4.82579 70.5005 0 65.7262 0 59.8987Z"
              fill="#F8F8F8"
            />
          </svg>
        </figure>
      </article>
    </section>

    <section class="content-block marquee">
      <article class="align-center">
        <figure class="block-inner fade-up" v-in-viewport.once>
          <h3 class="float-left">A few of our friends</h3>
        </figure>
        <figure class="block-marquee">
          <div class="inner fade-up heading" v-in-viewport.once>
            <h1 class="title">Domino’s Pizza</h1>
            <h1 class="title">Feed</h1>
            <h1 class="title">Circle K</h1>
            <h1 class="title">Simplenæss</h1>
            <h1 class="title">Bielke & Yang</h1>
            <h1 class="title">Humid Mag</h1>
          </div>
          <div class="inner right heading fade-up" v-in-viewport.once>
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
      about: {
        aboutUs: "",
        services: "",
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
              services {
                ... on BlockRecord {
                  title
                  content
                  lists
                }
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
    }
  },
  beforeCreate: function() {
    document.body.className = "about";
  }
};
</script>
