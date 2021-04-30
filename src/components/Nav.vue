<template>
  <header :class="{ active: show }">
    <section
      class="outer-margin section navigation"
      v-if="$route.name === 'Links'"
    >
      <article class="row header">
        <figure class="column nav-item">
          <h3 class="site-title">
            XYZ Links
          </h3>
          <br />
          <br />
          <h3 class="site-title">
            At Duties* we help our clients and friends with website design,
            apps, UX, brand identities and a bit of XYZ.
          </h3>
        </figure>
      </article>
    </section>
    <section
      class="outer-margin section navigation "
      v-if="$route.name !== 'Project'"
    >
      <article class="row header">
        <figure class="column nav-item logo" :class="{ active: show }">
          <router-link :to="{ name: 'Home' }" v-if="$route.name !== 'Links'">
            <h3 class="title">
              <span class="markdown site-title" v-if="$route.name !== 'Links'"
                >Duties</span
              >
              <span class="markdown close" v-if="$route.name !== 'Links'"
                >Home</span
              >
              <span
                class="title page-title"
                v-if="$route.name !== 'Links' && $route.name !== 'Home'"
              >
                {{ this.$route.name }}
              </span>
            </h3>
          </router-link>
        </figure>
        <figure
          class="column nav-item menu"
          :class="{ active: show }"
          v-if="$route.name !== 'Links'"
        >
          <div class="burger show-for-small-only" @click="showNav()">
            <svg
              width="24"
              height="14"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="!show"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 2V0H0V2H24ZM24 8V6H0V8H24ZM24 12V14H0V12H24Z"
                fill="#17171C"
              />
            </svg>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-else
              class="close"
            >
              <path
                d="M18.0002 16.586L16.586 18.0312L9.00051 10.2794L1.41426 18.032L0 16.5868L7.58625 8.83415L0.386523 1.47652L1.80078 0.03125L9.00051 7.38887L16.1995 0.0320425L17.6137 1.47732L10.4148 8.83415L18.0002 16.586Z"
                fill="#17171C"
              />
            </svg>
          </div>

          <h3
            class="title hide-for-small-only"
            @click="showNav()"
            v-if="show === false"
          >
            Menu
          </h3>
          <h3
            class="title hide-for-small-only"
            @click="showNav()"
            v-if="show === true"
          >
            Close
          </h3>
        </figure>
        <figure class="column time" :class="{ active: show }">
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
          <br />
          <p
            @click="
              toggleBadd();
              hideNav();
            "
          >
            <span v-if="isFucked === true">Jeg vil hjeeeem!</span>
            <span v-else>BaddMode?</span>
          </p>
        </figure>
      </article>
      <div class="media">
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
      </div>

      <article class="row main" :class="{ active: show }">
        <figure class="list fade-list">
          <ul>
            <li class="heading list-item" style="--item-order:1">
              <router-link :to="{ name: 'Home' }">
                <h2 class="number markdown" @click="hideNav()">
                  <span>1</span>
                  <span>Home</span>
                </h2>
              </router-link>
            </li>
            <li class="heading list-item" style="--item-order:2">
              <router-link :to="{ name: 'Projects' }">
                <h2 class="number markdown" @click="hideNav()">
                  <span>2</span>
                  <span>Work</span>
                </h2>
              </router-link>
            </li>
            <li class="heading list-item" style="--item-order:3">
              <router-link :to="{ name: 'Studio' }">
                <h2 class="number markdown" @click="hideNav()">
                  <span>3</span>
                  <span>Studio</span>
                </h2>
              </router-link>
            </li>
            <li class="heading list-item" style="--item-order:4">
              <router-link :to="{ name: 'News' }">
                <h2 class="number markdown" @click="hideNav()">
                  <span>4</span>
                  <span>News</span>
                </h2>
              </router-link>
            </li>
            <li class="heading list-item" style="--item-order:5">
              <router-link :to="{ name: 'XYZ' }">
                <h2 class="number markdown" @click="hideNav()">
                  <span>5</span>
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
      isVisible: false,
      toggle: false,
      isFucked: false
    };
  },
  methods: {
    showNav() {
      document.body.classList.toggle("navOpen");
      this.show = !this.show;
    },
    hideNav() {
      setTimeout(() => {
        this.show = false;
        document.body.classList.remove("navOpen");
      }, 250);
    },
    toggleBadd() {
      document.body.classList.toggle("baddmono");
      this.isFucked = !this.isFucked;
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
