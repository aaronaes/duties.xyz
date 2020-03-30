<template>
  <div class="content">
    <div class="grid-x">
      <div class="cell meta">
        <p class="status">Completed 2017</p>
      </div>
      <div class="cell large-8 medium-10 description">
        <h3>
          Fetch wanted to operate as a vendor for package shipping, which would
          differentiate from the current avilable carriers. The idea was that
          they would deliver flexible solutions by utilizing existing transport
          capacity in the market, such as messengerbikers, Uber and local taxi
          drivers.
        </h3>
        <h3>
          By doing so, they would open up to new markets and new players in the
          industry.
        </h3>
      </div>
      <div class="cell meta">
        <p>Photography by XXX</p>
        <p>Build by YYY</p>
      </div>
    </div>
    <div class="img-container" v-lazy-container="{ selector: 'img' }">
      <div class="grid-x grid-margin-x">
        <div class="cell">
          <img
            data-src="/images/work/fetch/fetch-01.jpg"
            data-srcset="/images/work/fetch/fetch-01@2x.jpg 2x"
          />
          <img
            data-src="/images/work/fetch/fetch-02.jpg"
            data-srcset="/images/work/fetch/fetch-02@2x.jpg 2x"
          />
          <img
            data-src="/images/work/fetch/fetch-03.jpg"
            data-srcset="/images/work/fetch/fetch-03@2x.jpg 2x"
          />
        </div>

        <!-- DOUBLE -->
        <div class="grid-x large-10 medium-10 center double">
          <div class="cell auto grid-padding-x">
            <img
              data-src="/images/work/fetch/fetch-04.jpg"
              data-srcset="/images/work/fetch/fetch-04@2x.jpg 2x"
            />
          </div>
          <div class="cell auto grid-padding-x">
            <img
              data-src="/images/work/fetch/fetch-05.jpg"
              data-srcset="/images/work/fetch/fetch-05@2x.jpg 2x"
            />
          </div>
        </div>

        <div class="cell">
          <img
            data-src="/images/work/fetch/fetch-06.jpg"
            data-srcset="/images/work/fetch/fetch-06@2x.jpg 2x"
          />
          <img
            data-src="/images/work/fetch/fetch-07.jpg"
            data-srcset="/images/work/fetch/fetch-07@2x.jpg 2x"
          />
          <img
            data-src="/images/work/fetch/fetch-08.jpg"
            data-srcset="/images/work/fetch/fetch-08@2x.jpg 2x"
          />
          <img
            data-src="/images/work/fetch/fetch-09.jpg"
            data-srcset="/images/work/fetch/fetch-09@2x.jpg 2x"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fetch",
  data() {
    return {
      title: "Fetch"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
