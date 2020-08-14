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
          <p class="float-left">
            Art direction
          </p>
          <p class="float-left">
            User Experience
          </p>
          <p class="float-left">Design</p>
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
                <img :src="asset.url" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </swiper-slide>
          </swiper>

          <div
            v-if="block._modelApiKey === 'single_image'"
            class="cell large-6 medium-8 small-12"
          >
            <img :data-src="block.image.url" :data-srcset="block.image.url" />
          </div>
          <div
            style="display: flex;"
            v-if="block._modelApiKey === 'double_image'"
            class="cell"
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
