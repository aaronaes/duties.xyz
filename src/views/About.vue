<template>
  <div>
    <section class="heeeero slider">
      <figure>
        <div class="columns large-3 medium-5 small-10 float-left">
          <router-link to="/wdv">
            <img src="/images/carousel/big-01.jpg" />
            <p>Vandals</p>
          </router-link>
        </div>
        <div class="columns large-3 medium-5 small-10 float-left">
          <img src="/images/carousel/big-02.jpg" />
          <p>Authentic Scandinavia</p>
        </div>
        <div class="columns large-3 medium-5 small-10 float-left">
          <img src="/images/carousel/big-03.jpg" />
          <p>Humid Mag</p>
        </div>
        <div class="columns large-3 medium-5 small-10 float-left">
          <img src="/images/carousel/big-04.jpg" />
          <p>Humid Mag</p>
        </div>
        <div class="columns large-3 medium-5 small-10 float-left">
          <img src="/images/carousel/big-03.jpg" />
          <p>Humid Mag</p>
        </div>
        <div class="columns large-3 medium-5 small-10 float-left">
          <img src="/images/carousel/big-04.jpg" />
          <p>Humid Mag</p>
        </div>
      </figure>
    </section>
    <section class="row">
      <figure class="columns float-left">
        <h2>
          Aa—studio is the house of Erling Aarønæs, an independant
          product-designer living and working in Oslo, Norway.
        </h2>
        <div class="copy">
          <p>
            I’m an Oslo-based senior designer, with over 10 years experience of
            creating websites, products and brands. My approach to design is
            working strategically with interdisciplinary teams to create
            sophisticated and strong products. I was born 50/50 Norwegian
            American, I always rely on Figma and design systems and I'm a nice
            guy. My approach to a project is working strategically with
            interdisciplinary teams to create sophisticated and strong products.
          </p>
        </div>
      </figure>
      <figure class="columns">
        <img
          class="columns large-4"
          src="https://avatars3.githubusercontent.com/u/46806954"
          alt="My happy face"
        />
        <img
          class="columns large-4"
          src="https://avatars3.githubusercontent.com/u/46806954"
          alt="My happy face"
        />
        <img
          class="columns large-4"
          src="https://avatars3.githubusercontent.com/u/46806954"
          alt="My happy face"
        />
      </figure>
      <figure class="columns">
        <div>
          <h3>
            <a href="#">Fetch</a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#gl">Godt Levert</a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#eika">Eika Gruppen</a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#">Sparebanken Sogn og Fjordane</a>
            <span>&nbsp;/&nbsp;</span>
            <a href="#">Humid Magazine</a>
          </h3>
        </div>
      </figure>
      <figure class="columns">
        <a href="//www.linkedin.com/in/aaronaes" target="_blank">
          <p>Credentials &nearr;</p>
        </a>
        <a href="https://www.instagram.com/aaronaes.studio/" target="_blank">
          <p>Social media &nearr;</p>
        </a>
        <a href="mailto:hello@aaronaes.studio?subject=Hi">
          <p>Contact &nearr;</p>
        </a>
      </figure>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
  beforeCreate: function() {
    document.body.className = "about";
  }
};
</script>
