<template>
  <main id="about">
    <section class="grid-container block-masthead masthead">
      <figure class="grid-x align-center">
        <div class="cell small-12 medium-8 large-6">
          <h1>Duty / Duties</h1>
          <div class="dictionary">
            <div class="cell meta">
              <h3>
                / djuːti / <span>noun</span>
                <span
                  class="audio icon"
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
            <h2>
              A moral or legal obligation; a responsibility.
            </h2>
            <h2>
              A task or action that one is required to perform as part of one’s
              job.
            </h2>
          </div>
        </div>
      </figure>
    </section>

    <section class="grid-container content-block intro">
      <figure class="grid-x grid-margin-x grid-padding-x align-center">
        <div class="cell small-12 medium-10 large-8">
          <h2 class="markdown" v-html="getMarkdown(about.aboutUs)"></h2>
        </div>
      </figure>
    </section>

    <section class="content-block studioImages">
      <article>
        <figure>
          <img
            src="https://www.datocms-assets.com/33121/1598817714-djdphycv1.jpg"
          />
        </figure>
        <figure>
          <img src="https://media3.giphy.com/media/HPZubh6ApHpN6/200.gif" />
        </figure>
        <figure>
          <img src="https://www.fillmurray.com/400/300" />
        </figure>
        <figure>
          <img src="https://www.fillmurray.com/500/400" />
        </figure>
        <figure>
          <img
            src="https://media1.tenor.com/images/2a03db1ad9e32df40e5b36a0fc49e140/tenor.gif?itemid=11822909"
          />
        </figure>
        <figure>
          <img src="https://www.fillmurray.com/400/300" />
        </figure>
      </article>
    </section>

    <section class="grid-container content-block services">
      <figure class="grid-x grid-margin-x grid-padding-x align-center">
        <div class="cell small-12 medium-10 large-8">
          <div v-for="block in about.services" :key="block.id">
            <h3>{{ block.title }}</h3>
            <div class="service-items">
              <h1>Ideas.</h1>
              <h1>Branding.</h1>
              <h1>Design.</h1>
              <h1>Code</h1>
              <h1>Products.</h1>
              <h1>UX design.</h1>
              <h1>Websites.</h1>
              <h1>XYZ...</h1>
            </div>
            <p
              class="main-text-block markdown"
              v-html="getMarkdown(block.content)"
            ></p>
            <p class="main-text-block">
              <a href="'mailto:new@duties.xyz">
                Ask us how we can help
              </a>
            </p>
          </div>
        </div>
      </figure>
    </section>

    <section class="grid-container content-block people">
      <figure class="person" v-for="person in about.team" :key="person.id">
        <div class="img-wrapper" v-lazy-container="{ selector: 'img' }">
          <img
            :data-src="getUrl(person.image.url)"
            :data-srcset="getUrl(person.image.url)"
          />
        </div>
        <div class="main-text-block">
          <p>{{ person.name }}</p>
          <p>{{ person.title }}</p>
          <p>
            <a :href="'mailto:' + person.email">
              {{ person.email }}
            </a>
          </p>
        </div>
      </figure>
    </section>

    <section class="marquee block-masthead">
      <figure class="grid-x grid-margin-x grid-padding-x align-center">
        <h3 class="small-12 medium-10 large-8">
          A few of our friends —
        </h3>

        <div class="inner">
          <h1 v-for="client in about.clientList" :key="client.id">
            {{ client.name }}
          </h1>
        </div>
      </figure>
    </section>

    <section class="grid-container content-block summary">
      <figure class="grid-x grid-margin-x grid-padding-x align-center">
        <div class="cell small-12 medium-10 large-8">
          <h2 class="markdown" v-html="getMarkdown(about.summary)"></h2>
        </div>
        <div class="cell small-12 medium-10 large-8 footer">
          <h2 class="float-left" v-for="link in about.contact" :key="link.id">
            <a :href="link.linkUrl" target="_blank">{{ link.linkTitle }}</a>
          </h2>
        </div>
      </figure>
    </section>
  </main>
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
          image: {
            url: ""
          },
          name: "",
          title: "",
          phoneNumber: "",
          email: ""
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
                image {
                  url
                }
                name
                title
                phoneNumber
                email
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
