<template>
  <nav class="header">
    <div class="row">
      <div class="columns">
        <div>
          <!-- <span class="float-left">@</span> -->
          <router-link class="float-left" to="/">
            <h2>Erling Aarønæs</h2>
          </router-link>
          <span
            class="float-left"
            v-if="pageName !== 'Home' && pageName !== 'About' && pageName !== 'Journal'"
          >&nbsp;/ {{ this.$route.name }}</span>
          <span
            class="float-left"
            v-if="pageName !== 'Home' && pageName !== 'About' && pageName === 'Journal'"
          >&nbsp;/ Journal</span>
          <span
            class="float-left"
            v-if="pageName !== 'Home' && pageName === 'About' && pageName !== 'Journal'"
          >&nbsp;/ About</span>
          <!-- <div
            class="small-12 medium-offset-1 medium-5 large-offset-1 large-4 float-left"
            v-if="pageName === 'Home'"
          >
            <p>Senior designer and art-director working with startups, brands, cultural projects and friends, telling their stories in a large variety of formats. Sometimes
              <router-link class="underline" to="/journal">I don't finish projects</router-link>
            </p>
          </div>-->
        </div>
        <div class="float-right hide-for-small-only timestamp">
          <h2>
            <span class="clock"></span>
            <span>&nbsp; &rarr; &nbsp;Oslo, NO</span>
          </h2>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
// Moment
$("span.clock");
function update() {
  $("span.clock").html(moment().format("LT"));
}
setInterval(update, 100);
</script>