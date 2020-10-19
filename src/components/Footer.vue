<template>
  <footer>
    <section class="content-block summary">
      <article class="align-center">
        <figure class="block-inner">
          <ul>
            <li>
              <p>
                <router-link class="text-link" :to="{ name: 'Home' }"
                  >Home</router-link
                >
              </p>
            </li>
            <li>
              <p>
                <router-link class="text-link" :to="{ name: 'Projects' }"
                  >Project Index</router-link
                >
              </p>
            </li>
            <li>
              <p>
                <router-link class="text-link" :to="{ name: 'About' }"
                  >Studio</router-link
                >
              </p>
            </li>
            <li>
              <p>
                <router-link class="text-link" :to="{ name: 'Imprint' }"
                  >Imprint</router-link
                >
              </p>
            </li>
          </ul>
        </figure>
        <figure class="block-inner">
          <p class="markdown">
            Want to work with us on your next project?
            <br />We’d love to hear from you.
          </p>
        </figure>
        <figure class="block-inner">
          <div class="contact">
            <p>
              <a class="text-link" href="#" target="_blank">new@duties.xyz</a>
            </p>
            <p>
              <a class="text-link" href="#" target="_blank">+47 986 60 788</a>
            </p>
          </div>
        </figure>
        <figure class="block-inner links">
          <div class="links">
            <p v-for="link in frontpage.contact" :key="link.id">
              <a class="text-link" :href="link.linkUrl" target="_blank">{{
                link.linkTitle
              }}</a>
            </p>
          </div>
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
