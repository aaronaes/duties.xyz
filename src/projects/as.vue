<template>
  <div class="content">
    <div class="grid-x grid-margin-x">
      <div class="cell meta">
        <h4 class="status">Completed 2017</h4>
      </div>
      <div class="cell large-8 medium-10 description">
        <h3>
          Authentic Scandinavia is a dedicated online tour operator, creating
          and selling independent package tours and escorted coach tours
          throughout Scandinavia and the other Nordic countries.
        </h3>
        <h3>
          The visual cues utilized in the new identity was high-end typography
          and luxurious colors, as Authentic Scandinavia delivers high-end
          travel packages.
        </h3>
      </div>
      <div class="cell meta">
        <h4>Photography by XXX</h4>
        <h4>Build by YYY</h4>
        <h4>
          <a href="https://authentic-scandinavia.com" target="_blank"
            >Visit site</a
          >
        </h4>
      </div>
    </div>
    <div class="img-container" v-lazy-container="{ selector: 'img' }">
      <div class="grid-x grid-margin-x">
        <div class="cell">
          <img
            data-src="/images/work/as/as-02.png"
            data-srcset="/images/work/as/as-02@2x.png 2x"
          />
          <img
            data-src="/images/work/as/as-03.png"
            data-srcset="/images/work/as/as-03@2x.png 2x"
          />
          <img
            data-src="/images/work/as/as-09.png"
            data-srcset="/images/work/as/as-09@2x.png 2x"
          />
        </div>

        <!-- DOUBLE -->
        <div class="grid-x large-10 medium-10 center">
          <div class="cell auto grid-padding-x">
            <img
              data-src="/images/work/as/as-04.png"
              data-srcset="/images/work/as/as-04@2x.png 2x"
            />
          </div>
          <div class="cell auto grid-padding-x">
            <img
              data-src="/images/work/as/as-05.png"
              data-srcset="/images/work/as/as-05@2x.png 2x"
            />
          </div>
        </div>
        <div class="cell">
          <img
            class="space"
            data-src="/images/work/as/as-01.png"
            data-srcset="/images/work/as/as-01@2x.png 2x"
          />
        </div>
        <!-- DOUBLE -->
        <div class="grid-x large-10 medium-10 center">
          <div class="cell auto grid-padding-x">
            <img
              data-src="/images/work/as/as-07.png"
              data-srcset="/images/work/as/as-07@2x.png 2x"
            />
          </div>
          <div class="cell auto grid-padding-x">
            <img
              data-src="/images/work/as/as-08.png"
              data-srcset="/images/work/as/as-08@2x.png 2x"
            />
          </div>
        </div>
        <div class="cell">
          <img
            data-src="/images/work/as/as-10.png"
            data-srcset="/images/work/as/as-10@2x.png 2x"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "authentic-scandinavia",
  data() {
    return {
      title: "Authentic Scandinavia"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
