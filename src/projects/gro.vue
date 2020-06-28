<template>
  <div>
    <div class="content grid-container" id="projectTop">
      <div class="grid-x description">
        <div class="cell">
          <h2>
            Gro Grønt grows and distributes high-quality ingredients in the form
            of exotic vegetables and unique herbs to high-end restaurants and
            chefs around the Oslo metropolitan area; all from a custom-built
            container in the centre of town.
          </h2>
          <h2>
            We were asked to develop a unique and flexible brand identity to
            reflect their offering across physical and digital touchpoints, as
            well as the design of their company website.
          </h2>
          <h2 class="cell this">
            <a href="https://gro-hydrokultur.firebaseapp.com/" target="_blankn"
              >Visit site</a
            >
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

        <div class="cell large-4 medium-4 small-12">
          <p class="title">Build</p>
          <p class="float-left tag">
            <a href="//www.leifriksheim.com" target="_blank">Leif Riksheim</a>
          </p>
        </div>
        <div class="cell large-4 medium-4 small-12">
          <p class="title">Illustrations</p>
          <p class="float-left tag">
            <a
              href="//www.byhands.no/illustrators/sandra-blikaas"
              target="_blank"
            >
              Sandra Blikås (ByHands)
            </a>
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
            <div class="swiper-slide-container">
              <img
                src="https://wch.thegoodguys.com.au/dxdam/image/iphonex-33-m.png"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide-container">
              <img
                src="https://wch.thegoodguys.com.au/dxdam/image/iphonex-33-m.png"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide-container">
              <img
                src="https://wch.thegoodguys.com.au/dxdam/image/iphonex-33-m.png"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide-container">
              <img
                src="https://wch.thegoodguys.com.au/dxdam/image/iphonex-33-m.png"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide-container">
              <img
                src="https://wch.thegoodguys.com.au/dxdam/image/iphonex-33-m.png"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide-container">
              <img
                src="https://wch.thegoodguys.com.au/dxdam/image/iphonex-33-m.png"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="grid-x align-center">
        <p><small>001 &rarr; UX Flow Pattern</small></p>
      </div>
    </div>
    <div class="content grid-container">
      <div class="grid-x img-container" v-lazy-container="{ selector: 'img' }">
        <div class="cell">
          <img
            data-src="/images/work/gro/gro-gront-01.jpg"
            data-srcset="/images/work/gro/gro-gront-01@2x.jpg 2x"
          />
        </div>
        <div class="cell">
          <img
            data-src="/images/work/gro/gro-gront-02.jpg"
            data-srcset="/images/work/gro/gro-gront-02@2x.jpg 2x"
          />
        </div>
        <div class="cell">
          <div class="description">
            <h2>
              We were asked to develop a unique and flexible brand identity to
              reflect their offering across physical and digital touchpoints, as
              well as the design of their company website.
            </h2>
          </div>
        </div>
        <div class="cell">
          <img
            data-src="/images/work/gro/gro-gront-03.jpg"
            data-srcset="/images/work/gro/gro-gront-03@2x.jpg 2x"
          />
        </div>
        <div class="cell">
          <img
            data-src="/images/work/gro/gro-gront-04.jpg"
            data-srcset="/images/work/gro/gro-gront-04@2x.jpg 2x"
          />
        </div>
        <div class="cell">
          <img
            data-src="/images/work/gro/gro-gront-05.jpg"
            data-srcset="/images/work/gro/gro-gront-05@2x.jpg 2x"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gro-gront",
  data() {
    return {
      title: "Gro Grønt",
      image: "/images/work/gro/gro-gront-01.jpg",
      coverSize: "landscape",
      bg: "#f1f2ec",
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 15,
        slidesOffsetBefore: 15,
        slidesOffsetAfter: 15,
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
            spaceBetween: 60,
            slidesOffsetBefore: 320,
            slidesOffsetAfter: 320
          }
        }
      }
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
