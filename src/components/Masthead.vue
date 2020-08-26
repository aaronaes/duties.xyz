<template>
  <section class="grid-container masthead">
    <figure class="grid-x align-center">
      <div
        v-if="this.$route.name === 'About'"
        class="cell large-6 medium-8 small-12"
      >
        <h1>Duty / Duties</h1>
        <div class="dictionary">
          <div class="meta">
            <h2>
              <span class="stretch">/ˈdjuːti/</span>
              <span
                class="icon"
                @click.prevent="
                  playSound(
                    'https://dictionary.cambridge.org/media/english/uk_pron/u/ukd/ukdus/ukdusts008.mp3'
                  )
                "
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 60 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.1111 6.85181L14.2716 13.9075H4V28.685H14.2716L27.1111 35.7407V6.85181Z"
                    stroke="#E5594D"
                    stroke-width="6"
                  />
                  <path
                    d="M47.4748 3C52.5066 7.85299 55.3333 14.4342 55.3333 21.2963C55.3333 28.1584 52.5066 34.7396 47.4748 39.5926M38 12.1352C40.5159 14.5617 41.9293 17.8523 41.9293 21.2834C41.9293 24.7144 40.5159 28.005 38 30.4315"
                    stroke="#E5594D"
                    stroke-width="6"
                  />
                </svg>
              </span>
            </h2>
            <h2>noun</h2>
          </div>
          <h2>
            <ol>
              <li>
                A moral or legal obligation; a responsibility.
              </li>
              <li>
                A task or action that one is required to perform as part of
                one’s job.
              </li>
            </ol>
          </h2>
        </div>
      </div>
      <div class="cell large-6 medium-8 small-12" v-else>
        <h1>
          A creative partner and design studio for thoughtfully crafted
          products.
        </h1>
      </div>
    </figure>
  </section>
</template>

<script>
export default {
  name: "Masthead",
  props: {
    heading: {
      type: String,
      required: true
    }
  },
  methods: {
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  }
};
</script>
