<template>
  <section class="outer-margin footer">
    <article class="row fade-in" v-in-viewport.once>
      <figure class="column tagline">
        <p class="title" v-html="footer.tagline"></p>
      </figure>
      <figure class="column contact">
        <div class="heading">
          <a
            href="mailto:new@duties.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 class="title">new<span class="foo">@</span></h1>
            <h1 class="title">
              duties.
            </h1>
            <h1 class="title">
              xyz
            </h1>
          </a>
        </div>
      </figure>
      <figure class="column links">
        <ul>
          <li v-for="link in footer.links" :key="link.id">
            <p class="heading">
              <a class="title" :href="link.linkUrl" target="_blank">
                {{ link.linkTitle }}
              </a>
            </p>
          </li>
        </ul>
      </figure>
    </article>
  </section>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";

export default {
  name: "Footer",
  async created() {
    this.footer = await this.getFooter();
  },
  data() {
    return {
      title: "Footer",
      footer: {
        tagline: "",
        links: {
          linkTitle: "",
          linkURL: ""
        }
      }
    };
  },
  methods: {
    async getFooter() {
      const { data } = await getData({
        query: gql`
          query {
            footer {
              tagline
              links {
                linkTitle
                linkUrl
              }
            }
          }
        `
      });
      return data.footer;
    }
  }
};
</script>
