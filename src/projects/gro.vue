<template>
  <section id="gro" class="project">
    <section class="row">
      <figure class="columns">
        <h1>An Oslo-based hydroponic startup.</h1>
        <p class="copy">
          Gro Grønt grows exotic and unique herbs and vegetables, from a
          container in the centre of Oslo. From here, they sell and distribute
          high-quality ingredients to all the top-shelf restaurants and chefs
          in the greater Oslo area.
        </p>
        <p class="copy" v-show="showMore">
          From the name, which was already decided on, I developed a unique
          and flexible brand language and first-version of their website.
          <br />Illustrations done by the very talanted
          <a
            href="https://www.byhands.no/illustrators/sandra-blikaas"
          >Sandra Blikaas &nearr;</a>
        </p>
        <div class="meta">
          <a
            @click.prevent="showMore = !showMore"
            class="toggle float-left"
            href="#gro"
            :class="{ opened: showMore }"
          >
            <p></p>
          </a>
          <a class="float-left" href="https://gro-hydrokultur.firebaseapp.com/" target="_blank">
            <p>
              View live
              <span>&nearr;</span>
            </p>
          </a>
        </div>
      </figure>

      <figure>
        <img class="columns" src="/images/work/gro/gro-01.png" />
      </figure>
      <figure v-show="morePics">
        <img class="columns" src="/images/work/gro/gro-02.png" />
        <img class="columns" src="/images/work/gro/gro-03.png" />
        <img class="columns" src="/images/work/gro/gro-04.png" />
        <img class="columns" src="/images/work/gro/gro-05.png" />
      </figure>
      <figure class="columns">
        <a @click.prevent="morePics = !morePics" class="toggleImg" :class="{ opened: morePics }">
          <p></p>
        </a>
      </figure>
    </section>
  </section>
</template>

<script>
export default {
  name: "Gro",
  data() {
    return {
      title: "Gro",
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
