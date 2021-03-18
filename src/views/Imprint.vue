<template>
  <main>
    <section class="grid-container intro">
      <div class="closeBtn">
        <router-link to="/">
          <p>Close</p>
        </router-link>
      </div>
      <figure class="grid-x grid-padding-x align-center">
        <div class="cell small-12 medium-10 large-8">
          <h1>{{ imprint.title }}</h1>
          <h3 class="markdown" v-html="getMarkdown(imprint.content)"></h3>
          <h3 class="markdown" v-html="getMarkdown(imprint.copywrite)"></h3>
        </div>
      </figure>
    </section>
  </main>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import marked from "marked";

export default {
  name: "Imprint",
  async created() {
    this.imprint = await this.getImprint();
  },
  data() {
    return {
      imprint: []
    };
  },
  methods: {
    async getImprint() {
      const { data } = await getData({
        query: gql`
          query {
            imprint {
              title
              content
              copywrite
            }
          }
        `
      });
      return data.imprint;
    },
    getMarkdown(content) {
      return marked(content);
    }
  },
  beforeCreate: function() {
    document.body.className = "imprint";
  }
};
</script>
