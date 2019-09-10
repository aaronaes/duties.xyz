<template>
  <section id="gl" class="project">
    <section class="row">
      <figure class="columns title">
        <h2>Godt Levert</h2>
        <p>A food-to-your-door subscription service.</p>
        <a href="#gl" @click="showMore = !showMore" class="toggle" :class="{ opened: showMore}">
          <p>
            <span></span>
          </p>
        </a>
        <div v-if="showMore" class="toggleInfo">
          <p class="copy">
            Godt Levert didn't have as much of a presence in the market as they wanted. The service was new and was gaining traction, and with that Godt Levert wanted to become a household name.
            The solution to this was taking a more holistic approach to their product, through creating a new way to browse meals and weekly deals. As a part of the project, the whole app was revamped with new UI and a new website.
          </p>
          <p class="link">
            <a href="//www.godtlevert.no" target="_blank">Visit site &nearr;</a>
          </p>
        </div>
      </figure>

      <div v-lazy-container="{ selector: 'img' }">
        <figure class="columns">
          <img data-src="/images/work/gl/gl-01.jpg" />
        </figure>
        <figure class="columns">
          <img data-src="/images/work/gl/gl-02.jpg" />
        </figure>
        <figure class="columns">
          <img data-src="/images/work/gl/gl-03.jpg" />
        </figure>
        <figure class="columns">
          <img data-src="/images/work/gl/gl-04.jpg" />
        </figure>
        <figure class="columns">
          <img data-src="/images/work/gl/gl-05.jpg" />
        </figure>
        <figure class="columns">
          <img data-src="/images/work/gl/gl-06.jpg" />
        </figure>
        <figure class="columns">
          <img data-src="/images/work/gl/gl-07.jpg" />
        </figure>
        <figure class="columns">
          <img data-src="/images/work/gl/gl-08.jpg" />
        </figure>
        <figure class="columns">
          <img data-src="/images/work/gl/gl-09.jpg" />
        </figure>
      </div>
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
