<template>
  <div>
    <header>
      <section class="row">
        <figure class="columns small-12 medium-8 large-6">
          <p v-if="pageName !=='Home'">
            <span style="opacity: 0;">Erling Aaronaes</span> is all about the details. His approach to design is working strategically with teams to create sophisticated and strong solutions.
          </p>
          <p>...</p>
          <p>I’m an Oslo-based senior designer based, with over 10 years experience of creating websites, products and brands. As a designer, I am all about the details. Details in type, details in micro-interactions, details in experience. My approach to design is working strategically with interdisciplinary teams to create sophisticated and strong products. I have worked with startups, established brands, cultural projects and friends, telling their stories in a large variety of formats.</p>
          <p>...</p>
          <p>Links</p>
          <p>
            <a href="#" target="_blank">Credentials &nearr;</a>
          </p>
          <p>
            <a href="#">Business inquiry &nearr;</a>
          </p>
          <p>
            <a href="#" target="_blank">Instagram &nearr;</a>
          </p>
        </figure>
      </section>
    </header>
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