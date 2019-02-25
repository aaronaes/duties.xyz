<template>
  <main>
    <section class="overlay">
      <div class="row intro">
        <div class="columns">
          <h1 class="small-12 medium-6 large-4">A design partner for your team.</h1>
        </div>
        <div class="columns">
          <div class="small-12 medium-10 large-6 float-left">
            <p>
              Located in Oslo,
              <span style="color: red;">@aaronaes</span> is a design consultant working closely together with clients & agencies to create relevant digital experiences. I work strategically with my partners to create sophisticated and strong solutions. I run the interdisciplinary studio known as Found. Found builds digital design solutions for all screens.
            </p>
            <p>Being committed to quality design with a human-centered approach, I aim to make sure that the right skills are brought to each project.</p>
          </div>
          <div class="large-4 float-right show-for-large-only">
            <img src="https://www.streamlineicons.com/ux/img/style-8.svg">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="small-12 medium-6 large-6 float-left">
          <div class="columns">
            <p>
              Sticking to digital
              <span>&nbsp; &#8600;</span>
            </p>
            <p>Digital strategy, trending research, user experience, design and build — the end goal is to deliver a complete product.</p>
            <br>
          </div>
          <div class="columns float-left">
            <p>
              Hands-on testing
              <span>&nbsp; &#8600;</span>
            </p>
            <p>Creating prototypes, testing user patterns while including the client in the process. Making keynotes to show digital isn’t the way shit gets done.</p>
            <br>
          </div>
          <div class="columns float-left">
            <p>
              Working WITH clients
              <span>&nbsp; &#8600;</span>
            </p>
            <p>Slow, hidden processes have been proven to take more time. Working with a transparent process, I always make sure the client is up-to-date and happy.</p>
          </div>
        </div>

        <div class="small-12 medium-offset-1 medium-5 large-offset-1 large-5 float-left">
          <div class="columns">
            <p>
              Select clients
              <span>&nbsp; &#8600;</span>
            </p>
            <ul>
              <li>
                <p>Godt Levert</p>
              </li>
              <li>
                <p>OBOS</p>
              </li>
              <li>
                <p>Sparebanken Sogn og Fjordane</p>
              </li>
              <li>
                <p>Proviant</p>
              </li>
              <li>
                <p>Virke</p>
              </li>
              <li>
                <p>Eika Gruppen</p>
              </li>
              <li>
                <p>Coop</p>
              </li>
              <li>
                <p>Amedia Group</p>
              </li>
              <li>
                <p>Humid</p>
              </li>
              <li>
                <p>Brygg Magasin</p>
              </li>
              <li>
                <p>Holzweiler</p>
              </li>
            </ul>
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
