<template>
  <section id="gl" class="project">
    <section class="row">
      <figure class="columns title">
        <h2>Godt Levert</h2>
        <p>A food-to-your-door subscription service.</p>
        <a
          href="#gl"
          @click="showMore = !showMore"
          class="toggle"
          :class="{ opened: showMore }"
        >
          <p>
            <span></span>
          </p>
        </a>
        <div class="toggleInfo" v-show="showMore">
          <p class="copy">
            Godt Levert didn't have as much of a presence in the market as they
            wanted. The service was new and was gaining traction, and with that
            Godt Levert wanted to become a household name. The solution to this
            was taking a more holistic approach to their product, through
            creating a new way to browse meals and weekly deals. As a part of
            the project, the whole app was revamped with new UI and a new
            website.
          </p>
          <p class="link">
            <a href="//www.godtlevert.no" target="_blank">Visit site &nearr;</a>
          </p>
        </div>
      </figure>

      <figure class="columns">
        <img src="`/images/work/gl/gl-01.png`" />
      </figure>
      <figure class="columns">
        <img src="`/images/work/gl/gl-02.png`" />
      </figure>
      <figure class="columns">
        <img src="`/images/work/gl/gl-03.png`" />
      </figure>
      <figure class="columns">
        <img src="`/images/work/gl/gl-04.png`" />
      </figure>
      <figure class="columns">
        <img src="`/images/work/gl/gl-05.png`" />
      </figure>
      <figure class="columns">
        <img src="`/images/work/gl/gl-06.png`" />
      </figure>
      <figure class="columns">
        <img src="`/images/work/gl/gl-07.png`" />
      </figure>
      <figure class="columns">
        <img src="`/images/work/gl/gl-08.png`" />
      </figure>
      <figure class="columns">
        <img src="`/images/work/gl/gl-09.png`" />
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
