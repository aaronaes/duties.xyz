<template>
  <div class="content">
    <div class="grid-x grid-margin-x">
      <div class="cell meta">
        <h4 class="status">Completed 2017</h4>
      </div>
      <div class="cell large-8 medium-10 description">
        <h3 class="cell large-10">
          Humid Magazine was a Norwegian neo-erotic publication with a different
          approach. Inspired by foreign neo-eroticism, Humid introduced the
          Norwegian woman as a sexual being on her own terms.
        </h3>
        <h3 class="cell large-10">
          We assisted in the design of the magazine masthead and produced a
          graphic language with a premium feel to exist alongside the
          photo-centric layouts across print and digital formats.
        </h3>
      </div>
    </div>
    <div class="img-container" v-lazy-container="{ selector: 'img' }">
      <div class="grid-x grid-margin-x">
        <div class="cell">
          <img
            data-src="/images/work/humid/humid-01.png"
            data-srcset="/images/work/humid/humid-01@2x.png 2x"
          />
          <img
            data-src="/images/work/humid/humid-02.png"
            data-srcset="/images/work/humid/humid-02@2x.png 2x"
          />
          <img
            class="large-10 medium-10 center"
            data-src="/images/work/humid/humid-03.png"
            data-srcset="/images/work/humid/humid-03@2x.png 2x"
          />
          <img
            data-src="/images/work/humid/humid-04.png"
            data-srcset="/images/work/humid/humid-04@2x.png 2x"
          />
        </div>

        <div class="grid-x double">
          <div class="cell auto grid-padding-x">
            <img
              data-src="/images/work/humid/humid-05.png"
              data-srcset="/images/work/humid/humid-05@2x.png 2x"
            />
          </div>
          <div class="cell auto grid-padding-x">
            <img
              data-src="/images/work/humid/humid-06.png"
              data-srcset="/images/work/humid/humid-06@2x.png 2x"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "humid",
  data() {
    return {
      title: "Humid",
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
