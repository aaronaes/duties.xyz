<template>
  <section id="fetch" class="project">
    <section class="row" v-lazy-container="{ selector: 'img' }">
      <figure class="columns title">
        <h2>Fetch</h2>
        <p>A crowd-sourced delivery service.</p>
        <a href="#fetch" @click="showMore = !showMore" class="toggle" :class="{ opened: showMore}">
          <p>
            <span></span>
          </p>
        </a>
        <div v-if="showMore" class="toggleInfo">
          <p
            class="copy"
          >Fetch wanted to operate as a vendor for package shipping, which would differentiate from the current avilable carriers. Fetch would deliver flexible solutions by utilizing existing transport capacity in the market, such as messengerbikers, Uber and local taxi drivers. By doing so, they would open up to new markets and new players in the industry.</p>
        </div>
      </figure>

      <figure class="columns">
        <img data-src="/images/work/fetch/fetch-01.jpg">
      </figure>
      <figure class="columns">
        <img data-src="/images/work/fetch/fetch-02.jpg">
      </figure>
      <figure class="columns">
        <img data-src="/images/work/fetch/fetch-03.jpg">
      </figure>
      <figure class="columns">
        <img data-src="/images/work/fetch/fetch-04.jpg">
      </figure>
      <figure class="columns">
        <img data-src="/images/work/fetch/fetch-05.jpg">
      </figure>
      <figure class="columns">
        <img data-src="/images/work/fetch/fetch-07.jpg">
      </figure>
      <figure class="columns">
        <img data-src="/images/work/fetch/fetch-08.jpg">
      </figure>
      <figure class="columns">
        <img data-src="/images/work/fetch/fetch-09.jpg">
      </figure>
      <figure class="columns">
        <img data-src="/images/work/fetch/fetch-10.jpg">
      </figure>
      <figure class="columns">
        <img data-src="/images/work/fetch/fetch-11.jpg">
      </figure>
    </section>
  </section>
</template>

<script>
export default {
  name: "Fetch",
  data() {
    return {
      title: "Fetch",
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
