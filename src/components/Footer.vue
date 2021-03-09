<template>
  <section class="outer-margin footer">
    <article class="row fade-in" v-in-viewport.once>
      <article class="block">
        <figure class="column tagline">
          <!-- <h3 class="title" v-html="footer.tagline"></h3> -->
          <h3 class="title">
            We’re always open to new ideas and opportunities. If you’re a
            startup, established business or just doing something cool to make
            this world a better place, then we want to hear from you. 👋
          </h3>
        </figure>
        <figure class="column contact">
          <div class="heading">
            <a
              href="mailto:new@duties.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 class="title big">
                <span>new@</span><span>duties</span><span>.xyz</span>
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
