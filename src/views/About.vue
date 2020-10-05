<template>
  <transition appear>
    <main id="about">
      <!-- <section class="grid-container masthead-block content-block masthead">
        <figure class="grid-x grid-margin-x grid-padding-x align-center">
          <div class="cell small-12 medium-10 block-inner">
            <h1>Duty / Duties</h1>
            <div class="dictionary">
              <div class="cell meta">
                <h3>
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
                </h3>
              </div>
              <div class="cell meaning">
                <h3>
                  A moral or legal obligation; a responsibility.
                </h3>
                <h3>
                  A task or action that one is required to perform as part of
                  one’s job.
                </h3>
              </div>
            </div>
          </div>
        </figure>
      </section> -->

      <section class="grid-container content-block intro">
        <figure class="grid-x grid-margin-x grid-padding-x align-center">
          <div class="cell small-12 medium-10 box block-inner" v-in-viewport>
            <h2 class="markdown" v-html="getMarkdown(about.aboutUs)"></h2>
          </div>
        </figure>
      </section>

      <section class="content-block studioImages">
        <article class="imageGrid">
          <figure class="box" v-in-viewport>
            <img
              src="https://media1.tenor.com/images/f49ee9c7011c6dcfacc063b4b733b41d/tenor.gif?itemid=5143866"
            />
          </figure>
          <figure class="box" v-in-viewport>
            <img
              src="https://www.datocms-assets.com/33121/1601924843-studioimage-01.jpg?auto=format&ar=5434%3A8151&fit=max&ixlib=react-9.0.1&w=210"
            />
          </figure>
          <figure class="box" v-in-viewport>
            <img
              src="https://www.datocms-assets.com/33121/1601925059-studioshot-01.png?auto=format&ar=3154%3A1972&fit=max&ixlib=react-9.0.1&w=594"
            />
          </figure>
          <figure class="box" v-in-viewport>
            <img
              src="https://www.datocms-assets.com/33121/1601926682-studioimg.png?auto=format&ar=740%3A852&fit=max&ixlib=react-9.0.1&w=282"
            />
          </figure>
          <figure class="box" v-in-viewport>
            <img
              src="https://www.datocms-assets.com/33121/1598817693-img2924.jpg?auto=format&ar=3024%3A4032&fit=max&ixlib=react-9.0.1&w=442"
            />
          </figure>
          <figure class="box" v-in-viewport>
            <img
              src="https://www.datocms-assets.com/33121/1601926752-img.png?auto=format&ar=500%3A530&fit=max&ixlib=react-9.0.1&w=380"
            />
          </figure>
        </article>
      </section>

      <section class="grid-container content-block services">
        <figure class="grid-x grid-padding-x align-center">
          <div class="cell small-12 medium-10 large-10 block-inner">
            <div v-for="block in about.services" :key="block.id">
              <div class="service-items">
                <h1>
                  Concepts. Branding. Design. Code. Products. UX. Apps.
                  Websites. One-pagers. XYZ...
                </h1>
              </div>
              <h3
                class="main-text-block markdown"
                v-html="getMarkdown(block.content)"
              ></h3>
              <h3 class="main-text-block">
                <svg
                  class="arrow"
                  width="24"
                  height="36"
                  viewBox="0 0 24 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 27.5858V8.41421L22.5858 18L13 27.5858Z"
                    stroke="#F8F8F8"
                    stroke-width="2"
                  />
                  <path d="M12.75 18H0" stroke="#F8F8F8" stroke-width="2" />
                </svg>

                <a href="'mailto:new@duties.xyz">Let's chat!</a>
              </h3>
            </div>
          </div>
        </figure>
      </section>

      <section class="grid-container content-block people">
        <figure
          class="person box"
          v-in-viewport
          v-for="person in about.team"
          :key="person.id"
        >
          <div class="img-wrapper">
            <img
              :src="getUrl(person.image.url)"
              :srcset="getUrl(person.image.url)"
            />
          </div>
          <div class="main-text-block">
            <p>{{ person.name }}</p>
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
      </section>

      <section class="grid-container content-block marquee">
        <figure class="grid-x grid-padding-x align-center">
          <div class="cell small-12 block-inner box" v-in-viewport>
            <h3 class="float-left">A few of our friends</h3>
          </div>

          <div class="inner box" v-in-viewport>
            <h1>Domino’s Pizza</h1>
            <h1>Feed</h1>
            <h1>Circle K</h1>
            <h1>Simplenæss</h1>
            <h1>Domino’s Pizza</h1>
            <h1>Feed</h1>
            <h1>Circle K</h1>
            <h1>Simplenæss</h1>
            <h1>Domino’s Pizza</h1>
            <h1>Feed</h1>
            <h1>Circle K</h1>
            <h1>Simplenæss</h1>
          </div>
          <div class="inner right box" v-in-viewport>
            <h1>Bielke & Yang</h1>
            <h1>Humid Mag</h1>
            <h1>Nutrilett</h1>
            <h1>Orkla</h1>
            <h1>Bielke & Yang</h1>
            <h1>Humid Mag</h1>
            <h1>Nutrilett</h1>
            <h1>Orkla</h1>
            <h1>Bielke & Yang</h1>
            <h1>Humid Mag</h1>
            <h1>Nutrilett</h1>
            <h1>Orkla</h1>
          </div>
          <div class="inner box" v-in-viewport>
            <h1>Godtlevert</h1>
            <h1>Ogle Image</h1>
            <h1>Spoortz</h1>
            <h1>Snowmelt</h1>
            <h1>Psynapse</h1>
            <h1>Godtlevert</h1>
            <h1>Ogle Image</h1>
            <h1>Spoortz</h1>
            <h1>Snowmelt</h1>
            <h1>Psynapse</h1>
            <h1>Godtlevert</h1>
            <h1>Ogle Image</h1>
            <h1>Spoortz</h1>
            <h1>Snowmelt</h1>
            <h1>Psynapse</h1>
          </div>
        </figure>
      </section>

      <section class="grid-container content-block summary">
        <figure class="grid-x grid-margin-x grid-padding-x align-center">
          <div class="cell small-12 medium-10 box block-inner" v-in-viewport>
            <h3 class="markdown" v-html="getMarkdown(about.summary)"></h3>
          </div>
          <div
            class="cell small-12 medium-10 footer box block-inner"
            v-in-viewport
          >
            <h3 class="float-left" v-for="link in about.contact" :key="link.id">
              <a :href="link.linkUrl" target="_blank">{{ link.linkTitle }}</a>
            </h3>
          </div>
        </figure>
      </section>
    </main>
  </transition>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import marked from "marked";
import imgix from "@/utils/imgix";

export default {
  name: "About",
  async created() {
    this.about = await this.getAbout();
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
      ${imgix({ url: url, w: 576 })} 576w,
      ${imgix({ url: url, w: 640 })} 640w,
      ${imgix({ url: url, w: 1024 })} 1024w,
      ${imgix({ url: url, w: 1680 })} 1680w,
      `;
    }
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
