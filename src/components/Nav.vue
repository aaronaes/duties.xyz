<template>
  <nav class="header">
    <div class="row">
      <div class="columns">
        <div>
          <!-- <router-link class="float-left" to="/">
            <h2 class="float-left">Erling Aarønæs</h2>
          </router-link>-->
          <h2>
            <router-link class="float-left" to="/">E &horbar; A</router-link>
          </h2>
          <h2>
            <span
              class="float-left"
              v-if="pageName !== 'Home' && pageName !== 'About' && pageName !== 'Journal'"
            >&nbsp;&cross; {{ this.$route.name }}</span>
          </h2>
          <h2>
            <span
              class="float-left"
              v-if="pageName !== 'Home' && pageName !== 'About' && pageName === 'Journal'"
            >&nbsp;—> Journal</span>
          </h2>
          <h2>
            <span
              class="float-left"
              v-if="pageName !== 'Home' && pageName === 'About' && pageName !== 'Journal'"
            >&nbsp;-> About</span>
          </h2>
        </div>
        <div class="float-right hide-for-small-only timestamp" v-if="pageName === 'About'">
          <h2>
            <span class="clock"></span>
            <span>&nbsp;->&nbsp;Oslo, NO</span>
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