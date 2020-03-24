<template>
  <div class="content">
    <div class="grid-x grid-margin-x">
      <div class="cell meta">
        <h4 class="status">Worked from 2009 - 2020</h4>
      </div>
      <div class="cell large-8 medium-10 description">
        <h3>
          An ever changing selection of our favourite marks that we have created
          for our clients, friends and personal projects over the years. We hope
          to see yours here soon.
        </h3>
      </div>
    </div>
    <div class="img-container" v-lazy-container="{ selector: 'img' }">
      <div class="grid-x grid-margin-x">
        <img
          class="cell large-6 medium-6 auto"
          data-src="/images/work/marks/logo-01.png"
          data-srcset="/images/work/marks/logo-01@2x.png 2x"
        />
        <img
          class="cell large-6 medium-6 auto"
          data-src="/images/work/marks/logo-02.png"
          data-srcset="/images/work/marks/logo-02@2x.png 2x"
        />
        <img
          class="cell large-6 medium-6 auto"
          data-src="/images/work/marks/logo-03.png"
          data-srcset="/images/work/marks/logo-03@2x.png 2x"
        />
        <img
          class="cell large-6 medium-6 auto"
          data-src="/images/work/marks/logo-04.png"
          data-srcset="/images/work/marks/logo-04@2x.png 2x"
        />
        <img
          class="cell large-6 medium-6 auto"
          data-src="/images/work/marks/logo-05.png"
          data-srcset="/images/work/marks/logo-05@2x.png 2x"
        />
        <img
          class="cell large-6 medium-6 auto"
          data-src="/images/work/marks/logo-06.png"
          data-srcset="/images/work/marks/logo-06@2x.png 2x"
        />
        <img
          class="cell large-6 medium-6 auto"
          data-src="/images/work/marks/logo-07.png"
          data-srcset="/images/work/marks/logo-07@2x.png 2x"
        />
        <img
          class="cell large-6 medium-6 auto"
          data-src="/images/work/marks/logo-08.png"
          data-srcset="/images/work/marks/logo-08@2x.png 2x"
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
