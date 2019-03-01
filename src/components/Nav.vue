<template>
  <nav class="header">
    <div class="row">
      <div class="columns">
        <div class="logo float-right">
          <router-link to="/about" v-if="pageName ==='Home' || pageName === 'Journal'">E &horbar; A</router-link>
          <router-link to="/" v-if="pageName ==='About'">X &horbar; X</router-link>
        </div>

        <div class="menu float-left">
          <router-link
            v-if="pageName === 'Home' || pageName === 'Journal' || pageName === 'About'"
            to="/"
          >Projects</router-link>

          <router-link
            v-if="pageName === 'Home' || pageName === 'Journal' || pageName === 'About'"
            to="/journal"
          >Journal</router-link>

          <div class="close">
            <a
              href="/"
              v-if="pageName !== 'About' && pageName !== 'Home' && pageName !== 'Journal'"
            >&xlarr;</a>
          </div>
        </div>

        <!-- <div class="float-right hide-for-small-only timestamp" v-if="pageName === 'About'">
            <span class="clock"></span>
            <span>&nbsp;->&nbsp;Oslo, NO</span>
        </div>-->
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