<template>
  <section id="eika" class="project">
    <section class="row">
      <figure class="columns title">
        <p>
          Eika Gruppen, a strategic alliance of 77 banks.
          <span class="super">[2014 - 16]</span>
        </p>
        <a class="toggle" href="#eika">
          <p>
            <span></span>
          </p>
        </a>
        <div class="toggleInfo">
          <p>Rethinking the design language for one of Norways largest strategic bank alliances. Eika Gruppen is a strategic alliance between 77 local Norwegian savings banks that co-ordinates work within the areas defined as falling within the alliance.</p>
          <p>Utilizing the concepts surrounding atomic design, I provided a clear methodology for crafting design systems. Clients and team members are able to better appreciate the concept of design systems by actually seeing the steps laid out in front of them.</p>
          <p>With 77 banks and more joining, the goal was to create the perfect tool to build layouts based on your user audience. A simple column design combined with a flexible user interface makes it easy for the local banks to create layouts based on what's current.</p>
        </div>
      </figure>

      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/eika/eika-01.png">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/eika/eika-02.png">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/eika/eika-03.png">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/eika/eika-04.png">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/eika/eika-05.png">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/eika/eika-06.png">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/eika/eika-07.png">
      </figure>
      <figure class="columns" v-scroll-reveal>
        <img src="/images/work/eika/eika-08.png">
        <small>-> This is a picture of a dog.</small>
      </figure>
    </section>
  </section>
</template>

<script>
export default {
  name: "Eika",
  data() {
    return {
      title: "Eika"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>