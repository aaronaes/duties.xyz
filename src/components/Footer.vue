<template>
  <section class="outer-margin footer">
    <article class="row column">
      <figure class="column tagline fade-in" v-in-viewport.once>
        <p>
          Want to work with us on your next project? <br />
          We’d love to hear from you.
        </p>
      </figure>
      <figure class="column contact fade-in" v-in-viewport.once>
        <div class="heading">
          <a
            href="mailto:new@duties.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 class="title">
              new@
            </h1>
            <h1 class="title">
              duties.
            </h1>
            <h1 class="title">
              xyz
            </h1>
          </a>
        </div>
      </figure>
      <figure class="column links fade-in" v-in-viewport.once>
        <ul>
          <li v-for="link in frontpage.contact" :key="link.id">
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
    this.frontpage = await this.getFrontpage();
  },
  data() {
    return {
      title: "Home",
      frontpage: []
    };
  },
  methods: {
    async getFrontpage() {
      const { data } = await getData({
        query: gql`
          query {
            frontpage {
              summary(markdown: true)
              contact {
                linkTitle
                linkUrl
              }
            }
          }
        `
      });
      return data.frontpage;
    }
  }
};
</script>
