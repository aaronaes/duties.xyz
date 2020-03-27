<template>
  <div class="content">
    <div class="grid-x">
      <div class="cell meta">
        <h4 class="status">Completed 2016</h4>
      </div>
      <div class="cell large-8 medium-10 description">
        <h3>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </h3>
        <h3>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </h3>
      </div>
      <div class="cell meta">
        <h4>Photography by XXX</h4>
        <h4>Build by YYY</h4>
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
