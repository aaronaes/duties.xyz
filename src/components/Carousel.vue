<template>
  <!-- CAROUSEL -->
  <figure class="boom">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img src="/images/banner/banner-01.jpg" />
        <p>
          <span>Studio</span>
          A growing selection of audio goodness from us to you.
          <a
            href="https://open.spotify.com/playlist/39NC0tBJ0FrrqBD8Tj156m?si=HS5YF10BQfmFFN6VHJtYOQ"
            target="_blank"
            >Listen here</a
          >.
        </p>
      </swiper-slide>
      <swiper-slide class="landscape">
        <img src="/images/banner/banner-02.jpg" />
        <p>
          <span>News</span>
          We are revamping the way teams and stakeholders organise events for
          Samspill.
        </p>
      </swiper-slide>
      <swiper-slide>
        <img src="/images/banner/banner-03.jpg" />
        <p>
          <span>News</span>
          We are excited to continue collaborating with
          <a href="//www.godtlevert.no" target="_blank">Godtlevert</a>.
        </p>
      </swiper-slide>
      <swiper-slide>
        <img src="/images/banner/banner-04.jpg" />
        <p>
          <span>Studio</span>
          See what duties we can help your business with
          <router-link to="/about">here</router-link>.
        </p>
      </swiper-slide>
      <swiper-slide>
        <img src="/images/banner/banner-05.jpg" />
        <p>
          <span>Studio</span>
          We’re always sharing past and present work alongside other fun things
          on
          <a href="//www.instagram.com/duties.xyz" target="_blank">Instagram</a
          >.
        </p>
      </swiper-slide>
    </swiper>
  </figure>
</template>

<script>
export default {
  name: "Carousel",

  data() {
    return {
      swiperOptions: {
        slidesPerView: 4.3,
        spaceBetween: 30,
        slidesOffsetBefore: 30,
        slidesOffsetAfter: 60,
        loop: false,
        grabCursor: true,
        breakpoints: {
          768: {
            slidesPerView: 3.3,
            spaceBetween: 30
          },
          576: {
            slidesPerView: 2.3,
            spaceBetween: 15,
            slidesOffsetBefore: 15,
            slidesOffsetAfter: 15
          },
          320: {
            slidesPerView: 1.3,
            spaceBetween: 15,
            slidesOffsetBefore: 15,
            slidesOffsetAfter: 15
          }
        }
      }
    };
  }
};
</script>
