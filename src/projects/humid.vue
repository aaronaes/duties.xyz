<template>
  <section id="humid" class="project">
    <section class="row">
      <figure class="columns">
        <h1>
          A neo-erotic magazine, by women
          <i>for</i> women.
        </h1>
        <p class="copy">
          Humid Magazine was the idea of a norwegian, neo-erotic magazine with
          a different approach. Inspired by foreign neo-eroticism, Humid
          introduced the Norwegian woman as a sexual being on her own terms.
        </p>
        <p class="copy" v-show="showMore">
          Humid Magazine was the idea of a norwegian, neo-erotic magazine with
          a different approach. Inspired by foreign neo-eroticism, Humid
          introduced the Norwegian woman as a sexual being on her own terms.
        </p>
        <div class="meta">
          <a
            @click.prevent="showMore = !showMore"
            class="toggle float-left"
            href="#eika"
            :class="{ opened: showMore }"
          >
            <p></p>
          </a>
          <a class="float-left" href="//www.godtlevert.no" target="_blank">
            <p>
              View live
              <span>&nearr;</span>
            </p>
          </a>
        </div>
      </figure>

      <figure class="columns">
        <img src="/images/work/humid/humid-01.png" />
        <img src="/images/work/humid/humid-02.png" />
      </figure>
      <figure class="columns" v-show="morePics">
        <img src="/images/work/humid/humid-03.png" />
        <img src="/images/work/humid/humid-04.png" />
        <div class="large-6 medium-6 small-12 float-left">
          <div class="columns">
            <img src="/images/work/humid/humid-05.png" />
          </div>
        </div>
        <div class="large-6 medium-6 small-12 float-left">
          <div class="columns">
            <img src="/images/work/humid/humid-06.png" />
          </div>
        </div>
      </figure>
      <figure class="columns">
        <a @click.prevent="morePics = !morePics" class="toggleImg" :class="{ opened: morePics }">
          <p></p>
        </a>
      </figure>
    </section>
  </section>
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
