<template>
  <div>
    <div class="content grid-container">
      <div class="grid-x description">
        <div class="cell">
          <h2>
            As a new service and player in the market, Godtlevert wanted to
            become a national household name and gain further traction in this
            emerging segment.
          </h2>
          <h2>
            Our solution was to take an holistic approach to their product by
            creating a new way to browse meals and weekly specials. Their whole
            app was revamped with a new UI alongside an updated website design.
          </h2>
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
      <div class="grid-x">
        <swiper
          ref="mySwiper"
          :options="swiperOptions"
          :auto-update="true"
          :auto-destroy="true"
          @slideChange="changeSwiperIndex"
        >
          <swiper-slide>
            <div class="swiper-slide-container">
              <img src="/images/work/gl/slide/godtlevert-slide-01.jpg" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide-container">
              <img src="/images/work/gl/slide/godtlevert-slide-02.jpg" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide-container">
              <img src="/images/work/gl/slide/godtlevert-slide-03.jpg" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide-container">
              <img src="/images/work/gl/slide/godtlevert-slide-04.jpg" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide-container">
              <img src="/images/work/gl/slide/godtlevert-slide-05.jpg" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="content grid-container fluid">
      <div
        class="grid-x img-container align-center"
        v-lazy-container="{ selector: 'img' }"
      >
        <div class="cell">
          <img
            data-src="/images/work/gl/godtlevert-01.jpg"
            data-srcset="/images/work/gl/godtlevert-01@2x.jpg 2x"
          />
          <img
            data-src="/images/work/gl/godtlevert-02.jpg"
            data-srcset="/images/work/gl/godtlevert-02@2x.jpg 2x"
          />
        </div>

        <div class="cell large-6 medium-8 small-12">
          <img
            data-src="/images/work/gl/godtlevert-03.jpg"
            data-srcset="/images/work/gl/godtlevert-03@2x.jpg 2x"
          />
        </div>
        <div class="cell large-6 medium-8 small-12">
          <img
            data-src="/images/work/gl/godtlevert-04.jpg"
            data-srcset="/images/work/gl/godtlevert-04@2x.jpg 2x"
          />
        </div>

        <div class="large-8 medium-10 small-12">
          <img
            data-src="/images/work/gl/godtlevert-05.jpg"
            data-srcset="/images/work/gl/godtlevert-05@2x.jpg 2x"
          />
        </div>
        <div class="large-8 medium-10 small-12">
          <img
            data-src="/images/work/gl/godtlevert-06.jpg"
            data-srcset="/images/work/gl/godtlevert-06@2x.jpg 2x"
          />
        </div>

        <div class="large-8 medium-10 small-12">
          <img
            data-src="/images/work/gl/godtlevert-07.jpg"
            data-srcset="/images/work/gl/godtlevert-07@2x.jpg 2x"
          />
        </div>
        <div class="large-8 medium-10 small-12">
          <img
            data-src="/images/work/gl/godtlevert-08.jpg"
            data-srcset="/images/work/gl/godtlevert-08@2x.jpg 2x"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gl",
  data() {
    return {
      title: "Godt Levert",
      subtitle: "An Oslo-based meal-kit company",
      image: "/images/work/gl/godtlevert-cover.gif",
      coverSize: "landscape",
      bg: "#eeedeb",
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
