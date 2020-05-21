<template>
  <nav>
    <section class="grid-container">
      <figure class="grid-x globalNav">
        <router-link class="cell shrink" to="/">
          <transition name="fade" mode="out-in" appear>
            <h3 v-if="this.$route.name === 'Links'">Duties<span></span></h3>
          </transition>
        </router-link>
        <router-link class="burger" to="/" v-if="this.$route.name === 'About'">
          <h3>
            <transition name="fade" mode="out-in" appear>
              <span>Duties</span>
            </transition>
            <span class="arrow">&rarr;</span>
          </h3>
        </router-link>
      </figure>
    </section>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>
