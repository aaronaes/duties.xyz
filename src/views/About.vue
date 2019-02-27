<template>
  <main>
    <section class="overlay">
      <div class="row intro">
        <div class="columns">
          <h1 class="small-12 medium-12 large-8">A design consultant for your creative team.</h1>
        </div>
        <div class="columns">
          <div class="small-12 medium-12 large-10 float-left">
            <h2>
              Located in Oslo,
              <b>Erling Aarønæs</b> is a design consultant working closely together with clients & agencies to create relevant digital experiences. I work strategically with my partners to create sophisticated and strong solutions. I run the interdisciplinary studio known as Found. Found builds digital design solutions for all screens.
            </h2>
            <h2>Being committed to quality design with a human-centered approach, I aim to make sure that the right skills are brought to each project.</h2>
          </div>
          <div class="large-4 float-right show-for-large-only">
            <img src="https://www.streamlineicons.com/ux/img/style-8.svg">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="small-12 medium-6 large-6 float-left">
          <div class="columns">
            <h2>
              Sticking to digital
              <span style="color: red;">&nbsp; &#8600;</span>
            </h2>
            <h2>Digital strategy, trending research, user experience, design and build — the end goal is to deliver a complete product.</h2>
            <br>
          </div>
          <div class="columns float-left">
            <h2>
              Working WITH clients
              <span style="color: red;">&nbsp; &#8600;</span>
            </h2>
            <h2>Slow, hidden processes have been proven to take more time. Working with a transparent process, I always make sure the client is up-to-date and happy.</h2>
          </div>
        </div>

        <div class="small-12 medium-offset-1 medium-5 large-offset-1 large-5 float-left">
          <div class="columns">
            <h2>
              Select clients
              <span style="color: red;">&nbsp; &#8600;</span>
            </h2>
            <h2>
              <ul>
                <li>Godt Levert</li>
                <li>OBOS</li>
                <li>Sparebanken Sogn og Fjordane</li>
                <li>Proviant</li>
                <li>Virke</li>
                <li>Eika Gruppen</li>
                <li>Coop</li>
                <li>Amedia Group</li>
                <li>Humid</li>
                <li>Brygg Magasin</li>
                <li>Holzweiler</li>
              </ul>
            </h2>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "About",
  components: {},
  beforeCreate: function() {
    document.body.className = "about";
  }
};
</script>

<style lang="scss">
body.about {
  background-color: #111111;
  color: white;

  a {
    color: white;

    &:hover {
      border-bottom: 2px solid white;
    }
  }

  main {
    padding-bottom: 10vh;
  }
}
</style>
