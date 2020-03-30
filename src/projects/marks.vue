<template>
  <div class="content">
    <div class="grid-x grid-margin-x">
      <div class="cell meta">
        <h4 class="status">Worked from 2009 - 2020</h4>
      </div>
      <div class="cell large-8 medium-10 description">
        <h3>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </h3>
      </div>
    </div>
    <div
      class="grid-x grid-margin-x img-container"
      v-lazy-container="{ selector: 'img' }"
    >
      <img
        width="800"
        height="600"
        class="cell large-6 medium-6 auto"
        data-src="/images/work/marks/marks-01.png"
      />
      <img
        width="800"
        height="600"
        class="cell large-6 medium-6 auto"
        data-src="/images/work/marks/marks-02.png"
      />
      <img
        width="800"
        height="600"
        class="cell large-6 medium-6 auto"
        data-src="/images/work/marks/marks-03.png"
      />
      <img
        width="800"
        height="600"
        class="cell large-6 medium-6 auto"
        data-src="/images/work/marks/marks-04.png"
      />
      <img
        width="800"
        height="600"
        class="cell large-6 medium-6 auto"
        data-src="/images/work/marks/marks-05.png"
      />
      <img
        width="800"
        height="600"
        class="cell large-6 medium-6 auto"
        data-src="/images/work/marks/marks-06.png"
      />
      <img
        width="800"
        height="600"
        class="cell large-6 medium-6 auto"
        data-src="/images/work/marks/marks-07.png"
      />
      <img
        width="800"
        height="600"
        class="cell large-6 medium-6 auto"
        data-src="/images/work/marks/marks-08.png"
      />
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
