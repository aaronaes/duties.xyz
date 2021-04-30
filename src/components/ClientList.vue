<template>
  <section
    class="outer-margin section client-overview fade-in"
    v-in-viewport.reset
  >
    <article class="row">
      <figure class="header">
        <p>
          Our clients & friends
        </p>
      </figure>
      <figure class="body">
        <h3>
          We have been lucky enough to work with a variety of ambitious
          companies and talented people throughout the years.
        </h3>
        <ul>
          <li v-for="(client, i) in allClients" :key="i">
            <p>{{ client.name }}</p>
          </li>
        </ul>
        <p class="link" v-if="$route.name === 'Projects'">
          <router-link to="news">Read our latest news</router-link> &rarr;
        </p>
        <p class="link" v-if="$route.name !== 'Projects'">
          <router-link to="/projects">Out work</router-link> &rarr;
          <br />
          <router-link to="news">Read our latest news</router-link> &rarr;
        </p>
      </figure>
    </article>
  </section>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";
import marked from "marked";

export default {
  name: "ClientList",
  data() {
    return {
      allClients: {
        client: []
      }
    };
  },
  async created() {
    this.allClients = await this.getAllClients();
  },
  methods: {
    async getAllClients() {
      const { data } = await getData({
        query: gql`
          query {
            allClients(orderBy: name_ASC) {
              name
            }
          }
        `
      });
      return data.allClients;
    },
    getUrl(url) {
      return imgix({ url: url });
    },
    getSrcSet(url) {
      return `
        ${imgix({ url: url, w: 640, q: 40 })} 640w,
        ${imgix({ url: url, w: 768, q: 40 })} 768w,
        ${imgix({ url: url, w: 1024, q: 40 })} 1024w,
        ${imgix({ url: url, w: 1366, q: 60 })} 1366w,
        ${imgix({ url: url, w: 1600, q: 60 })} 1600w,
        ${imgix({ url: url, w: 1920, q: 60 })} 1920w
      `;
    },
    getMarkdown(content) {
      return marked(content);
    }
  }
};
</script>
