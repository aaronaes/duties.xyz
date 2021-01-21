<template>
  <footer>
    <section class="footer-block">
      <article class="align-center">
        <figure class="block-inner">
          <h3 class="tagline">
            Want to work with us on your next project? We’d love to hear from
            you.
          </h3>
        </figure>
        <figure class="block-inner">
          <div class="contact">
            <a href="#" target="_blank">
              <h1>
                new@duties.xyz
              </h1>
            </a>
          </div>
        </figure>
        <figure class="block-inner">
          <ul class="links">
            <li v-for="link in frontpage.contact" :key="link.id">
              <a class="title" :href="link.linkUrl" target="_blank">
                <p class="heading">
                  {{ link.linkTitle }}
                </p>
              </a>
            </li>
          </ul>
        </figure>
      </article>
    </section>
  </footer>
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
