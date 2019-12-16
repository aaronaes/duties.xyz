<template>
  <section id="gro" class="project">
    <section class="row">
      <figure class="columns title">
        <h2>Gro Grønt</h2>
        <p>An Oslo-based hydroponic startup.</p>
        <a
          href="#gro"
          @click="showMore = !showMore"
          class="toggle"
          :class="{ opened: showMore }"
        >
          <p>
            <span></span>
          </p>
        </a>
        <div v-show="showMore" class="toggleInfo">
          <p class="copy">
            Gro Grønt grows exotic and unique herbs and vegetables, from a
            container in the centre of Oslo. From here, they sell and distribute
            high-quality ingredients to all the top-shelf restaurants and chefs
            in the greater Oslo area.
          </p>
          <p class="copy">
            From the name, which was already decided on, I developed a unique
            and flexible brand language and first-version of their website.
          </p>
          <p>
            Illustrations done by the very talanted
            <a href="https://www.byhands.no/illustrators/sandra-blikaas"
              >Sandra Blikaas &nearr;</a
            >
          </p>
          <p class="link">
            <a href="https://gro-hydrokultur.firebaseapp.com/" target="_blank"
              >Visit site &nearr;</a
            >
          </p>
        </div>
      </figure>

      <figure class="columns">
        <img src="/images/work/gro/gro-01.png" />
      </figure>
      <figure class="columns">
        <img src="/images/work/gro/gro-02.png" />
      </figure>
      <figure class="columns">
        <img src="/images/work/gro/gro-03.png" />
      </figure>
      <figure class="columns">
        <img src="/images/work/gro/gro-04.png" />
      </figure>
      <figure class="columns">
        <img src="/images/work/gro/gro-05.png" />
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
