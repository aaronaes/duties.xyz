<template>
  <transition name="fade">
    <nav class="nav header">
      <div class="row">
        <div class="columns">
          <div class="float-left">
            <div class="fizz" v-if="this.pageName === 'Home'">
              <router-link to="/">Haute-ML —></router-link>
            </div>
            <div class="fizz" v-if="this.pageName === 'Home' && this.pageName === 'About'">
              <router-link to="/">&larr; Overview</router-link>
            </div>
            <div class="fizz">
              <div v-if="this.pageName === 'About'">
                <p>
                  The collected works of Erling Aarønæs
                  <br>
                  <span class="clock"></span>
                  <span>&nbsp; &rarr; &nbsp;Oslo, NO</span>
                </p>
              </div>
            </div>
          </div>
          <div class="float-right">
            <div class="fizz menu">
              <router-link v-if="this.pageName === 'About'" to="/">&#x2715;</router-link>
              <router-link v-if="this.pageName === 'Home'" to="/about">About</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      pageStyle: {
        backgroundColor: ""
      }
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  }
};
</script>