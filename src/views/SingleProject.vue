<template>
  <transition name="modal">
    <main class="project" id="top">
      <div class="inner">
        <!-- Loading Component -->
        <transition name="loading">
          <div class="loading grid-container" v-if="isLoading">
            <div class="grid-x summary-block">
              <div class="loading-title">
                <h1 v-html="project.title"></h1>
              </div>
              <div class="cell imgBox" :class="project.coverSize">
                <img
                  :src="getUrl(project.projectThumbnail.url)"
                  :srcset="getSrcSet(project.projectThumbnail.url)"
                />
              </div>
              <div class="loadingBg"></div>
            </div>
          </div>
        </transition>

        <!-- Close Button -->
        <div
          class="navTop align-center"
          :class="{ isVisible: project.readMore === true }"
        >
          <transition name="closeBtn" appear>
            <div
              class="closeBtn"
              v-scroll-to="{
                el: '#top',
                container: '.project',
                duration: 500,
                easing: 'ease'
              }"
            >
              <a @click="closeProject()"><p>Close</p></a>
            </div>
          </transition>
        </div>

        <!-- Project Cover -->
        <div class="details">
          <div class="summary-block">
            <div class="cell imgBox" :class="project.coverSize">
              <img
                :src="getUrl(project.projectThumbnail.url)"
                :srcset="getSrcSet(project.projectThumbnail.url)"
              />
            </div>
          </div>

          <div
            class="scrollMe"
            :class="{ isVisible: project.readMore === true }"
          >
            <a
              href="#"
              v-scroll-to="{
                el: '#jumpTo',
                container: '.project',
                duration: 1000,
                offset: -200,
                easing: 'ease-in-out'
              }"
            >
              <p>&xrarr;</p>
            </a>
          </div>
        </div>

        <!-- Intro text -->
        <div class="grid-block">
          <div class="grid-container" id="jumpTo">
            <div class="grid-x grid-padding-x text-block align-center">
              <div class="cell text-container">
                <blockquote>
                  <!-- <h1 class="body-title" v-html="project.title"></h1> -->
                  <h3
                    class="body-text markdown "
                    v-html="project.description"
                  ></h3>

                  <a href="/" target="_blank">
                    <h3 class="body-text">
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
          <div
            class="media-block grid-container full"
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
          </div>

          <!-- Single Image Block -->
          <div
            class="media-block grid-container"
            :class="{ fluid: block.full }"
            v-if="block._modelApiKey === 'single_image'"
            v-lazy-container="{ selector: 'img' }"
          >
            <div class="grid-x grid-padding-x align-center">
              <figure
                :class="{
                  'img-container small-12 medium-9 large-9 cell': !block.full,
                  'img-container small-auto medium-auto large-auto': block.full
                }"
              >
                <img
                  :data-src="getUrl(block.image.url)"
                  :data-srcset="getSrcSet(block.image.url)"
                />
                <figcaption class="text-container align-center">
                  <p>
                    <small>
                      {{ block.caption }}
                    </small>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>

          <!-- Quote Block -->
          <div
            class="media-block grid-container"
            v-if="block._modelApiKey === 'quote'"
          >
            <div class="grid-x grid-padding-x align-center text-block">
              <div class="cell text-container">
                <blockquote>
                  <h3 class="body-title">{{ block.title }}</h3>
                  <p class="body-text">{{ block.text }}</p>
                </blockquote>
              </div>
            </div>
          </div>

          <!-- Two Image Block -->
          <div
            class="media-block grid-container double-img"
            :class="{ flip: block.flip }"
            v-if="block._modelApiKey === 'two_up'"
            v-lazy-container="{ selector: 'img' }"
          >
            <figure
              class="img-container"
              :class="{
                'left-image': block.flip,
                'right-image': !block.flip
              }"
            >
              <img
                :data-src="getUrl(block.firstImage.url)"
                :data-srcset="getSrcSet(block.firstImage.url)"
              />
              <figcaption>
                <p>{{ block.firstImage.title }}</p>
              </figcaption>
            </figure>
            <figure
              class="img-container"
              :class="{
                'right-image': block.flip,
                'left-image': !block.flip
              }"
            >
              <img
                :data-src="getUrl(block.lastImage.url)"
                :data-srcset="getSrcSet(block.lastImage.url)"
              />
            </figure>
          </div>

          <!-- Three Image Block -->
          <div
            class="media-block grid-container triple-img"
            v-if="block._modelApiKey === 'three_up'"
            v-lazy-container="{ selector: 'img' }"
          >
            <figure class="img-container left-image">
              <img
                :data-src="getUrl(block.leftImage.url)"
                :data-srcset="getSrcSet(block.leftImage.url)"
              />
            </figure>
            <figure class="img-container center-image">
              <img
                :data-src="getUrl(block.middleImage.url)"
                :data-srcset="getSrcSet(block.middleImage.url)"
              />
            </figure>
            <figure class="img-container right-image">
              <img
                :data-src="getUrl(block.rightImage.url)"
                :data-srcset="getSrcSet(block.rightImage.url)"
              />
            </figure>
          </div>
        </div>

        <!-- Project Meta Block -->
        <div class="grid-block">
          <div class="grid-y grid-padding-x text-block">
            <div class="text-container cell">
              <blockquote>
                <h3 class="body-title">On-duty</h3>
                <div class="body-text">
                  <p v-for="(block, i) in project.roles" :key="i">
                    {{ block.role }} by
                    <a :href="block.link" target="_blank">
                      {{ block.name }}
                    </a>
                  </p>
                </div>
              </blockquote>
            </div>
            <div class="text-container" v-if="!project.categories.length"></div>
            <div class="text-container cell" v-else>
              <blockquote>
                <h3 class="body-title">Deliverables</h3>
                <div class="body-text">
                  <p v-for="(category, i) in project.categories" :key="i">
                    {{ category.categoryType }}
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <!-- Project List Block -->
      <div class="similar-block">
        <div class="grid-container">
          <div class="grid-x grid-padding-x align-center">
            <div class="cell shrink">
              <ul>
                <p>Selected Works</p>
                <li
                  v-for="(projectInList, i) in projects"
                  :key="i"
                  :class="{ isOpen: projectInList.id === project.id }"
                  :id="projectInList.id"
                  v-show="projectInList.readMore === true"
                >
                  <router-link :to="'/projects/' + projectInList.slug">
                    <h1>
                      {{ projectInList.title }}
                    </h1>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  </transition>
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
  data() {
    return {
      isLoading: true,
      show: false,
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
        projectThumbnail: { url: "" }
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
              blocks {
                ... on SingleImageRecord {
                  id
                  _modelApiKey
                  caption
                  full
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
                  flip
                }
                ... on ThreeUpRecord {
                  id
                  _modelApiKey
                  leftImage {
                    url
                  }
                  middleImage {
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
      ${imgix({ url: url, w: 1024, q: 60 })} 1024w,
      ${imgix({ url: url, w: 1366, q: 60 })} 1366w,
      ${imgix({ url: url, w: 1600, q: 60 })} 1600w,
      ${imgix({ url: url, w: 1920, q: 60 })} 1920w,
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
    const lastPosition = { x: 0, y: 0 };
    // eslint-disable-next-line no-unused-vars
    document.querySelector(".my-page .page__content").onscroll = (e, v) => {
      lastPosition.y = e.target.scrollTop;
    };
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
