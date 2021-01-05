<template>
  <main class="feed" id="top">
    <div class="inner">
      <transition name="loading">
        <div class="loading-block" v-if="isLoading">
          <div class="projectHeader">
            <nav>
              <div class="nav-item">
                <h1 class="loading heading title">Loading</h1>
              </div>
              <div class="nav-item">
                <h1 class="heading title" v-html="project.title"></h1>
              </div>
            </nav>
          </div>
        </div>
      </transition>

      <transition name="loading">
        <div class="project-body" :class="{ 'is-loaded': !isLoading }">
          <div class="grid-block">
            <div class="grid-item project-block">
              <div class="text-block">
                <figure class="heading">
                  <h2 class="title">
                    <router-link :to="{ name: 'Home' }">
                      XYZ
                    </router-link>
                    <span class="arrow">&larr;</span>
                    {{ project.title }}
                  </h2>
                </figure>
              </div>
            </div>
          </div>

          <div class="grid-block">
            <article class="grid-item banner-block">
              <figure class="img-container banner-img">
                <img
                  :src="getUrl(project.projectBanner.url)"
                  :srcset="getSrcSet(project.projectBanner.url)"
                />
              </figure>
            </article>
          </div>

          <div class="grid-block">
            <div class="grid-item project-block">
              <div class="text-block">
                <figure class="text-container">
                  <h2
                    class="body-text markdown"
                    v-html="project.description"
                  ></h2>
                  <div class="tags float-left">
                    <p
                      class="body-text markdown"
                      v-for="(category, i) in project.categories"
                      :key="i"
                    >
                      {{ category.categoryType }}
                    </p>
                  </div>
                  <a class="hide" href="/" target="_blank">
                    <p>
                      Visit site
                    </p>
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
              </div>
            </div>
          </div>

          <!-- Dato Blocks -->
          <div
            v-for="block in project.blocks"
            :key="block.id"
            class="grid-block"
          >
            <!-- Carousel Block -->
            <article
              class="grid-item media-block image-carousel"
              v-if="block._modelApiKey === 'image_carousel'"
            >
              <swiper
                ref="mySwiper"
                :options="swiperOptions"
                :auto-update="true"
                :auto-destroy="true"
                @slideChange="changeSwiperIndex"
              >
                <swiper-slide
                  v-for="asset in block.imageCarouselAsset"
                  :key="asset.id"
                >
                  <img
                    :src="getUrl(asset.url)"
                    :srcset="getSrcSet(asset.url)"
                  />
                </swiper-slide>
              </swiper>
            </article>

            <!-- Single Image Block -->
            <article
              class="grid-item media-block single-img"
              :class="{ bleed: block.full }"
              v-if="block._modelApiKey === 'single_image'"
              v-lazy-container="{ selector: 'img' }"
            >
              <figure
                class="img-container "
                :class="{ device: block.device, website: block.website }"
              >
                <img
                  :data-src="getUrl(block.image.url)"
                  :data-srcset="getSrcSet(block.image.url)"
                />
              </figure>
              <figcaption v-if="block.caption.length > 0">
                <p
                  class="cell text-container align-center markdown"
                  v-html="block.caption"
                ></p>
              </figcaption>
            </article>

            <!-- Image + Text Block -->
            <article
              class="grid-item media-block image-text"
              :class="{ flip: block.flip }"
              v-if="block._modelApiKey === 'image_text'"
              v-lazy-container="{ selector: 'img' }"
            >
              <figure class="img-block">
                <div
                  class="img-container "
                  v-for="asset in block.imageAsset"
                  :key="asset.id"
                >
                  <img
                    :data-src="getUrl(asset.url)"
                    :data-srcset="getSrcSet(asset.url)"
                  />
                </div>
              </figure>
              <figure class="align-center text-block ">
                <div class="text-container">
                  <div class="heading">
                    <h2
                      class="align-center markdown title"
                      v-html="block.title"
                      v-show="block.title.length > 0"
                    ></h2>
                  </div>
                  <div>
                    <p
                      class="align-center markdown body-text"
                      v-html="block.description"
                      v-show="block.description.length > 0"
                    ></p>
                  </div>
                </div>
              </figure>
            </article>

            <!-- Quote Block -->
            <article
              class="grid-item quote-block"
              :class="{ big: block.big }"
              v-if="block._modelApiKey === 'quote'"
            >
              <div class="text-block align-center">
                <div class="text-container ">
                  <div class="heading">
                    <h2
                      class="title markdown"
                      v-html="block.title"
                      v-show="block.title.length > 0"
                    ></h2>
                    <h3
                      class="body-text body markdown"
                      v-html="block.text"
                    ></h3>
                  </div>
                </div>
              </div>
            </article>

            <!-- Two Image Block -->
            <article
              class="grid-item media-block double-img"
              :class="{ flip: block.flip }"
              v-if="block._modelApiKey === 'two_up'"
              v-lazy-container="{ selector: 'img' }"
            >
              <figure
                class="img-container "
                :class="{
                  'left-image': !block.flip,
                  'right-image': block.flip
                }"
              >
                <img
                  :data-src="getUrl(block.firstImage.url)"
                  :data-srcset="getSrcSet(block.firstImage.url)"
                />
              </figure>
              <figure
                class="img-container "
                :class="{
                  'left-image': block.flip,
                  'right-image': !block.flip
                }"
              >
                <img
                  :data-src="getUrl(block.lastImage.url)"
                  :data-srcset="getSrcSet(block.lastImage.url)"
                />
              </figure>
            </article>

            <!-- Three Image Block -->
            <article
              class="grid-item media-block triple-img"
              v-if="block._modelApiKey === 'three_up'"
              v-lazy-container="{ selector: 'img' }"
            >
              <div class="grid" data-layoutmethod="grid">
                <figure class="img-container" :class="{ device: block.device }">
                  <div class="device-inner ">
                    <img
                      :data-src="getUrl(block.leftImage.url)"
                      :data-srcset="getSrcSet(block.leftImage.url)"
                    />
                  </div>
                </figure>
                <figure class="img-container" :class="{ device: block.device }">
                  <div class="device-inner ">
                    <img
                      :data-src="getUrl(block.centerImage.url)"
                      :data-srcset="getSrcSet(block.centerImage.url)"
                    />
                  </div>
                </figure>
                <figure class="img-container" :class="{ device: block.device }">
                  <div class="device-inner ">
                    <img
                      :data-src="getUrl(block.rightImage.url)"
                      :data-srcset="getSrcSet(block.rightImage.url)"
                    />
                  </div>
                </figure>
              </div>
            </article>
          </div>
        </div>
      </transition>
      <!-- Project List Block -->
      <div class="similar-block">
        <figure class="align-center project-grid">
          <ul>
            <li
              v-for="(projectInList, index) in projects"
              :key="index"
              :class="{ isOpen: projectInList.id === project.id }"
              :id="projectInList.id"
              v-show="projectInList.readMore === true"
              class=""
            >
              <router-link :to="'/projects/' + projectInList.slug">
                <div class="project-content heading">
                  <h1 class="title">
                    {{ projectInList.title }}
                  </h1>
                  <div class="tags">
                    <p
                      class="body-text markdown"
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
      </div>
    </div>
  </main>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";

export default {
  name: "Project",
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
          content: "Check out " + this.project.title + " on Duties.xyz"
        },
        { property: "og:title", content: this.project.title + " — Duties.xyz" },
        { property: "og:site_name", content: "Duties.xyz" },
        {
          property: "og:description",
          content:
            "Check out " +
            this.project.title +
            " on Duties.xyz — " +
            this.project.description
        },
        { property: "og:type", content: "profile" },
        {
          property: "og:image",
          content: this.project.projectThumbnail.url
        }
      ]
    };
  },
  data() {
    return {
      isLoading: true,
      isHidden: false,
      show: false,
      url: process.env.URL,
      projects: [],
      project: {
        heading: "",
        title: "",
        slug: "",
        backgroundColor: { hex: "" },
        subtitle: "",
        readMore: "false",
        categories: [],
        client: {},
        blocks: [],
        caption: "",
        coverSize: "",
        projectThumbnail: { url: "" },
        projectBanner: { url: "" },
        projectThumb: []
      },
      swiperOptions: {
        slidesPerView: "auto",
        loop: false,
        grabCursor: true,
        speed: 600
      }
    };
  },
  methods: {
    closeProject() {
      setTimeout(() => {
        this.$router.push("/");
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
              coverSize
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
        variables: { slug: slug },
        query: gql`
          query getProject($slug: String!) {
            project(filter: { slug: { eq: $slug } }) {
              id
              title
              subtitle
              slug
              description
              coverSize
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
                  imageAsset {
                    url
                    id
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
                  flip
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
    changeSwiperIndex() {
      this.$refs.mySwiper.$swiper.activeIndex;
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
  }
};
</script>
