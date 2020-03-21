<template>
  <details class="cell humid">
    <summary class="grid-x">
      <h2 class="cell auto title"><span>●</span>{{ title }}</h2>
      <h2 class="cell shrink togl">
        <a href="#" target="_blank"></a>
      </h2>
    </summary>
    <div class="content">
      <div class="grid-x grid-margin-x">
        <div class="cell meta">
          <h4 class="status">Completed 2017</h4>
        </div>
        <div class="cell large-8 medium-10 description">
          <h3 class="cell large-10">
            Humid Magazine was the idea of a norwegian, neo-erotic magazine with
            a different approach. Inspired by foreign neo-eroticism, Humid
            introduced the Norwegian woman as a sexual being on her own terms.
          </h3>
        </div>
        <div class="cell meta">
          <h4>Photography by XXX</h4>
          <h4>Build by YYY</h4>
        </div>
      </div>
      <div class="img-container" v-lazy-container="{ selector: 'img' }">
        <img data-src="/images/work/humid/humid-01.png" />
        <img data-src="/images/work/humid/humid-02.png" />
        <img data-src="/images/work/humid/humid-03.png" />
        <img data-src="/images/work/humid/humid-04.png" />
        <img
          class="large-6 medium-6 float-left"
          data-src="/images/work/humid/humid-05.png"
        />
        <h1 class="large-5 medium-5 grid-padding-x float-left">
          HUMID FUCKING MAG IS HERE.
        </h1>
        <img data-src="/images/work/humid/humid-06.png" />
      </div>
    </div>
  </details>
</template>

<script>
export default {
  name: "Humid",
  data() {
    return {
      title: "Humid",
      showMore: false
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
