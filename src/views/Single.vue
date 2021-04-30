<template>
  <div class="single-project">
    <transition name="loadProject" mode="out-in">
      <section class="outer-margin loading" v-show="isLoading">
        <article class="row nav">
          <figure class="column">
            <div class="nav-item">
              <h3 class="title blinking hide-for-small-only">
                Duties<span>:</span>
              </h3>
              <h3 class="title blinking show-for-small-only">
                XYZ<span>:</span>
              </h3>
            </div>
          </figure>
        </article>
      </section>
    </transition>

    <div class="bar" :class="{ 'is-loaded': !isLoading }">
      <section class="outer-margin section topNav">
        <article class="row nav">
          <figure class="column">
            <h3
              @click="e => closeProject(e)"
              :class="{ inverted: project.inverted === true }"
            >
              Close
            </h3>
          </figure>
        </article>
      </section>

      <section class="outer-margin section banner">
        <article class="row nav">
          <figure class="column">
            <h3
              @click="e => closeProject(e)"
              class="title hide-for-small-only"
              :class="{ inverted: project.inverted === true }"
            >
              Duties:
            </h3>
            <h3
              @click="e => closeProject(e)"
              class="title show-for-small-only"
              :class="{ inverted: project.inverted === true }"
            >
              XYZ:
            </h3>

            <h3
              class="page-title"
              :class="{ inverted: project.inverted === true }"
            >
              {{ project.title }}
            </h3>
          </figure>
        </article>
        <img
          :src="getUrl(project.projectBanner.url)"
          :srcset="getSrcSet(project.projectBanner.url)"
        />
        <article class="row hide">
          <figure class="column image">
            <img
              :src="getUrl(project.projectBanner.url)"
              :srcset="getSrcSet(project.projectBanner.url)"
            />
          </figure>
        </article>
      </section>

      <!-- Project Info -->

      <section class="outer-margin info">
        <article class="row info-block">
          <figure class="header hide-for-small-only">
            <p>
              Project <br />
              Information
            </p>
          </figure>

          <figure class="column main">
            <div class="column header">
              <h3 class="markdown" v-html="project.description"></h3>
            </div>

            <div class="body">
              <div class="legend hide-for-small-only">
                <div class="header">
                  <p>Capabilites</p>
                </div>
                <div
                  class="number"
                  v-for="(category, i) in project.categories"
                  :key="i"
                >
                  <p class="num" v-html="category.categoryNumber"></p>
                  <p class="markdown type" v-html="category.categoryType"></p>
                </div>
              </div>
              <div class="copy">
                <h3 class="markdown" v-html="project.description"></h3>
              </div>
              <div class="link">
                <p>
                  <a :href="project.siteLink" target="_blank">
                    Visit site
                  </a>
                </p>
              </div>
            </div>
          </figure>
        </article>
      </section>

      <div
        class="modular-block"
        v-for="block in project.blocks"
        :key="block.id"
      >
        <section
          class="outer-margin image-carousel"
          v-if="block._modelApiKey === 'image_carousel'"
        >
          <article class="row swiper slider">
            <figure class="carousel-block">
              <figure class="column carousel">
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
                    <div class="slide-img">
                      <img
                        :src="getUrl(asset.url)"
                        :srcset="getSrcSet(asset.url)"
                      />
                    </div>
                  </swiper-slide>
                </swiper>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
              </figure>
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
              <figcaption v-if="block.caption && block.caption.length">
                <p
                  class="cell text-container align-center markdown"
                  v-html="block.caption"
                ></p>
              </figcaption>
            </figure>
          </article>
        </section>

        <section
          class="outer-margin video"
          v-if="block._modelApiKey === 'video'"
        >
          <article class="row">
            <figure class="column">
              <div class="content">
                <video
                  :src="getUrl(block.video.url)"
                  muted
                  autoplay
                  loop
                  playsinline
                ></video>
              </div>
            </figure>
          </article>
        </section>

        <section
          class="outer-margin image-text"
          v-if="block._modelApiKey === 'image_text'"
        >
          <article class="row">
            <figure
              class="column image fade-in"
              v-in-viewport.once
              v-lazy-container="{ selector: 'img' }"
            >
              <img
                :data-src="getUrl(block.image.url)"
                :data-srcset="getSrcSet(block.image.url)"
              />
            </figure>

            <figure class="column text">
              <div class="text-container">
                <div class="heading" v-if="block.title && block.title.length">
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
          <article class="row fade-in" v-in-viewport.once>
            <figure
              class="column heading"
              v-if="block.title && block.title.length"
            >
              <h3 class="markdown" v-html="block.title"></h3>
            </figure>
            <figure class="column body" v-if="block.text && block.text.length">
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
            <figure class="column left-image fade-in" v-in-viewport.once>
              <div
                class="image"
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
            <figure class="column right-image fade-in" v-in-viewport.once>
              <div
                class="image"
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
          <article class="row fade-in" v-in-viewport.once>
            <figure class="column">
              <div class="content">
                <div class="image fade-in" v-in-viewport.once>
                  <div
                    class="device-inner"
                    :class="{ device: block.device }"
                    v-lazy-container="{ selector: 'img' }"
                  >
                    <div class="notch"></div>
                    <img
                      :data-src="getUrl(block.leftImage.url)"
                      :data-srcset="getSrcSet(block.leftImage.url)"
                    />
                  </div>
                </div>
                <div class="image fade-in" v-in-viewport.once>
                  <div
                    class="device-inner"
                    :class="{ device: block.device }"
                    v-lazy-container="{ selector: 'img' }"
                  >
                    <div class="notch"></div>
                    <img
                      :data-src="getUrl(block.centerImage.url)"
                      :data-srcset="getSrcSet(block.centerImage.url)"
                    />
                  </div>
                </div>
                <div class="image fade-in" v-in-viewport.once>
                  <div
                    class="device-inner"
                    :class="{ device: block.device }"
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

      <section
        class="outer-margin meta"
        v-if="project.roles && project.roles.length"
      >
        <article class="row">
          <figure class="column props">
            <p>Extra duties:</p>
          </figure>
          <figure
            class="column props"
            v-for="person in project.roles"
            :key="person.id"
          >
            <p class="role">
              &rarr; {{ person.role }} by
              <span class="name" v-if="person.link && person.link.length">
                <a :href="person.link" target="_blank">{{ person.name }}</a>
              </span>
              <span class="name" v-else>{{ person.name }}</span>
            </p>
          </figure>
        </article>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";
import marked from "marked";
import Footer from "@/components/Footer.vue";

export default {
  async created() {
    this.project = await this.getProject(this.$route.params.slug);
    this.projects = await this.getAllProjects();
  },
  metaInfo() {
    return {
      title: `${this.project.title} — Duties.xyz`,
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
  components: {
    Footer
  },
  data() {
    return {
      url: process.env.URL,
      isLoading: true,
      isHidden: false,
      showNavbar: true,
      lastScrollPosition: 0,
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
        inverted: "false",
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
        loop: true,
        slidesPerView: "auto",
        pagination: {
          el: ".foo-pagination",
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
    async getAllProjects() {
      const { data } = await getData({
        query: gql`
          query {
            _allProjectsMeta {
              count
            }
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
              inverted
              projectBanner {
                url
              }
              backgroundColor {
                hex
              }
              siteLink
              readMore
              categories {
                categoryNumber
                categoryType
                categoryIcon {
                  url
                }
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
                ... on VideoRecord {
                  _modelApiKey
                  video {
                    url
                    video {
                      streamingUrl
                      thumbnailUrl(format: jpg)
                    }
                  }
                }
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
    closeProject(e) {
      e.preventDefault();
      setTimeout(() => {
        this.$router.push("/");
      }, 1000);
    },
    getMarkdown(content) {
      return marked(content);
    },
    showMenu() {
      document.body.classList.add("showMenu");
    },
    hideMenu() {
      document.body.classList.remove("showMenu");
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
        ${imgix({ url: url, w: 1600, q: 70 })} 1600w,
        ${imgix({ url: url, w: 1920, q: 70 })} 1920w
      `;
    }
  },
  mounted() {
    document.body.classList.add("page-single");

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

    window.addEventListener("scroll", this.onScroll);
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  destroyed: function() {
    document.body.classList.remove("page-single");
  }
};
</script>
