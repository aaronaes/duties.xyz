<template>
  <main>
    <!-- Masthead -->
    <section class="outer-margin hero">
      <article class="row">
        <figure class="column heading">
          <h1 class="title markdown" v-html="frontpage.intro"></h1>
        </figure>
      </article>
    </section>

    <!-- Project List -->
    <ProjectList :projects="projects" />

    <!-- Studio Block -->
    <section class="outer-margin studio dark">
      <article class="row fade-in" v-in-viewport.once>
        <figure class="column header show-for-small-only">
          <div class="heading">
            <h1 class="title" v-html="frontpage.ondutyTitle"></h1>
          </div>
        </figure>
        <figure class="image">
          <img
            :src="getUrl(frontpage.ondutyImage.url)"
            :srcset="getSrcSet(frontpage.ondutyImage.url)"
          />
        </figure>
        <figure class="body">
          <div class="heading hide-for-small-only">
            <h1 class="title" v-html="frontpage.ondutyTitle"></h1>
          </div>
          <div class="text">
            <p v-html="frontpage.ondutyBody"></p>
          </div>

          <div class="link">
            <p>
              <router-link :to="{ name: 'About' }">
                Read more
              </router-link>
            </p>
          </div>
        </figure>
      </article>
    </section>

    <!-- Off-duty Block -->
    <section class="outer-margin off-duty sand">
      <article class="row fade-in" v-in-viewport.once>
        <figure class="column header">
          <div class="heading">
            <h1 class="title markdown" v-html="frontpage.offTitle"></h1>
          </div>
        </figure>
        <figure class="column body">
          <div class="text">
            <p class="markdown" v-html="frontpage.offBody"></p>
          </div>
        </figure>
        <figure class="column carousel">
          <swiper
            ref="mySwiper"
            :options="swiperOptions"
            :auto-update="true"
            :auto-destroy="true"
          >
            <swiper-slide v-for="asset in frontpage.offGallery" :key="asset.id">
              <div class="slide-img">
                <img :src="getUrl(asset.url)" :srcset="getSrcSet(asset.url)" />
              </div>
            </swiper-slide>
          </swiper>
          <!-- Add Arrows -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </figure>
        <figure class="column swiper-pagination"></figure>
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
import ProjectList from "@/components/ProjectList.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    ProjectList,
    Footer
  },
  async created() {
    this.projects = await this.getProjects();
    this.frontpage = await this.getFrontpage();
  },
  data() {
    return {
      title: "Home",
      frontpage: {
        ondutyTitle: "",
        ondutyBody: "",
        ondutyImage: {
          url: ""
        },
        offTitle: "",
        offBody: "",
        offGallery: [
          {
            url: ""
          }
        ],
        intro: ""
      },
      projects: [],
      footer: [],
      swiperOptions: {
        speed: 200,
        loop: true,
        slidesPerView: "auto",
        grabCursor: "true",
        allowTouchMove: "true",
        threshold: 5,
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        }
      }
    };
  },
  methods: {
    async getProjects() {
      const { data } = await getData({
        query: gql`
          query {
            frontpage {
              projects {
                ... on StoryRecord {
                  _modelApiKey
                  id
                  title
                  description
                  storyImage {
                    url
                  }
                }
                ... on ProjectRecord {
                  _modelApiKey
                  id
                  title
                  slug
                  subtitle
                  backgroundColor {
                    hex
                  }
                  siteLink
                  slug
                  readMore
                  categories {
                    categoryType
                  }
                  client {
                    name
                  }
                  roles {
                    name
                    link
                    role
                  }
                  blocks {
                    ... on SingleImageRecord {
                      id
                      _modelApiKey
                      caption
                      full
                      image {
                        url
                      }
                    }
                    ... on QuoteRecord {
                      id
                      _modelApiKey
                      title
                      text
                    }
                    ... on TwoUpRecord {
                      id
                      _modelApiKey
                      firstImage {
                        url
                      }
                      lastImage {
                        url
                      }
                      full
                    }
                    ... on ThreeUpRecord {
                      id
                      _modelApiKey
                      leftImage {
                        url
                      }
                      centerImage {
                        url
                      }
                      rightImage {
                        url
                      }
                    }
                    ... on ImageCarouselRecord {
                      id
                      _modelApiKey
                      imageCarouselAsset {
                        id
                        url
                      }
                    }
                  }
                  description
                  projectThumbnail {
                    url
                  }
                  projectBanner {
                    url
                  }
                  isDevice
                  isWebsite
                }
              }
            }
          }
        `
      });
      return data.frontpage.projects;
    },
    async getFrontpage() {
      const { data } = await getData({
        query: gql`
          query {
            frontpage {
              intro
              ondutyTitle
              ondutyBody
              ondutyImage {
                url
              }
              offGallery {
                url
              }
              offTitle
              offBody
            }
          }
        `
      });
      return data.frontpage;
    },
    getMarkdown(content) {
      return marked(content);
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
  computed: {
    pageName() {
      return this.$route.name;
    }
  },
  beforeCreate: function() {
    document.body.className = "home";
  }
};
</script>
