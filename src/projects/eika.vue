<template>
  <section id="eika" class="project">
    <section class="row">
      <figure class="columns title">
        <h2>Eika Gruppen</h2>
        <p>A strategic alliance of 77 local savings banks.</p>
        <a href="#eika" @click="showMore = !showMore" class="toggle" :class="{ opened: showMore}">
          <p>
            <span></span>
          </p>
        </a>
        <div v-if="showMore" class="toggleInfo">
          <p
            class="copy"
          >Eika Gruppen is a strategic alliance between 77 local Norwegian savings banks that co-ordinates work within the areas defined as falling within the alliance.</p>
          <p
            class="copy"
          >With 77 banks and more joining, the goal was to create the perfect tool to build layouts based on your user audience. A simple column design combined with a flexible user interface makes it easy for the local banks to create layouts based on what's current.</p>
        </div>
      </figure>
      <div v-lazy-container="{ selector: 'img' }">
        <figure class="columns">
          <img data-src="/images/work/eika/eika-01.jpg">
        </figure>
        <figure class="columns">
          <img data-src="/images/work/eika/eika-02.jpg">
        </figure>
        <figure class="columns">
          <img data-src="/images/work/eika/eika-03.jpg">
        </figure>
        <figure class="columns">
          <img data-src="/images/work/eika/eika-04.jpg">
        </figure>
        <figure class="columns">
          <img data-src="/images/work/eika/eika-05.jpg">
        </figure>
        <figure class="columns">
          <img data-src="/images/work/eika/eika-06.jpg">
        </figure>
        <figure class="columns">
          <img data-src="/images/work/eika/eika-07.jpg">
        </figure>
        <figure class="columns">
          <img data-src="/images/work/eika/eika-08.jpg">
        </figure>
        <figure class="columns">
          <img data-src="/images/work/eika/eika-09.jpg">
        </figure>
        <figure class="columns">
          <img data-src="/images/work/eika/eika-10.jpg">
        </figure>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Eika",
  data() {
    return {
      title: "Eika",
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
