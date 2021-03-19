<template>
  <div class="single-project">
    <transition name="loadProject" mode="in-out">
      <section class="outer-margin loading" v-if="isLoading">
        <article class="row nav">
          <figure class="column">
            <div class="nav-item heading">
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
      <section class="outer-margin header">
        <article class="row nav">
          <figure class="column heading">
            <h3
              @click="e => closeProject(e)"
              class="title hide-for-small-only"
              :class="{ inverted: project.inverted === true }"
            >
              Duties:
            </h3>
            <h3
              class="title show-for-small-only"
              :class="{ inverted: project.inverted === true }"
            >
              XYZ:
            </h3>

            <h3
              class="title page-title"
              :class="{ inverted: project.inverted === true }"
            >
              {{ project.title }}
            </h3>
          </figure>
        </article>
      </section>

      <!-- Project Banner -->
      <section class="outer-margin banner">
        <article
          class="row"
          v-if="project.projectBanner && project.projectBanner.url.length"
        >
          <figure class="column image banner-img">
            <img
              :src="getUrl(project.projectBanner.url)"
              :srcset="getSrcSet(project.projectBanner.url)"
            />
          </figure>
        </article>
        <article v-else></article>
      </section>

      <!-- Project Info -->
      <section class="outer-margin info">
        <article class="row project-info">
          <figure class="column body">
            <h3 class="markdown" v-html="project.description"></h3>
          </figure>
          <figure class="column heading tag">
            <p
              class="number"
              v-for="(category, i) in project.categories"
              :key="i"
            >
              <span class="markdown" v-html="category.categoryNumber"></span>
              <span>{{ category.categoryType }}</span>
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
          <article class="row swiper">
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
                        class="swiper-lazy"
                      />
                    </div>
                  </swiper-slide>
                </swiper>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
              </figure>
            </figure>
          </article>
          <article class="row content">
            <figure class="column counter">
              <div class="swiper-pagination"></div>
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
                  <div class="image">
                    <img
                      :src="getUrl(block.image.url)"
                      :srcset="getSrcSet(block.image.url)"
                    />
                  </div>
                </div>
              </div>
              <div class="content" v-else>
                <div class="device-inner">
                  <div class="image">
                    <img
                      :src="getUrl(block.image.url)"
                      :srcset="getSrcSet(block.image.url)"
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
          class="outer-margin video fade-in"
          v-in-viewport.once
          v-if="block._modelApiKey === 'video'"
        >
          <article class="row">
            <figure class="column">
              <div class="content">
                <div class="device-inner">
                  <video id="video" autoplay muted loop :key="video">
                    <source
                      id="mp4"
                      :src="getUrl(block.video.url)"
                      type="video/mp4"
                    />
                    <source
                      id="webm"
                      :src="getUrl(block.video.url)"
                      type="video/webm"
                    />
                    <source
                      id="mov"
                      :src="getUrl(block.video.url)"
                      type="video/mov"
                    />
                  </video>
                </div>
              </div>
            </figure>
          </article>
        </section>

        <section
          class="outer-margin image-text"
          v-if="block._modelApiKey === 'image_text'"
        >
          <article class="row" v-if="block._modelApiKey === 'image_text'">
            <figure class="column image fade-in" v-in-viewport.once>
              <img
                v-in-viewport.once
                class="fade-in"
                :src="getUrl(block.image.url)"
                :srcset="getSrcSet(block.image.url)"
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
          <article class="row">
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
            <figure class="column left-image">
              <div
                v-in-viewport.once
                class="image fade-in"
                v-for="image in block.firstImage"
                :key="image.id"
              >
                <img :src="getUrl(image.url)" :srcset="getSrcSet(image.url)" />
              </div>
            </figure>
            <figure class="column right-image">
              <div
                v-in-viewport.once
                class="image fade-in"
                v-for="image in block.lastImage"
                :key="image.id"
              >
                <img
                  :src="getUrl(block.lastImage.url)"
                  :srcset="getSrcSet(block.lastImage.url)"
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
              <div class="content">
                <div class="image">
                  <div
                    class="device-inner fade"
                    :class="{ device: block.device }"
                    v-in-viewport.once
                  >
                    <div class="notch"></div>
                    <img
                      :src="getUrl(block.leftImage.url)"
                      :srcset="getSrcSet(block.leftImage.url)"
                    />
                  </div>
                </div>
                <div class="image">
                  <div
                    class="device-inner fade"
                    :class="{ device: block.device }"
                    v-in-viewport.once
                  >
                    <div class="notch"></div>
                    <img
                      :src="getUrl(block.centerImage.url)"
                      :srcset="getSrcSet(block.centerImage.url)"
                    />
                  </div>
                </div>
                <div class="image">
                  <div
                    class="device-inner fade"
                    :class="{ device: block.device }"
                    v-in-viewport.once
                  >
                    <div class="notch"></div>
                    <img
                      :src="getUrl(block.rightImage.url)"
                      :srcset="getSrcSet(block.rightImage.url)"
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
          <figure
            class="column props"
            v-for="person in project.roles"
            :key="person.id"
          >
            <p class="role">
              {{ person.role }} by
              <span class="name" v-if="person.link && person.link.length">
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

      <section class="outer-margin similar hide">
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
    this.frontpage = await this.getFrontpage();
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
        speed: 200,
        slidesPerView: "auto",
        loop: true,
        loopedSlides: 50000,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          renderFraction: function(currentClass, totalClass) {
            return (
              '<span class="' +
              currentClass +
              '"></span>' +
              " of " +
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
                  id
                  video {
                    url
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
    },
    scrollTo(el) {
      window.scrollTo({
        top: window.pageYOffset + el.getBoundingClientRect().top,
        behavior: "smooth"
      });
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
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  beforeCreate() {
    document.body.classList.add("page-project");
  }
};
</script>
