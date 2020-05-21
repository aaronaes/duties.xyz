<template>
  <main class="linkList">
    <section class="grid-container projectList">
      <figure class="grid-x projects">
        <h3 class="section-title">Links &searr;</h3>
        <div class="details cell">
          <div class="summary grid-x align-middle">
            <a href="https://www.duties.xyz" target="_blank">
              <h2>
                <span>Website</span>
              </h2>
              <h2 class="togl arrow">Link</h2>
            </a>
          </div>
        </div>
        <div class="details cell">
          <div class="summary grid-x align-middle">
            <a href="https://medium.com/@duties.xyz" target="_blank">
              <h2>
                <span>Medium</span>
              </h2>
              <h2 class="togl arrow">Link</h2>
            </a>
          </div>
        </div>
        <div class="details cell">
          <div class="summary grid-x align-middle">
            <a
              href="https://open.spotify.com/playlist/39NC0tBJ0FrrqBD8Tj156m?si=HS5YF10BQfmFFN6VHJtYOQ"
              target="_blank"
            >
              <h2>
                <span>Spotify</span>
              </h2>
              <h2 class="togl arrow">Link</h2>
            </a>
          </div>
        </div>
        <div class="details cell">
          <div class="summary grid-x align-middle">
            <a href="https://www.linkedin.com/company/duties/" target="_blank">
              <h2>
                <span>LinkedIn</span>
              </h2>
              <h2 class="togl arrow">Link</h2>
            </a>
          </div>
        </div>
        <div class="details cell">
          <div class="summary grid-x align-middle">
            <a href="https://dribbble.com/duties/collections" target="_blank">
              <h2>
                <span>Dribbble</span>
              </h2>
              <h2 class="togl arrow">Link</h2>
            </a>
          </div>
        </div>
        <div class="details cell">
          <div class="summary grid-x align-middle">
            <a href="fb://page/1100431026827219">
              <h2>
                <span>Facebook</span>
              </h2>
              <h2 class="togl arrow">Link</h2>
            </a>
          </div>
        </div>
      </figure>
    </section>
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
