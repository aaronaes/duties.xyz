<template>
  <main class="linkList">
    <section class="grid-container projectList">
      <figure class="grid-x projects">
        <h3 class="section-title">Links &searr;</h3>
        <details class="cell">
          <summary class="grid-x align-middle">
            <h2>
              <span class="title">Link name</span>
            </h2>

            <h2 class="togl arrow">
              <a href="//www.google.com" target="_blank">Link</a>
            </h2>
          </summary>
        </details>
        <details class="cell">
          <summary class="grid-x align-middle">
            <h2>
              <span class="title">Link name</span>
            </h2>

            <h2 class="togl arrow">
              <a href="//www.google.com" target="_blank">Link</a>
            </h2>
          </summary>
        </details>
        <details class="cell">
          <summary class="grid-x align-middle">
            <h2>
              <span class="title">Link name</span>
            </h2>

            <h2 class="togl arrow">
              <a href="//www.google.com" target="_blank">Link</a>
            </h2>
          </summary>
        </details>
        <details class="cell">
          <summary class="grid-x align-middle">
            <h2>
              <span class="title">Link name</span>
            </h2>

            <h2 class="togl arrow">
              <a href="//www.google.com" target="_blank">Link</a>
            </h2>
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
