<template>
  <div class="content">
    <div class="grid-x">
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
        <h3 class="cell">
          <a href="https://gro-hydrokultur.firebaseapp.com/" target="_blankn"
            >Visit original site</a
          >
        </h3>
      </div>
      <div class="grid-x meta large-8 medium-10 auto">
        <p class="cell large-6 medium-6 small-6 float-left status">
          <span>Completed, 2016</span>
        </p>
        <p class="cell large-6 medium-6 small-6 float-left category">
          <span>Identity, Art Direction & Design</span>
        </p>
        <p class="cell large-6 medium-6 small-6 float-left tag">
          <span>Illustrations &searr;</span>

          <a
            href="//www.byhands.no/illustrators/sandra-blikaas"
            target="_blank"
          >
            Sandra Blikås (ByHands)
          </a>
        </p>
        <p class="cell large-6 medium-6 small-6 float-left tag">
          <span>
            Built by &searr;
          </span>
          <a href="//www.leifriksheim.com" target="_blank">Leif Riksheim</a>
        </p>
      </div>
    </div>
    <div
      class="grid-x grid-margin-x img-container"
      v-lazy-container="{ selector: 'img' }"
    >
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
  name: "gro-gront",
  data() {
    return {
      title: "Gro Grønt"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
