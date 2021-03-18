<template>
  <div id="content">
    <section class="outer-margin section page-hero fullheight">
      <article class="row linklist">
        <figure class="column">
          <ul class="list fade-list">
            <li class="list-item" style="--item-order:1">
              <a href="https://duties.xyz" target="_blank">
                <h2 class="number">
                  <span>➀</span>
                  <span>Duties.xyz</span>
                </h2>
              </a>
            </li>
            <li class="list-item" style="--item-order:2">
              <a href="https://medium.com/@duties.xyz" target="_blank">
                <h2 class="number">
                  <span>➁</span>
                  <span>Medium</span>
                </h2>
              </a>
            </li>
            <li class="list-item" style="--item-order:3">
              <a
                href="https://open.spotify.com/playlist/39NC0tBJ0FrrqBD8Tj156m?si=HS5YF10BQfmFFN6VHJtYOQ"
                target="_blank"
              >
                <h2 class="number">
                  <span>➂</span>
                  <span>Spotify</span>
                </h2>
              </a>
            </li>
            <li class="list-item" style="--item-order:4">
              <a
                href="https://www.linkedin.com/company/duties/"
                target="_blank"
              >
                <h2 class="number">
                  <span>➃</span>
                  <span>LinkedIn</span>
                </h2>
              </a>
            </li>
            <li class="list-item" style="--item-order:5">
              <a href="https://dribbble.com/duties/" target="_blank">
                <h2 class="number">
                  <span>➄</span>
                  <span>Dribbble</span>
                </h2>
              </a>
            </li>
            <li class="list-item" style="--item-order:6">
              <a href="https://facebook.com/duties" target="_blank">
                <h2 class="number">
                  <span>➅</span>
                  <span>Facebook</span>
                </h2>
              </a>
            </li>
          </ul>
        </figure>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "Links",
  data() {
    return {
      title: "Links"
    };
  },
  beforeCreate() {
    this.$nextTick().then(() => document.body.classList.add("page-links"));
  },
  beforeDestroy() {
    this.$nextTick().then(() => document.body.classList.remove("page-links"));
  }
};
</script>
