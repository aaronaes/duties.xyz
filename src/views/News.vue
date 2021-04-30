<template>
  <div id="content">
    <section class="outer-margin section header-pad">
      <article class="row">
        <figure class="column">
          <h3>
            Our daily duties include helping our clients and friends with
            website design, apps, UX, brand identities and a bit of XYZ.
          </h3>
        </figure>
        <figure class="column heading hide">
          <h1 class="title">
            {{ this.$route.name }}
          </h1>
        </figure>
      </article>
    </section>
    <section class="outer-margin section news">
      <section class="row news-feed">
        <article
          class="post fade-in"
          v-for="(story, index) in onDuty"
          :key="index"
          v-in-viewport.once
        >
          <figure class="column">
            <div class="media" v-lazy-container="{ selector: 'img' }">
              <img
                :data-src="getUrl(story.storyImage.url)"
                :data-srcset="getSrcSet(story.storyImage.url)"
              />
            </div>
            <div class="date hide hide-for-small-only">
              <p>
                {{ getDate(story.createdAt) }}
              </p>
            </div>
            <div class="body">
              <p>
                <time>{{ getDate(story.createdAt) }}</time>
              </p>
              <p class="markdown" v-html="story.description"></p>
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
  name: "News",
  async created() {
    this.onDuty = await this.getOnDuty();
  },
  data() {
    return {
      title: "News",
      onDuty: {
        singleDuty: []
      }
    };
  },
  methods: {
    getDate(CreatedAt) {
      const options = {
        month: "long",
        year: "numeric"
      };

      return new Date(CreatedAt).toLocaleDateString("us-EN", options);
    },
    async getOnDuty() {
      const { data } = await getData({
        query: gql`
          query {
            allStories(orderBy: _createdAt_DESC) {
              createdAt
              title
              storyImage {
                url
              }
              description
            }
          }
        `
      });
      return data.allStories;
    },
    getMarkdown(content) {
      return marked(content);
    },
    getUrl(url) {
      return imgix({
        url: url
      });
    },
    getSrcSet(url) {
      return `
      ${imgix({ url: url, w: 640, q: 40 })} 640w,
        ${imgix({ url: url, w: 768, q: 50 })} 768w,
        ${imgix({ url: url, w: 1024, q: 60 })} 1024w,
        ${imgix({ url: url, w: 1366, q: 70 })} 1366w,
        ${imgix({ url: url, w: 1600, q: 70 })} 1600w,
        ${imgix({ url: url, w: 1920, q: 70 })} 1920w
      `;
    }
  },
  computed: {
    pageName() {
      return this.$route.name;
    },
    formatted() {
      return this.filter("date")(this.value);
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>
