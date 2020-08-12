<template>
  <div>
    <div class="content grid-container">
      <div class="grid-x description">
        <div class="cell">
          <h2>
            Ogle Image is a bespoke signage and graphic installation agency
            based in Melbourne with operations in Sydney.
          </h2>
          <h2>
            We gave their current website a complete redesign and refreshed a
            variety of brand identity elements such as typography and colour
            palettes.
          </h2>
          <h2 class="this">
            <a href="http://ogleimage.com.au/" target="_blank">Visit site</a>
          </h2>
        </div>
      </div>

      <div class="grid-x meta">
        <div class="cell large-4 medium-4 small-12">
          <p class="title">Service</p>
          <p class="float-left">
            <span>Art direction</span> <span>User Experience</span>
            <span>Design</span>
          </p>
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
        >
          <swiper-slide>
            <div class="swiper-slide-container text-center">
              <img src="/images/work/ogle/slide/ogle-image-slide-01.png" />
              <p>Welcome</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide-container text-center">
              <img src="/images/work/ogle/slide/ogle-image-slide-02.png" />
              <p>Read</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide-container text-center">
              <img src="/images/work/ogle/slide/ogle-image-slide-03.png" />
              <p>Explore</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide-container text-center">
              <img src="/images/work/ogle/slide/ogle-image-slide-04.png" />
              <p>Details</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide-container text-center">
              <img src="/images/work/ogle/slide/ogle-image-slide-05.png" />
              <p>Focus</p>
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
            data-src="/images/work/ogle/ogle-image-02.jpg"
            data-srcset="/images/work/ogle/ogle-image-02@2x.jpg 2x"
            alt="Ogle Image Logo Dark"
          />
        </div>
        <div class="cell">
          <img
            data-src="/images/work/ogle/ogle-image-03.jpg"
            data-srcset="/images/work/ogle/ogle-image-03@2x.jpg 2x"
            alt="Ogle Image Icon"
          />
        </div>

        <div class="cell">
          <img
            data-src="/images/work/ogle/ogle-image-04.jpg"
            data-srcset="/images/work/ogle/ogle-image-04@2x.jpg 2x"
            alt="Ogle Image Installation Image"
          />
        </div>

        <div class="cell">
          <img
            data-src="/images/work/ogle/ogle-image-05.jpg"
            data-srcset="/images/work/ogle/ogle-image-05@2x.jpg 2x"
            alt="Ogle Image Web Tablet 1"
          />
        </div>

        <!-- DOUBLE -->

        <div class="cell large-6 medium-6 small-12">
          <img
            data-src="/images/work/ogle/ogle-image-06.jpg"
            data-srcset="/images/work/ogle/ogle-image-06@2x.jpg 2x"
            alt="Ogle Image Web Mobile 1"
          />
        </div>
        <div class="cell large-6 medium-6 small-12">
          <img
            data-src="/images/work/ogle/ogle-image-07.jpg"
            data-srcset="/images/work/ogle/ogle-image-07@2x.jpg 2x"
            alt="Ogle Image Web Mobile 2"
          />
        </div>

        <div class="cell">
          <img
            data-src="/images/work/ogle/ogle-image-09.jpg"
            data-srcset="/images/work/ogle/ogle-image-09@2x.jpg 2x"
            alt="Ogle Image Web Tablet 3"
          />
        </div>
        <div class="cell">
          <img
            data-src="/images/work/ogle/ogle-image-10.jpg"
            data-srcset="/images/work/ogle/ogle-image-10@2x.jpg 2x"
            alt="Ogle Image Web Mobile Grid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ogle-image",
  data() {
    return {
      title: "Ogle Image",
      subtitle: "Making images finger-pop!",
      image: "/images/work/ogle/ogle-image-cover.png",
      coverSize: "square",
      bg: "#eeeeee",
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 15,
        slidesOffsetBefore: 30,
        slidesOffsetAfter: 30,
        loop: false,
        grabCursor: true,
        speed: 500,
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesOffsetBefore: 120,
            slidesOffsetAfter: 120
          },
          1366: {
            slidesPerView: 4,
            spaceBetween: 90,
            slidesOffsetBefore: 320,
            slidesOffsetAfter: 320
          }
        }
      }
    };
  }
};
</script>
