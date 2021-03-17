<template>
  <header :class="{ active: show }">
    <section class="outer-margin navigation" v-if="$route.name !== 'Project'">
      <article class="row header">
        <figure class="column nav-item heading logo" :class="{ active: show }">
          <router-link :to="{ name: 'Home' }">
            <h3 class="title site-title">Duties:</h3>

            <h3 class="title page-title" v-if="$route.name === 'OnDuty'">
              News
            </h3>
            <h3 class="title page-title" v-if="$route.name === 'Projects'">
              Projects
            </h3>
            <h3 class="title page-title" v-if="$route.name === 'News'">
              News
            </h3>
            <h3 class="title page-title" v-if="$route.name === 'XYZ'">
              XYZ
            </h3>
          </router-link>
        </figure>
        <figure class="column nav-item nav">
          <h3 class="title show-for-small-only" @click="showNav()">
            <span class="burger" v-if="!show">
              M
            </span>
            <span class="burger" v-else>C</span>
          </h3>

          <h3
            class="title hide-for-small-only burger"
            @click="showNav()"
            v-if="show === false"
          >
            Menu
          </h3>
          <h3
            class="title hide-for-small-only burger"
            @click="showNav()"
            v-if="show === true"
          >
            Close
          </h3>
        </figure>
        <figure class="column time" :class="{ active: show }">
          <img
            v-if="isMorning()"
            :class="{ showMe: isVisible }"
            src="https://media1.tenor.com/images/16bf98d44e79307914de07d044257f1f/tenor.gif?itemid=9553858"
          />
          <img
            v-else
            :class="{ showMe: isVisible }"
            src="https://media1.tenor.com/images/5a77a38f05546da59092a9650c08bef5/tenor.gif?itemid=4946897"
          />
          <p class="title">
            It is <span class="currentTime" v-text="currentTime"></span> in
            Oslo, Norway.
          </p>

          <p
            class="status"
            @mouseover="isVisible = true"
            @mouseout="isVisible = false"
          >
            We are currently:
            <span class="highlight" v-if="isMorning()">ON-DUTY</span>
            <span class="highlight" v-else>OFF-DUTY</span>
          </p>
        </figure>
      </article>

      <article class="row main" :class="{ active: show }">
        <figure class="list">
          <ul>
            <li class="heading">
              <router-link :to="{ name: 'Home' }">
                <h2 class="number markdown" @click="hideNav()">
                  <span>&#x2780;</span>
                  <span>Home</span>
                </h2>
              </router-link>
            </li>
            <li class="heading">
              <router-link :to="{ name: 'Projects' }">
                <h2 class="number markdown" @click="hideNav()">
                  <span>&#x2781;</span>
                  <span>Work</span>
                </h2>
              </router-link>
            </li>
            <li class="heading">
              <router-link :to="{ name: 'Studio' }">
                <h2 class="number markdown" @click="hideNav()">
                  <span>&#x2782;</span>
                  <span>Studio</span>
                </h2>
              </router-link>
            </li>
            <li class="heading">
              <router-link :to="{ name: 'News' }">
                <h2 class="number markdown" @click="hideNav()">
                  <span>&#x2783;</span>
                  <span>News</span>
                </h2>
              </router-link>
            </li>
            <li class="heading">
              <router-link :to="{ name: 'XYZ' }">
                <h2 class="number markdown" @click="hideNav()">
                  <span>&#x2784;</span>
                  <span>XYZ</span>
                </h2>
              </router-link>
            </li>
          </ul>
        </figure>
      </article>
    </section>
  </header>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      show: false,
      currentTime: null,
      isVisible: false
    };
  },
  methods: {
    showNav() {
      // this.show = true;
      document.body.classList.toggle("navOpen");
      this.show = !this.show;
    },
    hideNav() {
      this.show = false;
      document.body.classList.remove("navOpen");
    },
    isMorning() {
      return new Date().getHours() > 9 && new Date().getHours() < 17
        ? true
        : false;
    },
    /* eslint-disable no-undef */
    updateCurrentTime() {
      this.currentTime = moment().format("LT");
    }
  },
  created() {
    this.currentTime = moment().format("LT");
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  }
};
</script>
