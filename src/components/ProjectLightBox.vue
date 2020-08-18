<template>
  <div>
    <div class="content grid-container">
      <div class="grid-x description">
        <div class="cell">
          <h2 v-html="project.description"></h2>
          <h2 class="this">
            <a href="/" target="_blank">Visit site</a>
          </h2>
        </div>
      </div>

      <div class="grid-x meta">
        <div class="cell">
          <p class="title">Service</p>
        </div>
        <div class="cell">
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

    <div class="content grid-container fluid">
      <div
        class="grid-x img-container align-center"
        v-lazy-container="{ selector: 'img' }"
      >
        <div v-for="block in project.blocks" :key="block.id">
          <swiper
            v-if="block._modelApiKey === 'image_carousel'"
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
              <div class="swiper-slide-container">
                <img
                  :data-src="getUrl(asset.url)"
                  :data-srcset="getSrcSet(asset.url)"
                />
              </div>
            </swiper-slide>
          </swiper>

          <div
            v-if="block._modelApiKey === 'single_image'"
            class="cell large-6 medium-8 small-12"
          >
            <img
              :data-src="getUrl(block.image.url)"
              :data-srcset="getSrcSet(block.image.url)"
            />
          </div>

          <div
            style="display: flex;"
            v-if="block._modelApiKey === 'double_image'"
            class="cell"
          >
            <img
              class="large-6 medium-6 small-12"
              :data-src="getUrl(block.firstImage.url)"
              :data-srcset="getSrcSet(block.firstImage.url)"
            />
            <img
              class="large-6 medium-6 small-12"
              :data-src="getUrl(block.lastImage.url)"
              :data-srcset="getSrcSet(block.lastImage.url)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgix from "@/utils/imgix";

export default {
  name: "gl",
  props: ["project"],
  data() {
    return {
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
            spaceBetween: 160,
            slidesOffsetBefore: 240,
            slidesOffsetAfter: 240
          }
        }
      }
    };
  },
  methods: {
    changeSwiperIndex() {
      this.$refs.mySwiper.$swiper.activeIndex;
    },
    getUrl(url) {
      return imgix({ url: url });
    },
    getSrcSet(url) {
      return ` 
      ${imgix({ url: url, w: 2400 })} 2400w, 
      ${imgix({ url: url, w: 1200 })} 1200w, 
      ${imgix({ url: url, w: 600 })} 600w,
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
