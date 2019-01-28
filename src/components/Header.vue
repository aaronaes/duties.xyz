<template>
  <nav v-bind:class="['header']" v-if="$route.meta.showHeader">
    <div class="row">
      <div class="float-left">
        <div class="columns">
          <router-link href="/" to="/">@aaronaes</router-link>
        </div>
      </div>
      <div class="float-right">
        <div class="columns">
          <router-link style="padding-right: 30px;" class="link float-left" to="/">Work</router-link>
          <router-link style="padding-right: 30px;" class="float-left" to="/about">Info</router-link>
        </div>
      </div>
    </div>
  </nav>

  <!-- <nav v-bind:class="['header']">
    <div class="row columns">
      <div class="item">
        <router-link href="/" to="/">@aaronaes</router-link>
      </div>
      <div class="menu">
        <router-link class="link to-info" to="/">Projects</router-link>
        <router-link class="link to-work" to="/about">Information</router-link>
      </div>
    </div>
  </nav>-->
</template>

<script>
export default {
  name: "Header",
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>
