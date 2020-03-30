<template>
  <div class="content">
    <div class="grid-x grid-margin-x">
      <div class="cell meta">
        <p class="status">Worked from 2009 - 2020</p>
      </div>
      <div class="cell large-8 medium-10 description">
        <h3>
          An ever changing selection of our favourite marks that we have created
          for our clients, friends and personal projects over the years. We hope
          to see yours here soon.
        </h3>
      </div>
    </div>
    <div class=" img-container" v-lazy-container="{ selector: 'img' }">
      <div class="grid-x grid-margin-x">
        <img
          class="cell large-6 medium-6"
          data-src="/images/work/marks/logo-01.jpg"
          data-srcset="/images/work/marks/logo-01@2x.jpg 2x"
        />
        <img
          class="cell large-6 medium-6"
          data-src="/images/work/marks/logo-02.jpg"
          data-srcset="/images/work/marks/logo-02@2x.jpg 2x"
        />
        <img
          class="cell large-6 medium-6"
          data-src="/images/work/marks/logo-03.jpg"
          data-srcset="/images/work/marks/logo-03@2x.jpg 2x"
        />
        <img
          class="cell large-6 medium-6"
          data-src="/images/work/marks/logo-04.jpg"
          data-srcset="/images/work/marks/logo-04@2x.jpg 2x"
        />
        <img
          class="cell large-6 medium-6"
          data-src="/images/work/marks/logo-05.jpg"
          data-srcset="/images/work/marks/logo-05@2x.jpg 2x"
        />
        <img
          class="cell large-6 medium-6"
          data-src="/images/work/marks/logo-06.jpg"
          data-srcset="/images/work/marks/logo-06@2x.jpg 2x"
        />
        <img
          class="cell large-6 medium-6"
          data-src="/images/work/marks/logo-07.jpg"
          data-srcset="/images/work/marks/logo-07@2x.jpg 2x"
        />
        <img
          class="cell large-6 medium-6"
          data-src="/images/work/marks/logo-08.jpg"
          data-srcset="/images/work/marks/logo-08@2x.jpg 2x"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "logos-and-wordmarks",
  data() {
    return {
      title: "Logos and wordmarks"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
