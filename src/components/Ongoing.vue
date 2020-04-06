<template>
  <section class="grid-container ongoing">
    <h3 class="section-title">News & updates &searr;</h3>

    <figure
      v-masonry
      transition-duration="0s"
      horizontal-order="true"
      item-selector=".item"
      column-width=".item"
      class="masonry grid-x grid-margin-x"
      v-lazy-container="{ selector: 'img' }"
    >
      <div v-masonry-tile class="cell item large-4 medium-6 small-12">
        <img
          data-src="/images/banner/ongoing-06.jpg"
          data-srcset="/images/banner/ongoing-06@2x.jpg 2x"
        />
        <p>New project coming along nicely.</p>
      </div>

      <div v-masonry-tile class="cell item large-4 medium-6 small-12">
        <img
          data-src="/images/banner/ongoing-05.jpg"
          data-srcset="/images/banner/ongoing-05@2x.jpg 2x"
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
          data-src="/images/banner/ongoing-04.jpg"
          data-srcset="/images/banner/ongoing-04@2x.jpg 2x"
        />
        <p>
          We are revamping the way teams and stakeholders organise events for
          Samspill.io.
        </p>
      </div>
      <div v-masonry-tile class="cell item large-4 medium-6 small-12">
        <img
          data-src="/images/banner/ongoing-03.jpg"
          data-srcset="/images/banner/ongoing-03@2x.jpg 2x"
        />
        <p>
          We are excited to continue collaborating with
          <a href="//www.godtlevert.no" target="_blank">Godtlevert</a>.
        </p>
      </div>
      <div v-masonry-tile class="cell item large-4 medium-6 small-12">
        <img
          data-src="/images/banner/ongoing-02.jpg"
          data-srcset="/images/banner/ongoing-02@2x.jpg 2x"
        />
        <p>
          See what duties we can help your business with
          <router-link to="/about">here</router-link>.
        </p>
      </div>
      <div v-masonry-tile class="cell item large-4 medium-6 small-12">
        <img
          data-src="/images/banner/ongoing-01.jpg"
          data-srcset="/images/banner/ongoing-01@2x.jpg 2x"
        />
        <p>
          We’re always sharing past and present work alongside other fun things
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
