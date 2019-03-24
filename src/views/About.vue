<template>
  <header style="height: 100vh;">
    <section class="row">
      <figure class="columns">
        <div style="z-index: -1;">
          <p>
            Erling Aarønæs
            <i style="opacity: .5; padding-left: 5px;">&nbsp;Design Lead</i>
          </p>
          <br>
          <div>
            <p>I’m an Oslo-based senior designer, with over 10 years experience of creating websites, products and brands. My approach to design is working strategically with interdisciplinary teams to create sophisticated and strong products.</p>
            <p>I was born 50/50 Norwegian American, I always rely on Figma and design systems and I'm a nice guy.</p>
          </div>
        </div>
        <div class="dingo" style="position: absolute; bottom: 2.5rem;">
          <p>
            <a href="#">
              Fetch
              <span>
                <img src="/images/work/fetch/fetch-01.png">
              </span>
            </a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#gl">
              Godt Levert
              <span>
                <img src="/images/work/gl/gl-04.png">
              </span>
            </a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#eika">Eika Gruppen</a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#">Sparebanken Sogn og Fjordane</a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#">Humid Magazine</a>
          </p>
        </div>
      </figure>
    </section>
  </header>
</template>

<script>
export default {
  name: "About",
  beforeCreate: function() {
    document.body.className = "about";
  }
};
</script>