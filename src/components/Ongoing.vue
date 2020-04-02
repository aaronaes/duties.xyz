<template>
  <section id="go" class="grid-container projectList">
    <div class="cell">
      <h3>Coming soon &searr;</h3>
    </div>
    <figure
      class="grid-x grid-padding-x small-up-2 medium-up-3 large-up-5 ongoing vlpa"
      v-lazy-container="{ selector: 'img' }"
    >
      <!-- Upcoming work -->
      <div class="cell">
        <img
          data-src="/images/ongoing/ongoing-01.jpg"
          data-srcset="/images/ongoing/ongoing-01@2x.jpg 2x"
        />
        <p>A new way to get your take-out</p>
      </div>
      <div class="cell">
        <img
          data-src="/images/ongoing/ongoing-01.jpg"
          data-srcset="/images/ongoing/ongoing-01@2x.jpg 2x"
        />
        <p>A new way to get your take-out</p>
      </div>
      <div class="cell">
        <img
          data-src="/images/ongoing/ongoing-01.jpg"
          data-srcset="/images/ongoing/ongoing-01@2x.jpg 2x"
        />
        <p>A new way to get your take-out</p>
      </div>
    </figure>
  </section>
</template>

<script>
export default {
  name: "Ongoing"
};
</script>
