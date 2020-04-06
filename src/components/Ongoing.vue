<template>
  <section class="grid-container ongoing">
    <h3 class="section-title">News & updates &searr;</h3>

    <figure
      v-masonry
      item-selector=".item"
      class="masonry grid-x grid-margin-x"
    >
      <div v-masonry-tile class="cell item large-4 medium-6 small-12">
        <img
          src="/images/banner/ongoing-06.jpg"
          srcset="/images/banner/ongoing-06@2x.jpg 2x"
        />
        <p>
          We are currently helping the way businesses and customers interact
          with guidelines and standards for the Norwegian retail industry.
        </p>
      </div>

      <div v-masonry-tile class="cell item large-4 medium-6 small-12">
        <img
          src="/images/banner/ongoing-05.jpg"
          srcset="/images/banner/ongoing-05@2x.jpg 2x"
        />
        <p>
          An ever-growing selection of audio goodness from us to you.
          <a
            href="https://open.spotify.com/playlist/39NC0tBJ0FrrqBD8Tj156m?si=HS5YF10BQfmFFN6VHJtYOQ"
            target="_blank"
            >Listen here</a
          >.
        </p>
      </div>

      <div v-masonry-tile class="cell item large-4 medium-6 small-12">
        <img
          src="/images/banner/ongoing-03.jpg"
          srcset="/images/banner/ongoing-03@2x.jpg 2x"
        />
        <p>
          We are excited to continue working and collaborating with the great
          people at
          <a href="//www.godtlevert.no" target="_blank">Godtlevert Gruppen</a>
        </p>
      </div>

      <div v-masonry-tile class="cell item large-4 medium-6 small-12">
        <img
          src="/images/banner/ongoing-04.jpg"
          srcset="/images/banner/ongoing-04@2x.jpg 2x"
        />
        <p>
          We are revamping the way teams and stakeholders organise events for
          Samspill.io.
        </p>
      </div>

      <div v-masonry-tile class="cell item large-4 medium-6 small-12">
        <img
          src="/images/banner/ongoing-02.jpg"
          srcset="/images/banner/ongoing-02@2x.jpg 2x"
        />
        <p>
          Hi! See what duties we can help you and your business with
          <router-link to="/about">here</router-link>.
        </p>
      </div>

      <div v-masonry-tile class="cell item large-4 medium-6 small-12">
        <img
          src="/images/banner/ongoing-01.jpg"
          srcset="/images/banner/ongoing-01@2x.jpg 2x"
        />
        <p>
          We are always sharing past and present work alongside other fun things
          on
          <a href="//www.instagram.com/duties.xyz" target="_blank">Instagram</a
          >.
        </p>
      </div>
    </figure>
  </section>
</template>

<script>
export default {
  name: "Ongoing"
};
</script>
