<template>
  <div id="content">
    <intersect
      :threshold="[0.1]"
      @enter="addLightmode"
      @leave="removeLightmode"
    >
      <section class="outer-margin section page-hero">
        <article class="row">
          <figure class="column hero-list">
            <ul class="list">
              <li
                class="list-item"
                v-for="(block, i) in frontpage.heroList"
                :key="i"
              >
                <router-link :to="block.heroListLink">
                  <h2 class="number">
                    <span class="markdown" v-html="block.heroListNumber"></span>
                    <span>{{ block.heroListTitle }}</span>
                  </h2>
                  <div class="imgBox">
                    <img
                      class="img"
                      v-for="asset in block.heroListGallery"
                      :key="asset.id"
                      :src="getUrl(asset.url)"
                      :srcset="getSrcSet(asset.url)"
                    />
                  </div>
                </router-link>
              </li>
            </ul>
          </figure>
        </article>
      </section>
    </intersect>

    <section class="outer-margin onduty-intro section header-pad">
      <article class="row intro">
        <figure class="column page-subtitle">
          <h3>
            We believe it’s our duty as designers to provide the world with
            thoughtfully designed products that are functional, accessible and
            visually appealing.
          </h3>
        </figure>
        <figure class="column page-title">
          <h1 class="title">
            ON-DUTY
          </h1>
        </figure>
      </article>
    </section>
    <ProjectList :projects="projects" />

    <ProjectIndex />

    <!-- Story List -->
    <NewsList class="hide" :stories="stories" />

    <intersect :threshold="[0.5]" @enter="addDarkmode" @leave="removeDarkmode">
      <section class="outer-margin offduty">
        <article class="row content top">
          <figure class="header">
            <router-link :to="{ name: 'XYZ' }">
              <h1 class="title big outlined negative">OFF—DUTY</h1>
            </router-link>
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
  </div>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";
import marked from "marked";
import ProjectList from "@/components/ProjectList.vue";
import ProjectIndex from "@/views/projectIndex.vue";
import NewsList from "@/components/NewsList.vue";
import Intersect from "vue-intersect";

export default {
  name: "Home",
  components: {
    Intersect,
    ProjectList,
    ProjectIndex,
    NewsList
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
        heroList: [],
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
        speed: 200,
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
    addDarkmode() {
      document.body.classList.add("darkmode");
    },
    removeDarkmode() {
      document.body.classList.remove("darkmode");
    },
    addLightmode() {
      document.body.classList.add("light");
    },
    removeLightmode() {
      document.body.classList.remove("light");
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
                  categoryNumber
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
                createdAt
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
              heroList {
                heroListNumber
                heroListTitle
                heroListLink
                heroListGallery {
                  url
                }
              }
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
  mounted() {
    window.scrollTo(0, 0);
  },
  destroyed() {
    document.body.classList.remove("darkmode");
    document.body.classList.remove("light");
  }
};
</script>
