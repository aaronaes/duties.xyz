<template>
  <section id="as" class="project">
    <section class="row">
      <figure class="columns title">
        <h2>Authentic Scandinavia</h2>
        <p>A bespoke travel agent for scandinavian exploration.</p>
        <a
          href="#as"
          @click="showMore = !showMore"
          class="toggle"
          :class="{ opened: showMore }"
        >
          <p>
            <span></span>
          </p>
        </a>
        <div v-show="showMore" class="toggleInfo">
          <p class="copy">
            Authentic Scandinavia is a dedicated online tour operator, creating
            and selling independent package tours and escorted coach tours
            throughout Scandinavia and the other Nordic countries.
          </p>
          <p class="copy">
            The visual cues utilized in the new identity was high-end typography
            and luxurious colors, as Authentic Scandinavia delivers high-end
            travel packages.
          </p>
          <p>
            <a href="https://authentic-scandinavia.com" target="_blank"
              >Visit site &nearr;</a
            >
          </p>
        </div>
      </figure>

      <figure class="columns">
        <img src="`/images/work/as/as-01.png`" />
      </figure>
      <figure class="columns">
        <img src="`/images/work/as/as-02.png`" />
      </figure>
      <figure class="columns">
        <img src="`/images/work/as/as-03.png`" />
      </figure>
      <figure class="columns">
        <img src="`/images/work/as/as-04.png`" />
      </figure>
      <figure class="columns">
        <img src="`/images/work/as/as-05.png`" />
      </figure>
      <figure class="columns">
        <img src="`/images/work/as/as-06.png`" />
      </figure>
      <figure class="columns">
        <img src="`/images/work/as/as-07.png`" />
      </figure>
      <figure class="columns">
        <img src="`/images/work/as/as-08.png`" />
      </figure>
      <figure class="columns">
        <img src="`/images/work/as/as-09.png`" />
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
