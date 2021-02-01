<template>
  <div class="single-project">
    <transition name="loadProject" mode="in-out" appear>
      <section class="outer-margin loading" v-if="isLoading">
        <article class="row nav">
          <figure class="column">
            <div class="nav-item heading">
              <h3 class="title blinking">XYZ<span>:</span></h3>
            </div>
          </figure>
        </article>
      </section>
    </transition>

    <div class="bar" :class="{ 'is-loaded': !isLoading }">
      <section class="outer-margin header">
        <article class="row nav">
          <figure class="column heading">
            <h3 class="title">
              <a @click="closeProject()">XYZ</a>
              <span>:</span>
              {{ project.title }}
            </h3>
          </figure>
        </article>
      </section>

      <!-- Project Banner -->
      <section class="outer-margin banner">
        <article class="row" v-if="project.projectBanner">
          <figure
            class="column image banner-img"
            v-lazy-container="{ selector: 'img' }"
          >
            <img
              :data-src="getUrl(project.projectBanner.url)"
              :data-srcset="getSrcSet(project.projectBanner.url)"
            />
          </figure>
        </article>
        <article v-else></article>
      </section>

      <!-- Project Info -->
      <section class="outer-margin info">
        <article class="row">
          <figure class="column heading">
            <h1 class="title markdown" v-html="project.subtitle"></h1>
          </figure>
          <figure class="column body">
            <p class="body markdown" v-html="project.description"></p>

            <a class="hide" href="/" target="_blank">
              <p>Visit site</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="152"
                height="20"
                viewBox="0 0 152 20"
                fill="none"
              >
                <path
                  d="M75.1069 0.936449C71.0723 1.15875 67.0401 1.42708 63.0085 1.71563C63.6626 1.26373 63.3521 -0.0549248 62.3974 0.00177316C46.8504 0.925782 31.3051 1.86551 15.7593 2.80973C11.3175 3.07974 6.87579 3.34808 2.43404 3.61697C1.7723 3.65683 1.76356 4.64708 2.43404 4.61677C16.004 4.00263 29.5739 3.39748 43.1432 2.77436C39.8298 3.24759 36.5152 3.71521 33.1989 4.17329C27.8875 4.66617 22.5789 5.18655 17.2744 5.74174C11.8203 6.31265 6.36842 6.90939 0.920063 7.52745C-0.271783 7.66274 -0.341103 9.3328 0.920063 9.36817C8.92628 9.5944 16.9156 8.24376 24.8228 7.2041C28.5236 6.7174 32.222 6.21834 35.9199 5.71143C43.502 5.02207 51.0906 4.39222 58.6844 3.83815C64.1566 3.43902 69.6323 3.09995 75.1058 2.72496C76.2894 2.64468 76.3063 0.870207 75.1069 0.936449Z"
                  fill="#E5594D"
                />
              </svg>
            </a>
          </figure>
          <figure class="column tags">
            <p
              class="markdown"
              v-for="(category, i) in project.categories"
              :key="i"
            >
              {{ category.categoryType }}
            </p>
          </figure>
        </article>
      </section>

      <div class="asset" v-for="block in project.blocks" :key="block.id">
        <!-- Asset - Carousel -->
        <section
          class="outer-margin image-carousel"
          v-if="block._modelApiKey === 'image_carousel'"
        >
          <article class="row">
            <figure class="column carousel-inner">
              <swiper
                ref="mySwiper"
                :options="swiperOptions"
                :auto-update="true"
                :auto-destroy="true"
              >
                <swiper-slide
                  v-for="asset in block.imageCarouselAsset"
                  :key="asset.id"
                >
                  <div class="image">
                    <img
                      :src="getUrl(asset.url)"
                      :srcset="getSrcSet(asset.url)"
                      class="swiper-lazy"
                    />
                  </div>
                </swiper-slide>
              </swiper>
              <div
                class="carousel-button-next"
                v-bind:style="{ cursor: cursorNext }"
              ></div>
              <div
                class="carousel-button-prev"
                v-bind:style="{ cursor: cursorPrev }"
              ></div>
            </figure>
          </article>
          <article class="row">
            <figure class="column pagination">
              <div class="carousel-pagination"></div>
            </figure>
          </article>
        </section>

        <section
          class="outer-margin single-img fade-in"
          v-in-viewport.once
          :class="{ full: block.full, narrow: block.narrow }"
          v-if="block._modelApiKey === 'single_image'"
        >
          <article class="row">
            <figure
              class="column"
              :class="{ device: block.device, website: block.website }"
            >
              <div
                class="content"
                v-if="(block.device === true, block.website === true)"
                :style="{
                  backgroundColor: [
                    project.backgroundColor.hex || 'transparent'
                  ]
                }"
              >
                <div class="device-inner">
                  <div class="image" v-lazy-container="{ selector: 'img' }">
                    <img
                      :data-src="getUrl(block.image.url)"
                      :data-srcset="getSrcSet(block.image.url)"
                    />
                  </div>
                </div>
              </div>
              <div class="content" v-else>
                <div class="device-inner">
                  <div class="image" v-lazy-container="{ selector: 'img' }">
                    <img
                      :data-src="getUrl(block.image.url)"
                      :data-srcset="getSrcSet(block.image.url)"
                    />
                  </div>
                </div>
              </div>
              <figcaption v-if="block.caption.length !== 0">
                <p
                  class="cell text-container align-center markdown"
                  v-html="block.caption"
                ></p>
              </figcaption>
            </figure>
          </article>
        </section>

        <section
          class="outer-margin image-text"
          v-if="block._modelApiKey === 'image_text'"
        >
          <article class="row" v-if="block._modelApiKey === 'image_text'">
            <figure
              class="column image fade-in"
              v-in-viewport.once
              v-lazy-container="{ selector: 'img' }"
            >
              <img
                v-in-viewport.once
                class="fade-in"
                :data-src="getUrl(block.image.url)"
                :data-srcset="getSrcSet(block.image.url)"
              />
            </figure>

            <figure class="column text">
              <div class="text-container">
                <div class="heading" v-if="block.title.length !== 0">
                  <h2 class="align-center title" v-html="block.title"></h2>
                </div>
                <div v-if="block.description.length !== 0">
                  <p
                    class="column align-center body-text"
                    v-html="block.description"
                  ></p>
                </div>
              </div>
            </figure>
          </article>
        </section>

        <section
          class="outer-margin quote"
          :class="{ big: block.big }"
          v-if="block._modelApiKey === 'quote'"
        >
          <article class="row">
            <figure class="column heading" v-if="block.title.length !== 0">
              <h2 class="title markdown" v-html="block.title"></h2>
            </figure>
            <figure class="column body" v-if="block.text.length !== 0">
              <p class="body markdown" v-html="block.text"></p>
            </figure>
          </article>
        </section>

        <section
          class="outer-margin double-img"
          v-if="block._modelApiKey === 'two_up'"
          :class="{
            full: block.full,
            narrow: block.narrow,
            flip: block.flip
          }"
        >
          <article class="row">
            <figure class="column left-image">
              <div
                v-in-viewport.once
                class="image fade-in"
                v-for="image in block.firstImage"
                :key="image.id"
                v-lazy-container="{ selector: 'img' }"
              >
                <img
                  :data-src="getUrl(image.url)"
                  :data-srcset="getSrcSet(image.url)"
                />
              </div>
            </figure>
            <figure class="column right-image">
              <div
                v-in-viewport.once
                class="image fade-in"
                v-for="image in block.lastImage"
                :key="image.id"
                v-lazy-container="{ selector: 'img' }"
              >
                <img
                  :data-src="getUrl(block.lastImage.url)"
                  :data-srcset="getSrcSet(block.lastImage.url)"
                />
              </div>
              <div class="text fade-in" v-in-viewport.once>
                <p class="markdown">{{ block.textBlock }}</p>
              </div>
            </figure>
          </article>
        </section>

        <section
          class="outer-margin triple-img"
          v-if="block._modelApiKey === 'three_up'"
        >
          <article class="row">
            <figure class="column">
              <div
                class="content"
                :style="{
                  backgroundColor: [
                    project.backgroundColor.hex || 'transparent'
                  ]
                }"
              >
                <div class="image">
                  <div
                    class="device-inner fade"
                    :class="{ device: block.device }"
                    v-in-viewport.once
                    v-lazy-container="{ selector: 'img' }"
                  >
                    <div class="notch"></div>
                    <img
                      :data-src="getUrl(block.leftImage.url)"
                      :data-srcset="getSrcSet(block.leftImage.url)"
                    />
                  </div>
                </div>
                <div class="image">
                  <div
                    class="device-inner fade"
                    :class="{ device: block.device }"
                    v-in-viewport.once
                    v-lazy-container="{ selector: 'img' }"
                  >
                    <div class="notch"></div>
                    <img
                      :data-src="getUrl(block.centerImage.url)"
                      :data-srcset="getSrcSet(block.centerImage.url)"
                    />
                  </div>
                </div>
                <div class="image">
                  <div
                    class="device-inner fade"
                    :class="{ device: block.device }"
                    v-in-viewport.once
                    v-lazy-container="{ selector: 'img' }"
                  >
                    <div class="notch"></div>
                    <img
                      :data-src="getUrl(block.rightImage.url)"
                      :data-srcset="getSrcSet(block.rightImage.url)"
                    />
                  </div>
                </div>
              </div>
            </figure>
          </article>
        </section>
      </div>

      <section class="outer-margin meta" v-if="project.roles.length !== 0">
        <article class="row">
          <figure
            class="column props"
            v-for="person in project.roles"
            :key="person.id"
          >
            <p class="role">
              {{ person.role }} by
              <span class="name" v-if="person.link.length !== 0">
                <a :href="person.link" target="_blank">{{ person.name }}</a>
              </span>
              <span class="name" v-else>{{ person.name }}</span>
            </p>
          </figure>
          <figure class="column date">
            <p>
              <span>↳ &nbsp;</span>This project was launched in
              {{ project.year }}.
            </p>
          </figure>
        </article>
      </section>

      <section class="outer-margin button">
        <article class="row">
          <figure class="column">
            <router-link :to="'/'">
              <h2>⏎BACK</h2>
            </router-link>
          </figure>
        </article>
      </section>

      <section class="outer-margin similar sand">
        <article class="row">
          <figure class="column similar-list">
            <p class="title">You might like ↴</p>
            <ul>
              <li
                v-for="(projectInList, index) in projects"
                :key="index"
                :class="{ isOpen: projectInList.id === project.id }"
                :id="projectInList.id"
                v-show="projectInList.readMore === true"
              >
                <router-link :to="'/projects/' + projectInList.slug">
                  <div class="list-item">
                    <div class="heading">
                      <h1 class="title">
                        {{ projectInList.title }}
                      </h1>
                    </div>
                    <div class="tags">
                      <p
                        v-for="(category, i) in projectInList.categories"
                        :key="i"
                      >
                        {{ category.categoryType }}
                      </p>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </figure>
        </article>
      </section>
    </div>
  </div>
</template>
<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";

export default {
  name: "Project",
  beforeCreate: function() {
    document.body.className = "project";
  },
  async created() {
    this.project = await this.getProject(this.$route.params.slug);
    this.projects = await this.getAllProjects();
    this.frontpage = await this.getFrontpage();
  },
  metaInfo() {
    return {
      title: `${this.project.title} – ${this.project.subtitle} — Duties.xyz`,
      meta: [
        {
          name: "description",
          content:
            "Check out " +
            this.project.title +
            this.project.subtitle +
            " on Duties.xyz"
        },
        {
          property: "og:title",
          content: this.project.title + this.project.subtitle + " — Duties.xyz"
        },
        {
          property: "og:site_name",
          content: "Duties.xyz"
        },
        {
          property: "og:description",
          content:
            "Check out " +
            this.project.title +
            " on Duties.xyz — " +
            this.project.description
        },
        {
          property: "og:type",
          content: "profile"
        },
        {
          property: "og:image",
          content: this.project.projectThumbnail.url
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  },
  data() {
    return {
      url: process.env.URL,
      isLoading: true,
      isHidden: false,
      show: false,
      projects: [],
      project: {
        heading: "",
        title: "",
        slug: "",
        year: "",
        backgroundColor: {
          hex: ""
        },
        subtitle: "",
        readMore: "false",
        categories: [],
        client: {},
        blocks: [],
        caption: "",
        projectThumbnail: {
          url: ""
        },
        projectBanner: {
          url: ""
        },
        projectThumb: []
      },
      swiperOptions: {
        speed: 200,
        loop: true,
        centeredSlides: false,
        slidesPerView: "auto",
        grabCursor: "true",
        allowTouchMove: "true",
        threshold: 5,
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
    closeProject() {
      setTimeout(() => {
        this.$router.push("/");
      }, 500);
      setTimeout(() => {
        document.body.classList.remove("active");
      }, 1000);
    },
    async getAllProjects() {
      const { data } = await getData({
        query: gql`
          query {
            allProjects {
              id
              title
              slug
              readMore
              projectThumbnail {
                url
              }
              projectBanner {
                url
              }
              categories {
                categoryType
              }
            }
          }
        `
      });
      return data.allProjects;
    },
    async getProject(slug) {
      const { data } = await getData({
        variables: {
          slug: slug
        },
        query: gql`
          query getProject($slug: String!) {
            project(filter: { slug: { eq: $slug } }) {
              id
              title
              subtitle
              slug
              description
              year
              projectThumbnail {
                url
              }
              isDevice
              isWebsite
              projectBanner {
                url
              }
              backgroundColor {
                hex
              }
              siteLink
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
                  narrow
                  device
                  website
                  image {
                    url
                  }
                }
                ... on ImageTextRecord {
                  _modelApiKey
                  id
                  title
                  description
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
                  narrow
                  flip
                  textBlock
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
                  device
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
        `
      });
      return data.project;
    },

    getUrl(url) {
      return imgix({
        url: url
      });
    },
    getSrcSet(url) {
      return `
      ${imgix({ url: url, w: 640, q: 40 })} 640w,
        ${imgix({ url: url, w: 768, q: 50 })} 768w,
        ${imgix({ url: url, w: 1024, q: 60 })} 1024w,
        ${imgix({ url: url, w: 1366, q: 70 })} 1366w,
        ${imgix({ url: url, w: 1600, q: 80 })} 1600w,
        ${imgix({ url: url, w: 1920, q: 100 })} 1920w
      `;
    },
    scrollTo(el) {
      window.scrollTo({
        top: window.pageYOffset + el.getBoundingClientRect().top,
        behavior: "smooth"
      });
    }
  },
  computed: {
    pageName() {
      return this.$route.name;
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  }
};
</script>
