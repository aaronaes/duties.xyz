<template>
  <section class="project" id="gl">
    <section class="row">
      <figure class="columns float-left large-8">
        <h1>A food-to-your-door subscription service.</h1>
        <div class="copy">
          <p>
            <a href="//www.godtlevert.no" target="_blank">Godt Levert</a> didn't have as much of a presence in the market as they wanted. The service was new and was gaining traction, and with that Godt Levert wanted to become a household name.
          </p>
        </div>
        <div class="copy" v-show="showMore">
          <p>The solution to this was taking a more holistic approach to their product, through creating a new way to browse meals and weekly deals. As a part of the project, the whole app was revamped with new UI and a new website.</p>
        </div>
        <button class="read-more float-left">
          <a
            @click.prevent="showMore = !showMore"
            class="toggle float-left"
            href="#gl"
            :class="{ opened: showMore }"
          >
            <p></p>
          </a>
        </button>
      </figure>

      <figure class="float-left">
        <img class="columns" src="/images/work/gl/gl-01.png" />
        <img class="columns" src="/images/work/gl/gl-02.png" />
      </figure>
      <transition name="img-fade" mode="out-in">
        <figure class="float-left" v-show="morePics">
          <img class="columns" src="/images/work/gl/gl-03.png" />
          <img class="columns" src="/images/work/gl/gl-04.png" />
          <img class="columns" src="/images/work/gl/gl-05.png" />
          <img class="columns" src="/images/work/gl/gl-06.png" />
          <img class="columns large-6 medium-6" src="/images/work/gl/gl-07.png" />
          <img class="columns large-6 medium-6" src="/images/work/gl/gl-01-mobile.png" />
          <img class="columns" src="/images/work/gl/gl-08.png" />
          <img class="columns" src="/images/work/gl/gl-09.png" />
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
  name: "Godt Levert",
  data() {
    return {
      title: "Godt Levert",
      showMore: false,
      morePics: false
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
