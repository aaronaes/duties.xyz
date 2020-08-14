<template>
  <div>
    <div class="content grid-container">
      <div class="grid-x description">
        <div class="cell">
          <div v-html="project.description"></div>
          <h2 class="this">
            <a href="https://godtlevert.no/" target="_blank">Visit site</a>
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

    <div v-for="block in project.blocks" :key="block.id">
      <swiper
        class="content grid-container fluid"
        v-if="block._modelApiKey === 'image_carousel'"
        ref="mySwiper"
        :options="swiperOptions"
        :auto-update="true"
        :auto-destroy="true"
        @slideChange="changeSwiperIndex"
        v-lazy-container="{ selector: 'img' }"
      >
        <swiper-slide v-for="asset in block.imageCarouselAsset" :key="asset.id">
          <div class="swiper-slide-container">
            <img :src="asset.url" />
          </div>
        </swiper-slide>
      </swiper>

      <div
        class="content grid-container"
        v-if="block._modelApiKey === 'single_image'"
        :class="block.full ? 'fluid' : ''"
      >
        <div
          class="grid-x img-container align-center"
          v-lazy-container="{ selector: 'img' }"
        >
          <img :data-src="block.image.url" :data-srcset="block.image.url" />
        </div>
      </div>

      <div
        style="display: flex;"
        v-if="block._modelApiKey === 'double_image'"
        class="content grid-container"
      >
        <div
          class="grid-x img-container align-center"
          v-lazy-container="{ selector: 'img' }"
        >
          <img
            style="width: 50%"
            :data-src="block.firstImage.url"
            :data-srcset="block.firstImage.url"
          />
          <img
            style="width: 50%"
            :data-src="block.lastImage.url"
            :data-srcset="block.lastImage.url"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  method: {
    changeSwiperIndex() {
      this.$refs.mySwiper.$swiper.activeIndex;
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
