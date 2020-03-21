<template>
  <section class="row listgroup">
    <figure class="columns">
      <ul class="float-left large-6">
        <li :class="{ active: selected == 1 }">
          <a @mouseover="selected = 1">
            <h2>Godt Levert</h2>
          </a>
          <div class="large-6 medium-6 small-12 content">
            <img
              src="https://cdn.dribbble.com/users/602780/screenshots/3733828/article-dribbble-twg.gif"
            />
            <p>
              Godt Levert didn't have as much of a presence in the market as
              they wanted.
              <br style="clear:both" />
              <a href="#" target="_blank">godtlevert.no</a>
            </p>
          </div>
        </li>
        <li :class="{ active: selected == 2 }">
          <a @mouseover="selected = 2">
            <h2>Eika Gruppen</h2>
          </a>
          <div class="large-6 medium-6 small-12 content">
            <img src="/images/work/eika/eika-03.png" alt="" />
            <p>
              Godt Levert didn't have as much of a presence in the market as
              they wanted.
            </p>
            <p>
              <a href="#" target="_blank">godtlevert.no</a>
            </p>
          </div>
        </li>
        <li :class="{ active: selected == 3 }">
          <a @mouseover="selected = 3">
            <h2>Godt Levert</h2>
          </a>
          <div class="large-6 medium-6 small-12 content">
            <img
              src="https://cdn.dribbble.com/users/214929/screenshots/6795955/shopping-cart.gif"
              alt=""
            />
            <p>
              Godt Levert didn't have as much of a presence in the market as
              they wanted.
            </p>
            <p>
              <a href="#" target="_blank">godtlevert.no</a>
            </p>
          </div>
        </li>
        <li :class="{ active: selected == 4 }">
          <a @mouseover="selected = 4">
            <h2>Well Dressed Vandals</h2>
          </a>
          <div class="large-6 medium-6 small-12 content">
            <img src="/images/banner/banner-4.png" alt="" />
            <p>
              Godt Levert didn't have as much of a presence in the market as
              they wanted.
            </p>
            <p>
              <a href="#" target="_blank">godtlevert.no</a>
            </p>
          </div>
        </li>
      </ul>
    </figure>
  </section>
</template>

<script>
export default {
  name: "ListGroup",
  data() {
    return {
      selected: true
    };
  },
  methods: {
    toggleClass: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>
