<template>
  <header>
    <section
      class="outer-margin topNav"
      :class="{ active: show }"
      v-if="$route.name !== 'Project'"
    >
      <article class="row">
        <figure class="column nav-item heading logo" :class="{ active: show }">
          <router-link :to="{ name: 'Home' }">
            <h3 class="title hide-for-small-only" v-if="$route.name !== 'XYZ'">
              Duties:
            </h3>
            <h3 class="title show-for-small-only" v-if="$route.name !== 'XYZ'">
              XYZ:
            </h3>

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
              &larr; Back
            </h3>
          </router-link>
        </figure>
        <figure
          class="column nav-item heading nav"
          v-if="$route.name !== 'XYZ'"
        >
          <h3 class="title show-for-small-only" @click="showNav()">
            <span class="burger" v-if="show === false">M</span>
            <span class="burger" v-if="show === true">X</span>
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
      </article>
    </section>

    <section class="outer-margin menu" :class="{ active: show }">
      <article class="row header">
        <figure class="column time">
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
            It is <span class="time" v-text="currentTime"></span> in Oslo,
            Norway.
          </p>

          <p
            class="title"
            @mouseover="isVisible = true"
            @mouseout="isVisible = false"
          >
            We are currently:
            <span class="highlight" v-if="isMorning()">ON-DUTY</span>
            <span class="highlight" v-else>OFF-DUTY</span>
          </p>
        </figure>
      </article>
      <article class="row main">
        <figure class="column list">
          <ul>
            <li class="heading">
              <router-link :to="{ name: 'Home' }">
                <h2 @click="hideNav()"><span class="number">➀</span>Home</h2>
              </router-link>
            </li>
            <li class="heading">
              <router-link :to="{ name: 'Projects' }">
                <h2 @click="hideNav()"><span class="number">➁</span>Work</h2>
              </router-link>
            </li>
            <li class="heading">
              <router-link :to="{ name: 'About' }">
                <h2 @click="hideNav()"><span class="number">➂</span>Studio</h2>
              </router-link>
            </li>
            <li class="heading">
              <router-link :to="{ name: 'News' }">
                <h2 @click="hideNav()"><span class="number">➃</span>News</h2>
              </router-link>
            </li>
            <li class="heading">
              <router-link :to="{ name: 'XYZ' }">
                <h2 @click="hideNav()"><span class="number">➄</span>XYZ</h2>
              </router-link>
            </li>
          </ul>
        </figure>
      </article>
      <article class="row hide footer">
        <figure>
          <ul class="links">
            <li>
              <p class="heading">
                <a
                  target="_blank"
                  class="title"
                  href="https://medium.com/@duties.xyz"
                >
                  Medium
                </a>
              </p>
            </li>
            <li>
              <p class="heading">
                <a
                  target="_blank"
                  class="title"
                  href="https://www.dribbble.com/duties"
                >
                  Dribbble
                </a>
              </p>
            </li>
            <li>
              <p class="heading">
                <a
                  href="https://www.linkedin.com/company/duties"
                  target="_blank"
                  class="title"
                >
                  LinkedIn
                </a>
              </p>
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
