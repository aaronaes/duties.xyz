<template>
  <div id="content">
    <section class="outer-margin section header-pad">
      <article class="row">
        <figure class="column">
          <h3>
            When we are off-duty you can find us dabbling in experimental
            typefaces, curating our studio playlist and working on physical
            products for our in-house line of merch. Keep an eye on our
            Instagram to receive early access to design resources, product
            releases and other goodies.
          </h3>
        </figure>
        <figure class="column heading hide">
          <h1 class="title">
            {{ this.$route.name }}
          </h1>
        </figure>
      </article>
    </section>
    <section class="outer-margin section xyz">
      <section class="grid row">
        <article class="item" v-for="(block, i) in offDuty.xyzPosts" :key="i">
          <figure class="column">
            <div
              class="media fade-img"
              v-in-viewport.once
              v-if="block.xyzImage && block.xyzImage.url.length"
            >
              <img
                :src="getUrl(block.xyzImage.url)"
                :srcset="getSrcSet(block.xyzImage.url)"
              />
            </div>
            <div class="body">
              <p class="markdown" v-html="block.description"></p>
            </div>
          </figure>
        </article>
      </section>
    </section>
  </div>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";
import marked from "marked";

export default {
  name: "XYZ",
  async created() {
    this.offDuty = await this.getOffDuty();
  },
  data() {
    return {
      title: "XYZ",
      offDuty: {
        xyzPosts: []
      }
    };
  },
  methods: {
    getDate(CreatedAt) {
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric"
      };

      return new Date(CreatedAt).toLocaleDateString("us-EN", options);
    },
    async getOffDuty() {
      const { data } = await getData({
        query: gql`
          query {
            offDuty {
              xyzPosts {
                xyzImage {
                  url
                }
                description
                createdAt
              }
            }
          }
        `
      });
      return data.offDuty;
    },
    getMarkdown(content) {
      return marked(content);
    },
    getUrl(url) {
      return imgix({ url: url });
    },
    getSrcSet(url) {
      return `
      ${imgix({ url: url, w: 640, q: 30 })} 640w,
        ${imgix({ url: url, w: 768, q: 40 })} 768w,
        ${imgix({ url: url, w: 1024, q: 50 })} 1024w,
        ${imgix({ url: url, w: 1366, q: 60 })} 1366w,
        ${imgix({ url: url, w: 1600, q: 60 })} 1600w,
        ${imgix({ url: url, w: 1920, q: 70 })} 1920w
      `;
    }
  },
  beforeCreate: function() {
    document.body.className = "page-xyz";
  }
};
</script>
