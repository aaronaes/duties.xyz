<template>
  <main>
    <section class="grid-container intro">
      <div class="closeBtn">
        <router-link to="/">
          <p>Close</p>
        </router-link>
      </div>
      <figure class="grid-x align-center">
        <div class="cell ">
          <h2>{{ imprint.title }}</h2>
          <h2 class="markdown" v-html="getMarkdown(imprint.content)"></h2>
          <h2 class="markdown" v-html="getMarkdown(imprint.copywrite)"></h2>
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
      imprint: {
        title: "",
        content: "",
        copywrite: ""
      }
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
