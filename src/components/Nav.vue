<template>
  <header>
    <section class="outer-margin topNav" v-if="$route.name !== 'Project'">
      <article class="row">
        <figure class="column nav-item heading">
          <router-link :to="{ name: 'Home' }">
            <h3 class="title hide-for-small-only">
              Duties:
            </h3>
            <h3 class="title show-for-small-only">
              XYZ:
            </h3>

            <h3 class="title page-title" v-if="$route.name === 'OnDuty'">
              On-duty
            </h3>
            <h3 class="title page-title" v-if="$route.name === 'Projects'">
              <h3 class="title">Projects</h3>
            </h3>
          </router-link>
        </figure>
        <figure class="column nav-item heading nav">
          <h3 class="title show-for-small-only" @click="showNav()">
            <span class="burger">M</span>
          </h3>
          <h3 class="title hide-for-small-only burger" @click="showNav()">
            Menu
          </h3>
        </figure>
      </article>
    </section>

    <section class="outer-margin menu" :class="{ active: show }">
      <article class="row header">
        <figure class="column nav-item nav heading">
          <h3 class="title hide-for-small-only" @click="hideNav()">
            Close
          </h3>
          <h3 class="title show-for-small-only" @click="hideNav()">
            <span class="burger">X</span>
          </h3>
        </figure>
      </article>
      <article class="row main">
        <figure class="list">
          <ul>
            <li class="heading fade-in" v-in-viewport.once>
              <router-link :to="{ name: 'About' }">
                <h1 class="title big" @click="hideNav()">
                  About
                </h1>
              </router-link>
            </li>
            <li class="heading fade-in" v-in-viewport.once>
              <router-link :to="{ name: 'OnDuty' }">
                <h1 class="title big" @click="hideNav()">
                  On-duty
                </h1>
              </router-link>
            </li>
            <li class="heading fade-in" v-in-viewport.once>
              <router-link :to="{ name: 'Projects' }">
                <h1 class="title big" @click="hideNav()">
                  Projects
                </h1>
              </router-link>
            </li>
            <li
              class="heading email show-for-small-only fade-in"
              v-in-viewport.once
            >
              <a
                href="mailto:new@duties.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 class="title big outlined">
                  <span>new@</span><br /><span>duties</span><br /><span
                    >.xyz</span
                  >
                </h1>
              </a>
            </li>
            <li
              class="heading email hide-for-small-only fade-in"
              v-in-viewport.once
            >
              <a
                href="mailto:new@duties.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 class="title big outlined">
                  <span>new@</span><span>duties</span><span>.xyz</span>
                </h1>
              </a>
            </li>
          </ul>
        </figure>
      </article>
      <article class="row footer">
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
      show: false
    };
  },
  methods: {
    showNav() {
      this.show = true;
    },
    hideNav() {
      this.show = false;
    }
  }
};
</script>
