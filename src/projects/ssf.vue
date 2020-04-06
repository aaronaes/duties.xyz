<template>
  <div class="content">
    <div class="grid-x">
      <div class="cell meta">
        <p class="status">Completed 2016</p>
      </div>
      <div class="cell large-8 medium-12 small-12 description">
        <h2>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </h2>
        <h2>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </h2>
      </div>
      <div class="cell meta">
        <p>Photography by XXX</p>
        <p>Build by YYY</p>
      </div>
    </div>
    <div class="img-container" v-lazy-container="{ selector: 'img' }">
      <div class="grid-x grid-margin-x">
        <img
          data-src="/images/work/ssf/ssf-01.jpg"
          data-srcset="/images/work/ssf/ssf-01@2x.jpg 2x"
        />
        <img
          data-src="/images/work/ssf/ssf-02.jpg"
          data-srcset="/images/work/ssf/ssf-02@2x.jpg 2x"
        />
        <img
          data-src="/images/work/ssf/ssf-03.jpg"
          data-srcset="/images/work/ssf/ssf-03@2x.jpg 2x"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ssf",
  data() {
    return {
      title: "Sparebanken Sogn & Fjordane",
      smallTitle: "SSF"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
