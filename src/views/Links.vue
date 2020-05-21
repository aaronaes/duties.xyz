<template>
  <main class="linkList">
    <section class="grid-container projectList">
      <figure class="grid-x projects">
        <h3 class="section-title">Links &searr;</h3>
        <details class="cell">
          <summary class="grid-x align-middle">
            <a href="https://www.duties.xyz" target="_blank">
              <h2>
                <span class="dot">●</span>
                <span class="title">Website</span>
              </h2>
              <h2 class="togl arrow">Link</h2>
            </a>
          </summary>
        </details>
        <details class="cell">
          <summary class="grid-x align-middle">
            <a href="https://medium.com/@duties.xyz" target="_blank">
              <h2>
                <span class="dot">●</span>
                <span class="title">Medium</span>
              </h2>
              <h2 class="togl arrow">Link</h2>
            </a>
          </summary>
        </details>
        <details class="cell">
          <summary class="grid-x align-middle">
            <a
              href="https://open.spotify.com/playlist/39NC0tBJ0FrrqBD8Tj156m?si=HS5YF10BQfmFFN6VHJtYOQ"
              target="_blank"
            >
              <h2>
                <span class="dot">●</span>
                <span class="title">Spotify</span>
              </h2>
              <h2 class="togl arrow">Link</h2>
            </a>
          </summary>
        </details>
        <details class="cell">
          <summary class="grid-x align-middle">
            <a href="https://www.linkedin.com/company/duties/" target="_blank">
              <h2>
                <span class="dot">●</span>
                <span class="title">LinkedIn</span>
              </h2>
              <h2 class="togl arrow">Link</h2>
            </a>
          </summary>
        </details>
        <details class="cell">
          <summary class="grid-x align-middle">
            <a href="https://dribbble.com/duties/collections" target="_blank">
              <h2>
                <span class="dot">●</span>
                <span class="title">Dribbble</span>
              </h2>
              <h2 class="togl arrow">Link</h2>
            </a>
          </summary>
        </details>
        <details class="cell">
          <summary class="grid-x align-middle">
            <a href="https://facebook.com/dutiesxyz" target="_blank">
              <h2>
                <span class="dot">●</span>
                <span class="title">Facebook</span>
              </h2>
              <h2 class="togl arrow">Link</h2>
            </a>
          </summary>
        </details>
      </figure>
    </section>
    <footer class="links">
      <section class="grid-container globalFooter">
        <figure class="grid-x grid-margin-x">
          <span class="shrink">
            <a href="mailto:new@duties.xyz?subject=Hi there" target="_blank">
              <p>Email</p>
            </a>
          </span>
        </figure>
      </section>
    </footer>
  </main>
</template>

<script>
export default {
  name: "Links",
  beforeCreate: function() {
    document.body.className = "links";
  }
};
</script>
