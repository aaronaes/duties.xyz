<template>
  <div class="content">
    <div class="grid-x">
      <div class="cell meta">
        <h4 class="status">Completed 2016</h4>
      </div>
      <div class="cell large-8 medium-10 description">
        <h3>
          Gro Grønt grows exotic and unique herbs and vegetables, from a
          container in the centre of Oslo. From here, they sell and distribute
          high-quality ingredients to all the top-shelf restaurants and chefs in
          the greater Oslo area.
        </h3>
        <h3>
          From the name, which was already decided on, I developed a unique and
          flexible brand language and first-version of their website.
        </h3>
      </div>
      <div class="cell meta">
        <h4>
          Illustrations by
          <a href="https://www.byhands.no/illustrators/sandra-blikaas">
            Sandra Bliksaas
          </a>
        </h4>
        <h4>Build by YYY</h4>
      </div>
    </div>
    <div class="img-container" v-lazy-container="{ selector: 'img' }">
      <img data-src="/images/work/gro/gro-01.png" />
      <img data-src="/images/work/gro/gro-02.png" />
      <img data-src="/images/work/gro/gro-03.png" />
      <img data-src="/images/work/gro/gro-04.png" />
      <img data-src="/images/work/gro/gro-05.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "gro-hydroponics",
  data() {
    return {
      title: "Gro Hydroponics"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
