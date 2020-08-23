<style>
.project {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  overflow-y: scroll;
}
</style>

<template>
  <div
    class="project"
    :style="{ 'background-color': project.backgroundColor.hex || 'initial' }"
  >
    <div class="closeBtn">
      <router-link to="/">Close</router-link>
    </div>

    <div class="summary grid-container">
      <div class="imgBox" :class="project.coverSize">
        <img class="cover" :src="getUrl(project.projectThumbnail.url)" />
      </div>
    </div>

    <div class="content grid-container">
      <div class="grid-x description">
        <div class="columns">
          <h2 v-html="project.description"></h2>
          <h2 class="this">
            <a href="/" target="_blank">Visit site</a>
          </h2>
        </div>
      </div>

      <div class="grid-x meta">
        <div class="columns">
          <p class="title">Service</p>
        </div>
        <div class="columns">
          <p
            v-for="(category, i) in project.categories"
            :key="i"
            class="float-left"
          >
            {{ category.categoryType }}
          </p>
        </div>
      </div>
    </div>

    <div v-for="block in project.blocks" :key="block.id">
      <div
        class="content grid-container fluid"
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
            <div
              class="swiper-slide-container"
              v-lazy-container="{ selector: 'img' }"
            >
              <img
                :data-src="getUrl(asset.url)"
                :data-srcset="getSrcSet(asset.url)"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div
        class="content grid-container"
        :class="{ fluid: block.full }"
        v-if="block._modelApiKey === 'single_image'"
        v-lazy-container="{ selector: 'img' }"
      >
        <div class="grid-x img-container align-center">
          <div
            :class="{
              'large-8 medium-10 small-12': !block.full,
              cell: block.full
            }"
          >
            <img
              :data-src="getUrl(block.image.url)"
              :data-srcset="getSrcSet(block.image.url)"
            />
          </div>
        </div>
      </div>

      <div
        class="content grid-container"
        v-if="block._modelApiKey === 'double_image'"
        v-lazy-container="{ selector: 'img' }"
      >
        <div class="grid-x img-container align-center">
          <div class="cell large-6 medium-8 small-12">
            <img
              :data-src="getUrl(block.firstImage.url)"
              :data-srcset="getSrcSet(block.firstImage.url)"
            />
          </div>
          <div class="cell large-6 medium-8 small-12">
            <img
              class="small-12 medium-6 large-5"
              :data-src="getUrl(block.lastImage.url)"
              :data-srcset="getSrcSet(block.lastImage.url)"
            />
          </div>
        </div>
      </div>
    </div>
    <ul>
      <p class="cell">Selected Works</p>
      <li
        v-for="(p, i) in projects"
        :key="i"
        :class="{ isOpen: p.id === project.id }"
        :id="p.id"
      >
        <router-link v-if="p.readMore" class="jump" :to="'lightbox/' + p.slug">
          {{ p.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";

export default {
  name: "gl",
  async created() {
    this.project = await this.getProject(this.$route.params.slug);
    this.projects = await this.getProjects();
  },
  data() {
    return {
      projects: [],
      project: {
        heading: "",
        title: "",
        slug: "",
        backgroundColor: { hex: "" },
        subtitle: "",
        readMore: false,
        categories: [],
        client: {},
        blocks: [],
        description: "",
        coverSize: "",
        projectThumbnail: { url: "" }
      },
      swiperOptions: {
        slidesPerView: 1.75,
        centeredSlides: true,
        spaceBetween: 40,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        loop: false,
        grabCursor: true,
        speed: 600,
        breakpoints: {
          768: {
            slidesPerView: 2.75
          },
          1366: {
            centeredSlides: false,
            slidesPerView: 4.125,
            spaceBetween: 120,
            slidesOffsetBefore: 240,
            slidesOffsetAfter: 240
          }
        }
      }
    };
  },
  methods: {
    async getProjects() {
      const { data } = await getData({
        query: gql`
          query {
            allProjects {
              id
              title
              slug
            }
          }
        `
      });
      return data.allProjects;
    },
    async getProject(slug) {
      console.log(slug);
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
                  description
                  full
                  image {
                    url
                  }
                }
                ... on QuoteRecord {
                  id
                  _modelApiKey
                  centered
                  left
                  right
                  text
                }
                ... on DoubleImageRecord {
                  id
                  _modelApiKey
                  firstImage {
                    url
                  }
                  lastImage {
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
