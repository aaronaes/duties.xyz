<template>
  <div class="content">
    <div class="grid-x">
      <div class="cell meta">
        <h4 class="status">Completed 2016</h4>
      </div>
      <div class="cell large-8 medium-10 description">
        <h3>
          Gro Grønt grows and distributes high-quality ingredients in the form
          of exotic vegetables and unique herbs to high-end restaurants and
          chefs around the Oslo metropolitan area; all from a custom-built
          container in the centre of town.
        </h3>
        <h3>
          We were asked to develop a unique and flexible brand identity to
          reflect their offering across physical and digital touchpoints, as
          well as the design of their company website.
        </h3>
      </div>
      <div class="cell meta">
        <h4>
          Illustrations by
          <a
            href="https://www.byhands.no/illustrators/sandra-blikaas"
            target="_blank"
          >
            Sandra Blikås (ByHands)
          </a>
        </h4>
        <h4>
          Build by
          <a href="//www.leifriksheim.com" target="_blank">Leif Riksheim</a>
        </h4>
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
