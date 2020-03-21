<template>
  <details class="cell eika">
    <summary class="grid-x">
      <h2 class="cell auto title"><span>●</span>{{ title }}</h2>
      <h2 class="cell shrink togl">
        <a href="//eika.no" target="_blank"></a>
      </h2>
    </summary>
    <div class="content">
      <div class="grid-x">
        <div class="cell meta">
          <h4 class="status">Completed 2017</h4>
        </div>

        <div class="cell large-8 medium-10 description">
          <h3>
            Eika Gruppen is a strategic alliance between 77 local Norwegian
            savings banks that co-ordinates work within the areas defined as
            falling within the alliance.
          </h3>
          <h3>
            With 77 banks and more joining, the goal was to create the perfect
            tool to build layouts based on your user audience. A simple column
            design combined with a flexible user interface makes it easy for the
            local banks to create layouts based on what's current.
          </h3>
        </div>
        <div class="cell meta">
          <h4>Photography by XXX</h4>
          <h4>Build by YYY</h4>
        </div>
      </div>
      <div class="img-container" v-lazy-container="{ selector: 'img' }">
        <img data-src="/images/work/eika/eika-01.png" />
        <img data-src="/images/work/eika/eika-02.png" />
        <img data-src="/images/work/eika/eika-03.png" />
        <img data-src="/images/work/eika/eika-04.png" />
        <img data-src="/images/work/eika/eika-05.png" />
        <img data-src="/images/work/eika/eika-06.png" />
        <img data-src="/images/work/eika/eika-07.png" />
        <img data-src="/images/work/eika/eika-08.png" />
        <img data-src="/images/work/eika/eika-09.png" />
        <img data-src="/images/work/eika/eika-10.png" />
      </div>
    </div>
  </details>
</template>

<script>
export default {
  name: "Eika Gruppen",
  data() {
    return {
      title: "Eika Gruppen"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
