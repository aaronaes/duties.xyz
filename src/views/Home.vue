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

    <StoryList :stories="stories" />

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
                <div class="tag" v-if="!!asset.customData.link">
                  <a :href="asset.customData.link" target="_blank">
                    <p class="foo">{{ asset.title }}</p>
                  </a>
                </div>
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
import StoryList from "@/components/StoryList.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    ProjectList,
    StoryList,
    Footer
  },
  async created() {
    this.projects = await this.getProjects();
    this.stories = await this.getStories();
    this.frontpage = await this.getFrontpage();
  },
  data() {
    return {
      title: "Home",
      hasContent: false,
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
            url: "",
            title: "",
            customData: {
              label: "",
              link: ""
            }
          }
        ],
        intro: ""
      },
      projects: [],
      stories: [],
      footer: [],
      swiperOptions: {
        speed: 400,
        grabCursor: "true",
        allowTouchMove: "true",
        slidesPerView: "auto",
        touchRatio: 0.2,
        loop: true,
        slideToClickedSlide: true,
        loopedSlides: 50,
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        pagination: {
          el: ".carousel-pagination",
          type: "fraction"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
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
                id
                title
                slug
                subtitle
                backgroundColor {
                  hex
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
                      png: url(imgixParams: { fm: png, q: 60 })
                      webp: url(imgixParams: { fm: webp, q: 60 })
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
              }
            }
          }
        `
      });
      return data.frontpage.projects;
    },
    async getStories() {
      const { data } = await getData({
        query: gql`
          query {
            frontpage {
              stories {
                id
                title
                description
                storyImage {
                  url
                }
              }
            }
          }
        `
      });
      return data.frontpage.stories;
    },
    async getFrontpage() {
      const { data } = await getData({
        query: gql`
          query {
            allUploads {
              customData
            }
            frontpage {
              intro
              ondutyTitle
              ondutyBody
              ondutyImage {
                url
              }
              offGallery {
                url
                title
                customData
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
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  beforeCreate: function() {
    document.body.className = "home";
  }
};
</script>
