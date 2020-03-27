<template>
  <section class="grid-container masthead slide" data-color="home">
    <figure class="grid-x">
      <div class="cell large-9 medium-10" v-if="this.$route.name === 'Home'">
        <h1>
          A creative partner <br />
          and design studio for thoughtfully crafted products.
        </h1>
      </div>
      <div v-else class="cell">
        <h1>Duty / Duties</h1>
        <div class="dictionary">
          <div class="meta">
            <h4>
              /ˈdjuːti/<i
                @click.prevent="
                  playSound(
                    'https://dictionary.cambridge.org/media/english/uk_pron/u/ukd/ukdus/ukdusts008.mp3'
                  )
                "
                class="fas fa-volume-up"
              ></i>
            </h4>
            <h4>noun</h4>
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
