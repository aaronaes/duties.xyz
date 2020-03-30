<template>
  <div class="content">
    <div class="grid-x">
      <div class="cell meta">
        <p class="status">Completed 2016</p>
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
        <p>
          Illustrations by
          <a
            href="https://www.byhands.no/illustrators/sandra-blikaas"
            target="_blank"
          >
            Sandra Blikås (ByHands)
          </a>
        </p>
        <p>
          Build by
          <a href="//www.leifriksheim.com" target="_blank">Leif Riksheim</a>
        </p>
      </div>
    </div>
    <div class="img-container" v-lazy-container="{ selector: 'img' }">
      <img
        data-src="/images/work/gro/gro-gront-01.jpg"
        data-srcset="/images/work/gro/gro-gront-01@2x.jpg 2x"
      />
      <img
        data-src="/images/work/gro/gro-gront-02.jpg"
        data-srcset="/images/work/gro/gro-gront-02@2x.jpg 2x"
      />
      <img
        data-src="/images/work/gro/gro-gront-03.jpg"
        data-srcset="/images/work/gro/gro-gront-03@2x.jpg 2x"
      />
      <img
        data-src="/images/work/gro/gro-gront-04.jpg"
        data-srcset="/images/work/gro/gro-gront-04@2x.jpg 2x"
      />
      <img
        data-src="/images/work/gro/gro-gront-05.jpg"
        data-srcset="/images/work/gro/gro-gront-05@2x.jpg 2x"
      />
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
