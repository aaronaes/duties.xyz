/* eslint-disable vue/return-in-computed-property */
<template>
  <div>
    <intersect
      :threshold="[0.1]"
      @enter="addLightmode"
      @leave="removeLightmode"
    >
      <section class="outer-margin section hero-block">
        <article class="row">
          <figure class="column">
            <ul class="hero-list">
              <li
                class="list-item fade-list"
                v-for="(block, index) in frontpage.heroList"
                :key="index"
                :style="`--item-order:${index + 1}`"
              >
                <router-link :to="block.heroListLink">
                  <h2 class="number">
                    <span class="markdown" v-html="block.heroListNumber"></span>
                    <span>{{ block.heroListTitle }}</span>
                  </h2>
                </router-link>
                <div class="media imgbox">
                  <img
                    v-for="asset in block.heroListGallery"
                    :key="asset.id"
                    :src="getUrl(asset.url)"
                    :srcset="getSrcSet(asset.url)"
                    :style="`--item-order:${index + 1}`"
                  />
                </div>
              </li>
            </ul>
          </figure>
        </article>
      </section>
    </intersect>

    <section class="outer-margin section onduty-block">
      <article class="row">
        <figure class="column page-subtitle">
          <h3>
            We believe it’s our duty as designers to provide the world with
            thoughtfully designed products that are functional, accessible and
            visually appealing.
          </h3>
        </figure>
      </article>
    </section>
    <ProjectList :projects="projects" />

    <section class="outer-margin section blocky">
      <article class="row">
        <figure class="column">
          <h2>On-duty</h2>
          <p>
            We believe it’s our duty as designers to provide the world with
            thoughtfully designed products that are functional, accessible and
            visually appealing.
          </p>
          <ul>
            <li>
              <router-link :to="{ name: 'Projects' }">
                <p>All work &rarr;</p>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'News' }">
                <p>News and shit &rarr;</p>
              </router-link>
            </li>
            <li>
              <a
                target="_blank"
                class="title"
                href="https://www.linkedin.com/company/duties"
              >
                <p>LinkedIn &nearr;</p>
              </a>
            </li>
          </ul>
        </figure>
        <figure class="column">
          <h2>Off-duty</h2>
          <p>
            When we are off-duty you can find us dabbling in experimental
            typefaces, curating our studio playlist and working on physical
            products for our in-house line of merch.
          </p>
          <ul>
            <li>
              <router-link :to="{ name: 'XYZ' }">
                <p>XYZ &rarr;</p>
              </router-link>
            </li>
            <li>
              <a
                target="_blank"
                class="title"
                href="https://instagram.com/duties.xyz"
              >
                <p>Instagram &nearr;</p>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                class="title"
                href="https://medium.com/@duties.xyz"
              >
                <p>Medium &nearr;</p>
              </a>
            </li>
          </ul>
        </figure>
      </article>
    </section>

    <section class="outer-margin section hide offduty">
      <article class="row top">
        <figure class="header">
          <h1 class="big outlined negative">
            OFF–DUTY
          </h1>
        </figure>
        <figure class="counter">
          <div class="pagination"></div>
        </figure>
      </article>
      <article class="row body">
        <figure class="column body heading">
          <div class="text">
            <h3 class="markdown" v-html="frontpage.offBody"></h3>
          </div>
        </figure>
      </article>
      <article class="horizontal-snap">
        <div
          v-for="asset in frontpage.offGallery"
          :key="asset.id"
          class="slide-img"
        >
          <img :src="getUrl(asset.url)" :srcset="getSrcSet(asset.url)" />
          <div class="tag" v-if="!!asset.customData.link">
            <a :href="asset.customData.link" target="_blank">
              <p class="foo">{{ asset.title }}</p>
            </a>
          </div>
        </div>
      </article>
      <article class="row hide swiper slider">
        <figure class="carousel-block">
          <figure class="column carousel">
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
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </figure>
        </figure>
      </article>
      <article class="row bottom">
        <figure class="column">
          <p>
            <router-link to="/xyz">
              Jump to XYZ &rarr;
            </router-link>
          </p>
          <div class="pagination"></div>
        </figure>
      </article>
    </section>
  </div>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";
import marked from "marked";
import Intersect from "vue-intersect";

import ProjectList from "@/components/ProjectList.vue";

export default {
  name: "Home",
  components: {
    Intersect,
    ProjectList
  },
  async created() {
    this.projects = await this.getProjects();
    this.stories = await this.getStories();
    this.frontpage = await this.getFrontpage();
  },
  data() {
    return {
      hasContent: false,
      show: false,
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
      swiperOptions: {
        loop: true,
        loopedSlides: 5000,
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          renderFraction: function(currentClass, totalClass) {
            return (
              '<span class="' +
              currentClass +
              '"></span>' +
              "." +
              '<span class="' +
              totalClass +
              '"></span>'
            );
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
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
                  url(imgixParams: { auto: format, q: 50 })
                }
              }
              ondutyTitle
              ondutyBody
              ondutyImage {
                url
              }
              offGallery {
                url(imgixParams: { auto: format, q: 50 })
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
      ${imgix({ url: url, w: 640, q: 40 })} 640w,
        ${imgix({ url: url, w: 768, q: 50 })} 768w,
        ${imgix({ url: url, w: 1024, q: 60 })} 1024w,
        ${imgix({ url: url, w: 1366, q: 70 })} 1366w,
        ${imgix({ url: url, w: 1600, q: 70 })} 1600w,
        ${imgix({ url: url, w: 1920, q: 70 })} 1920w
      `;
    }
  },
  computed: {
    cssVars: function() {
      return {
        "--item-order": this.a
      };
    },
    pageName() {
      return this.$route.name;
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    document.body.classList.add("page-home");
  },
  destroyed() {
    document.body.classList.remove("page-home");
    document.body.classList.remove("darkmode");
    document.body.classList.remove("light");
  }
};
</script>
