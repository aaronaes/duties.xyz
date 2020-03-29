<template>
  <footer>
    <!-- <section class="grid-container boom">
      <figure class="grid-x grid-margin-x">
        <router-link
          to="/about"
          class="cell"
          v-if="this.$route.name === 'Home'"
        >
          <transition name="fade" mode="out-in" appear>
            <h1>
              Read about the studio &xrarr;
            </h1>
          </transition>
        </router-link>

        <router-link to="/" class="cell" v-if="this.$route.name === 'About'">
          <transition name="fade" mode="out-in" appear>
            <h1>
              Check out the work &xrarr;
            </h1>
          </transition>
        </router-link>
      </figure>
    </section> -->
    <section class="grid-contaier fluid globalFooter">
      <figure class="grid-x grid-margin-x grid-padding-x ">
        <span class="cell shrink">
          <a href="//www.instagram.com/duties.xyz" target="_blank">
            <p>new@duties.xyz</p>
          </a>
          <a href="//www.instagram.com/duties.xyz" target="_blank">
            <p>Facebook</p>
          </a>
          <a href="//www.instagram.com/duties.xyz" target="_blank">
            <p>Instagram</p>
          </a>
        </span>
        <span
          ><a href="#top" class="cell shrink ">
            <p class="arrow">&uarr;</p>
          </a></span
        >
      </figure>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
