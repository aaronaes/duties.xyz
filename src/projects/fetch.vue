<template>
  <section id="fetch" class="project">
    <section class="row">
      <figure class="columns title">
        <p>
          Fetch, a crowd-sourced delivery service.
          <span class="super">[2019]</span>
        </p>
        <a @click="showMore = !showMore" class="toggle" tabindex="-1">
          <p>
            <span></span>
          </p>
        </a>
        <div v-if="showMore" class="toggleInfo">
          <p>
            Fetch wanted to operate as a vendor for package shipping, which would differentiate from the current avilable carriers. Fetch would deliver flexible solutions by utilizing existing transport capacity in the market, such as messengerbikers, Uber and local taxi drivers. By doing so, they would open up to new markets and new players in the industry.
            <br>
            <span
              style="opacity: .5;"
            >Unfortunately the project had to shut down within the first year :(</span>
          </p>
        </div>
      </figure>

      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/fetch/fetch-01.png">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/fetch/fetch-02.png">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/fetch/fetch-03.png">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/fetch/fetch-04.png">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/fetch/fetch-05.png">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/fetch/fetch-06.png">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/fetch/fetch-07.png">
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
