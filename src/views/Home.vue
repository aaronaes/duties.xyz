<template>
  <main>
    <!-- Masthead -->
    <section class="outer-margin hero hide">
      <article class="row">
        <figure class="column heading">
          <h1
            class="title markdown hide-for-small-only"
            v-html="frontpage.intro"
          ></h1>
          <h1 class="title markdown show-for-small-only">
            A digital design partner for ambitious businesses.
          </h1>
        </figure>
      </article>
    </section>

    <!-- Project List -->
    <ProjectList :projects="projects" />

    <!-- Story List -->
    <NewsList :stories="stories" />

    <intersect
      :threshold="[0.4, 0.8]"
      :root="main"
      @enter="addBodyClass"
      @leave="removeBodyClass"
    >
      <section class="outer-margin offduty">
        <article class="row content top">
          <figure class="header">
            <h1 class="title big outlined negative">OFF—DUTY</h1>
          </figure>
          <figure class="counter">
            <div class="pagination"></div>
          </figure>
        </article>
        <article class="row swiper">
          <figure class="carousel-block">
            <figure class="carousel">
              <swiper
                ref="mySwiper"
                :options="swiperOptions"
                :auto-update="true"
                :auto-destroy="true"
              >
                <swiper-slide
                  v-for="asset in frontpage.offGallery"
                  :key="asset.id"
                >
                  <div class="slide-img">
                    <img
                      :src="getUrl(asset.url)"
                      :srcset="getSrcSet(asset.url)"
                    />
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
          </figure>
        </article>
        <article class="row content">
          <figure class="body heading">
            <div class="text">
              <h3 class="markdown" v-html="frontpage.offBody"></h3>
            </div>
          </figure>
        </article>
      </section>
    </intersect>

    <Footer />
  </main>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";
import marked from "marked";
import ProjectList from "@/components/ProjectList.vue";
import NewsList from "@/components/NewsList.vue";
import Footer from "@/components/Footer.vue";
import Intersect from "vue-intersect";

export default {
  name: "Home",
  components: {
    Intersect,
    ProjectList,
    NewsList,
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
        speed: 100,
        grabCursor: "true",
        slidesPerView: "auto",
        loop: true,
        loopedSlides: 50000,
        pagination: {
          el: ".pagination",
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
    addBodyClass() {
      document.body.classList.add("dark");
    },
    removeBodyClass() {
      document.body.classList.remove("dark");
    },
    async getProjects() {
      const { data } = await getData({
        query: gql`
          query {
            _allProjectsMeta {
              count
            }
            frontpage {
              projects {
                id
                icon
                title
                slug
                subtitle
                inverted
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
                    website
                    device
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
                categories {
                  categoryType
                }
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
      ${imgix({ url: url, w: 640, q: 50 })} 640w,
      ${imgix({ url: url, w: 768, q: 50 })} 768w,
      ${imgix({ url: url, w: 1024, q: 60 })} 1024w,
      ${imgix({ url: url, w: 1366, q: 60 })} 1366w,
      ${imgix({ url: url, w: 1600, q: 70 })} 1600w,
      ${imgix({ url: url, w: 1920, q: 70 })} 1920w,
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
