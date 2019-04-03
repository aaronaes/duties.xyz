<template>
  <section id="ssf" class="project">
    <section class="row">
      <figure class="columns title">
        <p>
          SSF, a small local bank with big ambitions.
          <span class="super">[2017 - 18]</span>
        </p>
        <a href="#ssf" @click="showMore = !showMore" class="toggle" :class="{ opened: showMore}">
          <p>
            <span></span>
          </p>
        </a>
        <div v-if="showMore" class="toggleInfo">
          <p>Rethinking the design language for one of Norways largest strategic bank alliances. Eika Gruppen is a strategic alliance between 77 local Norwegian savings banks that co-ordinates work within the areas defined as falling within the alliance.</p>
        </div>
      </figure>

      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/ssf/ssf-01.jpg">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/ssf/ssf-02.jpg">
      </figure>
      <figure class="columns">
        <span class="float-center">
          <p>Rethinking the design language for one of Norways largest strategic bank alliances.</p>
        </span>
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/ssf/ssf-03.jpg">
      </figure>
    </section>
  </section>
</template>

<script>
export default {
  name: "SSF",
  data() {
    return {
      title: "SSF",
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
