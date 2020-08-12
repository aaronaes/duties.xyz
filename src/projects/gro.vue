<template>
  <div>
    <div class="content grid-container">
      <div class="grid-x description">
        <div class="cell">
          <h2>
            Gro Grønt grows and distributes high-quality ingredients in the form
            of exotic vegetables and unique herbs to high-end restaurants and
            chefs around the Oslo metropolitan area; all from a custom-built
            container in the centre of town.
          </h2>
          <h2>
            We were asked to develop a unique and flexible brand identity to
            reflect their offering across physical and digital touchpoints, as
            well as the design of their company website.
          </h2>
          <h2 class="cell this">
            <a href="https://gro-hydrokultur.firebaseapp.com/" target="_blank"
              >Visit site</a
            >
          </h2>
        </div>
      </div>
      <div class="grid-x meta">
        <div class="cell large-4 medium-4 small-12">
          <p class="title">Service</p>
          <p class="float-left">
            <span>Art direction</span> <span>User Experience</span>
            <span>Design</span>
          </p>
        </div>

        <div class="cell large-4 medium-4 small-12">
          <p class="title">Build</p>
          <p class="float-left tag">
            <a href="//www.leifriksheim.com" target="_blank">Leif Riksheim</a>
          </p>
        </div>
        <div class="cell large-4 medium-4 small-12">
          <p class="title">Illustrations</p>
          <p class="float-left tag">
            <a
              href="//www.byhands.no/illustrators/sandra-blikaas"
              target="_blank"
            >
              Sandra Blikås (ByHands)
            </a>
          </p>
        </div>
      </div>
    </div>

    <div class="content grid-container fluid ">
      <div
        class="grid-x img-container align-center"
        v-lazy-container="{ selector: 'img' }"
      >
        <div class="cell">
          <img
            data-src="/images/work/gro/gro-gront-02.jpg"
            data-srcset="/images/work/gro/gro-gront-02@2x.jpg 2x"
          />
        </div>
        <div
          class="grid-x grid-padding-x justify-middle large-10 medium-10 small-10"
        >
          <div class="cell description">
            <h2>
              We were asked to develop a unique and flexible brand identity to
              reflect their offering across physical and digital touchpoints, as
              well as the design of their company website.
            </h2>
          </div>
        </div>
        <div class="cell">
          <img
            data-src="/images/work/gro/gro-gront-03.jpg"
            data-srcset="/images/work/gro/gro-gront-03@2x.jpg 2x"
          />
        </div>
        <div class="cell large-10 medium-10 small-12">
          <img
            data-src="/images/work/gro/gro-gront-07.jpg"
            data-srcset="/images/work/gro/gro-gront-07@2x.jpg 2x"
          />
        </div>
        <div class="cell">
          <img
            data-src="/images/work/gro/gro-gront-04.jpg"
            data-srcset="/images/work/gro/gro-gront-04@2x.jpg 2x"
          />
        </div>
        <div class="cell">
          <img
            data-src="/images/work/gro/gro-gront-05.jpg"
            data-srcset="/images/work/gro/gro-gront-05@2x.jpg 2x"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gro-gront",
  data() {
    return {
      title: "Gro Grønt",
      image: "/images/work/gro/gro-gront-07.jpg",
      coverSize: "portrait",
      bg: "#f1f2ec"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
