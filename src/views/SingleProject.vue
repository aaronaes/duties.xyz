<template>
  <main class="feed" id="top">
    <div class="inner">
      <transition name="loading">
        <div class="loading-block" v-if="isLoading">
          <div class="projectHeader">
            <nav>
              <div class="nav-item">
                <h2 class="loading">Loading</h2>
              </div>
              <div class="nav-item">
                <h2 v-html="project.title"></h2>
              </div>
            </nav>
          </div>
        </div>
      </transition>

      <div class="project-body" :class="{ 'is-loaded': !isLoading }">
        <div
          class="projectHeader"
          :class="{ isVisible: project.readMore === true }"
        >
          <nav class="align-middle" :class="{ 'is-loaded': !isLoading }">
            <div class="nav-item">
              <h2>
                <router-link :to="{ name: 'Home' }">
                  Close

                  <svg
                    width="525"
                    height="146"
                    viewBox="0 0 525 146"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M203.038 5.71637C207.038 5.71637 489.038 -13.2836 519.038 49.2164C549.038 111.716 296.538 139.716 252.038 141.216C207.538 142.716 6.53841 148.716 3.03841 93.2163C0.238414 48.8163 151.205 26.383 227.038 20.7163C281.705 18.383 401.338 19.9163 442.538 44.7163"
                      stroke="#E5594D"
                      class="path"
                      stroke-width="6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </router-link>
              </h2>
            </div>
          </nav>
        </div>

        <div class="grid-block">
          <div class="grid-item details">
            <div class="text-block">
              <div class="text-container">
                <blockquote>
                  <h1 class="body-title title">
                    {{ project.title }}
                  </h1>
                </blockquote>
                <blockquote>
                  <h2
                    class="body-text markdown"
                    v-html="project.description"
                  ></h2>
                  <a class="hide" href="/" target="_blank">
                    <h3>
                      Visit site
                    </h3>
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
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <!-- Dato Blocks -->
        <div v-for="block in project.blocks" :key="block.id" class="grid-block">
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
                <img :src="getUrl(asset.url)" :srcset="getSrcSet(asset.url)" />
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
              class="img-container box"
              :class="{ device: block.device, website: block.website }"
              v-in-viewport.once
            >
              <img
                :data-src="getUrl(block.image.url)"
                :data-srcset="getSrcSet(block.image.url)"
              />
              <figcaption v-if="block.caption.length > 0">
                <p
                  class="cell text-container align-center markdown"
                  v-html="block.caption"
                ></p>
              </figcaption>
            </figure>
          </article>

          <!-- Image + Text Block -->
          <article
            class="grid-item media-block image-text"
            :class="{ flip: block.flip }"
            v-if="block._modelApiKey === 'image_text'"
            v-lazy-container="{ selector: 'img' }"
          >
            <figure class="img-container">
              <div
                class="box"
                v-for="asset in block.imageAsset"
                :key="asset.id"
                v-in-viewport.once
              >
                <img
                  :data-src="getUrl(asset.url)"
                  :data-srcset="getSrcSet(asset.url)"
                />
              </div>
            </figure>
            <figure class="align-center text-block box" v-in-viewport.once>
              <div class="text-container">
                <blockquote>
                  <h2 class="body-text title markdown">Title</h2>
                  <h2 class="body-text title subtitle markdown">Subtitle</h2>

                  <h2
                    class="align-center markdown body-title title"
                    v-html="block.title"
                    v-show="block.title.length > 0"
                  ></h2>
                  <p
                    class="align-center markdown body-text"
                    v-html="block.description"
                    v-show="block.description.length > 0"
                  ></p>
                  <ul>
                    <li>
                      <p>
                        Default glyphs for CSS list style types - Stack Overflow
                      </p>
                    </li>
                    <li>
                      <p>
                        Default glyphs for CSS list style types - Stack Overflow
                      </p>
                    </li>
                    <li>
                      <p>
                        Default glyphs for CSS list style types - Stack Overflow
                      </p>
                    </li>
                  </ul>
                </blockquote>
              </div>
            </figure>
          </article>

          <!-- Quote Block -->
          <article
            class="grid-item quote-block"
            :class="{ big: block.big }"
            v-if="block._modelApiKey === 'quote'"
          >
            <div class="align-center text-block">
              <div class="text-container box" v-in-viewport.once>
                <blockquote>
                  <h1 class="body-text title markdown">Title</h1>
                  <h1 class="body-text title subtitle markdown">Subtitle</h1>
                  <h3 class="body-text markdown" v-html="block.text"></h3>
                </blockquote>
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
              class="img-container box"
              v-in-viewport.once
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
              class="img-container box"
              v-in-viewport.once
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
            <div class="grid">
              <figure
                class="img-container left-image box"
                v-in-viewport.once
                :class="{ device: block.device }"
              >
                <div class="device-inner ">
                  <img
                    :data-src="getUrl(block.leftImage.url)"
                    :data-srcset="getSrcSet(block.leftImage.url)"
                  />
                </div>
              </figure>
              <figure
                class="img-container center-image box"
                v-in-viewport.once
                :class="{ device: block.device }"
              >
                <div class="device-inner ">
                  <img
                    :data-src="getUrl(block.centerImage.url)"
                    :data-srcset="getSrcSet(block.centerImage.url)"
                  />
                </div>
              </figure>
              <figure
                class="img-container right-image box"
                v-in-viewport.once
                :class="{ device: block.device }"
              >
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

        <!-- Project Meta Block -->
        <div class="grid-block">
          <div class="grid-item meta-block">
            <div
              class="text-block align-center box"
              v-in-viewport.once
              v-if="project.roles.length > 0"
            >
              <div class="text-container roles">
                <blockquote>
                  <h1 class="body-text title">On-duty</h1>
                  <h3
                    class="body-text"
                    v-for="(roles, i) in project.roles"
                    :key="i"
                  >
                    {{ roles.role }} by
                    <a :href="roles.link" target="_blank">
                      {{ roles.name }}
                    </a>
                  </h3>
                </blockquote>
              </div>
            </div>
            <div
              class="text-block align-center box"
              v-in-viewport.once
              v-if="project.categories.length > 0"
            >
              <div class="text-container categories">
                <blockquote>
                  <h1 class="body-text title">Deliverables</h1>
                  <h3
                    class="body-text markdown"
                    v-for="(category, i) in project.categories"
                    :key="i"
                  >
                    {{ category.categoryType }}
                  </h3>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Meta Block -->
        <!-- <div class="grid-block">
          <div class="grid-item links">
            <div class="text-block">
              <div class="text-container">
                <blockquote>
                  <a :href="project.siteLink" target="_blank">
                    <h3>
                      Visit site
                    </h3>
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
                </blockquote>
              </div>
            </div>
          </div>
        </div> -->
      </div>

      <!-- Project List Block -->
      <div class="similar-block">
        <div class="viewAll">
          <nav class="align-middle">
            <div class="nav-item">
              <h2>
                <router-link to="/projects">
                  Index

                  <svg
                    width="525"
                    height="146"
                    viewBox="0 0 525 146"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M203.038 5.71637C207.038 5.71637 489.038 -13.2836 519.038 49.2164C549.038 111.716 296.538 139.716 252.038 141.216C207.538 142.716 6.53841 148.716 3.03841 93.2163C0.238414 48.8163 151.205 26.383 227.038 20.7163C281.705 18.383 401.338 19.9163 442.538 44.7163"
                      stroke="#E5594D"
                      class="path"
                      stroke-width="6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </router-link>
              </h2>
            </div>
          </nav>
        </div>
        <article class="grid-item">
          <figure class="project-grid align-center">
            <ul>
              <li
                v-for="(projectInList, index) in projects"
                :key="index"
                :class="{ isOpen: projectInList.id === project.id }"
                :id="projectInList.id"
                v-show="projectInList.readMore === true"
                class="box"
                v-in-viewport.once
              >
                <router-link :to="'/projects/' + projectInList.slug">
                  <h1 class="title">
                    {{ projectInList.title }}
                  </h1>
                </router-link>
              </li>
            </ul>
          </figure>
        </article>
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
                  big
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
