<template>
  <section id="as" class="project">
    <section class="row">
      <figure class="columns float-left large-8">
        <h1>A bespoke travel agent for scandinavian exploration.</h1>
        <div class="copy">
          <p>
            <a href="https://authentic-scandinavia.com" target="_blank">Authentic Scandinavia</a> is a dedicated online tour operator, creating
            and selling independent package tours and escorted coach tours
            throughout Scandinavia and the other Nordic countries.
          </p>
        </div>
        <div class="copy" v-show="showMore">
          <p>
            The visual cues utilized in the new identity was high-end typography
            and luxurious colors, as Authentic Scandinavia delivers high-end
            travel packages.
          </p>
        </div>
        <button class="read-more float-left">
          <a
            @click.prevent="showMore = !showMore"
            class="toggle"
            href="#as"
            :class="{ opened: showMore }"
          >
            <p></p>
          </a>
        </button>
      </figure>

      <figure class="float-left">
        <img class="columns" src="/images/work/as/as-01.png" />
        <img class="columns" src="/images/work/as/as-02.png" />
        <img class="columns" src="/images/work/as/as-03.png" />
      </figure>
      <transition name="img-fade" mode="out-in">
        <figure class="float-left" v-show="morePics">
          <img class="columns" src="/images/work/as/as-04.png" />
          <img class="columns" src="/images/work/as/as-05.png" />
          <img class="columns" src="/images/work/as/as-06.png" />
          <img class="columns" src="/images/work/as/as-07.png" />
          <img class="columns" src="/images/work/as/as-08.png" />
          <img class="columns" src="/images/work/as/as-09.png" />
        </figure>
      </transition>

      <figure class="columns">
        <button class="float-centered">
          <a @click.prevent="morePics = !morePics" class="toggleImg" :class="{ opened: morePics }">
            <p></p>
          </a>
        </button>
      </figure>
    </section>
  </section>
</template>

<script>
export default {
  name: "Authentic Scandinavia",
  data() {
    return {
      title: "Authentic Scandinavia",
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
