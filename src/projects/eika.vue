<template>
  <section id="eika" class="project">
    <section class="row">
      <!-- NEW -->
      <figure class="columns float-left large-8">
        <h1>A strategic alliance of 77 local savings banks.</h1>
        <div class="copy">
          <p>
            <a href="//www.eika.no" target="_blank">Eika Gruppen</a> is a strategic alliance between 77 local Norwegian
            savings banks that co-ordinates work within the areas defined as falling within the alliance.
          </p>
        </div>
        <div class="copy" v-show="showMore">
          <p>With 77 banks and more joining, the goal was to create the perfect tool to build layouts based on your user audience. A simple column design combined with a flexible user interface makes it easy for the local banks to create layouts based on what's current.</p>
        </div>
        <button class="read-more float-left">
          <a
            @click.prevent="showMore = !showMore"
            class="toggle float-left"
            href="#eika"
            :class="{ opened: showMore }"
          >
            <p></p>
          </a>
        </button>
      </figure>

      <!-- OLD -->
      <figure class="float-left">
        <img class="columns" src="/images/work/eika/eika-01.png" />
        <img class="columns" src="/images/work/eika/eika-02.png" />
        <img class="columns" src="/images/work/eika/eika-03.png" />
      </figure>
      <transition name="img-fade" mode="out-in">
        <figure class="float-left" v-show="morePics">
          <img class="columns" src="/images/work/eika/eika-04.png" />
          <img class="columns" src="/images/work/eika/eika-05.png" />
          <img class="columns" src="/images/work/eika/eika-06.png" />
          <img class="columns" src="/images/work/eika/eika-07.png" />
          <img class="columns" src="/images/work/eika/eika-08.png" />
          <img class="columns" src="/images/work/eika/eika-09.png" />
          <img class="columns" src="/images/work/eika/eika-10.png" />
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
  name: "Eika",
  data() {
    return {
      title: "Eika",
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
