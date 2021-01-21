<template>
  <main>
    <div class="row" id="top">
      <transition name="loading">
        <section class="loading-block" v-if="isLoading">
          <article class="projectHeader">
            <nav>
              <div class="nav-item heading">
                <h2 class="loading title">XYZ<span>:</span></h2>
              </div>
            </nav>
          </article>
        </section>
      </transition>

      <div class="project-body" :class="{ 'is-loaded': !isLoading }">
        <section class="grid-block">
          <article class="grid-item nav-block">
            <figure class="text-block heading">
              <h2 class="title">
                <router-link :to="{ name: 'Home' }">
                  XYZ
                </router-link>
                <span>:</span>
                {{ project.title }}
              </h2>
            </figure>
          </article>
        </section>

        <!-- Banner Blocks -->
        <section class="grid-block">
          <article class="grid-item banner-block" v-if="project.projectBanner">
            <figure class="img-container banner-img">
              <img
                :src="getUrl(project.projectBanner.url)"
                :srcset="getSrcSet(project.projectBanner.url)"
              />
            </figure>
          </article>
          <article v-else></article>
        </section>

        <!-- Info Blocks -->
        <section class="grid-block">
          <article class="grid-item info-block">
            <figure class="text-block">
              <div class="text-container">
                <h1 class="title markdown" v-html="project.subtitle"></h1>
                <h3
                  class="body-text markdown"
                  v-html="project.description"
                  v-if="project.description.length > 0"
                ></h3>
                <div class="tags float-left">
                  <p
                    class="markdown"
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
              </div>
            </figure>
          </article>
        </section>

        <!-- Dato Blocks -->
        <section
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
                <div class="img-container fade-in" v-in-viewport.once>
                  <img
                    :src="getUrl(asset.url)"
                    :srcset="getSrcSet(asset.url)"
                  />
                </div>
              </swiper-slide>
            </swiper>
          </article>

          <!-- Single Image Block -->
          <article
            class="grid-item media-block single-img"
            :class="{ full: block.full, narrow: block.narrow }"
            v-if="block._modelApiKey === 'single_image'"
          >
            <figure>
              <div
                class="content"
                :class="{ device: block.device, website: block.website }"
              >
                <div class="device-inner">
                  <div class="img-container fade-in" v-in-viewport.once>
                    <img
                      :src="getUrl(block.image.url)"
                      :srcset="getSrcSet(block.image.url)"
                    />
                  </div>
                </div>
              </div>
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
            v-if="block._modelApiKey === 'image_text'"
          >
            <figure class="img-block">
              <div class="img-container fade-in" v-in-viewport.once>
                <img
                  v-in-viewport.once
                  class="fade-in"
                  :src="getUrl(block.image.url)"
                  :srcset="getSrcSet(block.image.url)"
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
                  <h3
                    class="align-center markdown body-text"
                    v-html="block.description"
                    v-show="block.description.length > 0"
                  ></h3>
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
            <figure class="text-block align-center">
              <div class="text-container ">
                <div class="heading">
                  <h2
                    class="title markdown"
                    v-html="block.title"
                    v-show="block.title.length > 0"
                  ></h2>
                </div>
                <h3
                  class="subtitle markdown"
                  v-html="block.subtitle"
                  v-show="block.subtitle.length > 0"
                ></h3>
                <p
                  class="body markdown"
                  v-html="block.text"
                  v-show="block.text.length > 0"
                ></p>
              </div>
            </figure>
          </article>

          <!-- Two Image Block -->
          <article
            class="grid-item media-block double-img"
            v-if="block._modelApiKey === 'two_up'"
            :class="{
              full: block.full,
              narrow: block.narrow,
              flip: block.flip
            }"
          >
            <figure class="left-image">
              <div
                v-in-viewport.once
                class="img-container fade-in"
                v-for="image in block.firstImage"
                :key="image.id"
              >
                <img :src="getUrl(image.url)" :srcset="getSrcSet(image.url)" />
              </div>
            </figure>
            <figure class="right-image">
              <div
                v-in-viewport.once
                class="img-container fade-in"
                v-for="image in block.lastImage"
                :key="image.id"
              >
                <img
                  :src="getUrl(block.lastImage.url)"
                  :srcset="getSrcSet(block.lastImage.url)"
                />
              </div>
            </figure>
          </article>

          <!-- Three Image Block -->
          <article
            class="grid-item media-block triple-img"
            v-if="block._modelApiKey === 'three_up'"
          >
            <figure>
              <div class="grid" data-layoutmethod="grid">
                <div class="content" :class="{ device: block.device }">
                  <div class="device-inner">
                    <div class="img-container fade-in" v-in-viewport.once>
                      <div class="notch"></div>
                      <img
                        :src="getUrl(block.leftImage.url)"
                        :srcset="getSrcSet(block.leftImage.url)"
                      />
                    </div>
                  </div>
                </div>
                <div class="content" :class="{ device: block.device }">
                  <div class="device-inner">
                    <div class="img-container fade-in" v-in-viewport.once>
                      <div class="notch"></div>
                      <img
                        :src="getUrl(block.centerImage.url)"
                        :srcset="getSrcSet(block.centerImage.url)"
                      />
                    </div>
                  </div>
                </div>
                <div class="content" :class="{ device: block.device }">
                  <div class="device-inner">
                    <div class="img-container fade-in" v-in-viewport.once>
                      <div class="notch"></div>
                      <img
                        :src="getUrl(block.rightImage.url)"
                        :srcset="getSrcSet(block.rightImage.url)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </figure>
          </article>
        </section>

        <!-- Meta Block -->
        <section class="grid-block" v-if="project.roles.length > 0">
          <article class="grid-item meta-block">
            <figure class="text-block">
              <h1 class="block-title markdown">
                <p>
                  For each project we work on, we are lucky to collaborate with
                  lots of talented and fun people.
                </p>
              </h1>
            </figure>

            <figure class="text-block fade-in" v-in-viewport.once>
              <div
                class="text-container"
                v-for="person in project.roles"
                :key="person.id"
              >
                <h3 class="role">
                  {{ person.role }} <span class="arrow">&rarr;</span>
                </h3>
                <h3 class="name heading" v-if="person.link.length > 0">
                  <a class="title" :href="person.link" target="_blank">{{
                    person.name
                  }}</a>
                </h3>
                <h3 class="name" v-else>
                  {{ person.name }}
                </h3>
              </div>
            </figure>
          </article>
        </section>
      </div>

      <!-- Project List Block -->
      <section class="similar-block" :class="{ 'is-loaded': !isLoading }">
        <figure class="align-center project-grid">
          <p class="title">Similar projects we have worked on...</p>
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
                  <div class="title">
                    <h1 class="title">
                      {{ projectInList.title }}
                    </h1>
                  </div>
                  <div class="tags">
                    <p
                      class="markdown"
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
      </section>

      <Footer />
    </div>
  </main>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";
import Footer from "@/components/Footer.vue";

export default {
  name: "Project",
  components: {
    Footer
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
      frontpage: [],
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
        speed: 300
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
                  subtitle
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
      ${imgix({ url: url, w: 640, q: 40 })} 640w,
        ${imgix({ url: url, w: 768, q: 40 })} 768w,
        ${imgix({ url: url, w: 1024, q: 40 })} 1024w,
        ${imgix({ url: url, w: 1366, q: 60 })} 1366w,
        ${imgix({ url: url, w: 1600, q: 60 })} 1600w,
        ${imgix({ url: url, w: 1920, q: 60 })} 1920w
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
    }, 0);
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
    document.body.className = "project";
  }
};
</script>
