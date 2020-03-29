<template>
  <section class="grid-container masthead">
    <figure class="grid-x grid-margin-x">
      <div
        class="cell large-8 medium-12 small-12"
        v-if="this.$route.name === 'Home'"
      >
        <h1>
          A creative partner <br />
          and design studio for thoughtfully crafted products.
        </h1>
      </div>
      <div v-else class="cell large-8 medium-12 small-12">
        <h1>Duty / Duties</h1>
        <div class="dictionary">
          <div class="meta">
            <h3>
              /ˈdjuːti/
              <span
                @click.prevent="
                  playSound(
                    'https://dictionary.cambridge.org/media/english/uk_pron/u/ukd/ukdus/ukdusts008.mp3'
                  )
                "
                ><i class="fas fa-volume-up"></i>
                <p>
                  Play
                </p></span
              >
            </h3>
            <h3>noun</h3>
          </div>
          <h3>
            <ol>
              <li>
                A moral or legal obligation; a responsibility.
              </li>
              <li>
                A task or action that one is required to perform as part of
                one’s job.
              </li>
            </ol>
          </h3>
        </div>
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
