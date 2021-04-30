<template>
  <section class="outer-margin news-list">
    <article class="intro page-title">
      <figure class="column heading">
        <h3>
          Our daily duties include helping our clients and friends with website
          design, apps, UX, brand identities and a bit of XYZ.
        </h3>
      </figure>
      <figure class="column heading">
        <h1 class="big title outlined">
          NEWS
        </h1>
      </figure>
    </article>
    <section class="news-grid">
      <article
        class="story fade-in"
        v-in-viewport.once
        v-for="(story, i) in stories.slice(0, 3)"
        :key="i"
      >
        <figure class="column">
          <div class="date">
            <p>
              {{ story.createdAt }}
            </p>
          </div>
          <div class="body">
            <p class="markdown" v-html="story.description"></p>
            <br />
            <div
              class="categories"
              v-for="item in story.categories"
              :key="item.id"
            >
              <p>{{ item.categoryType }}</p>
            </div>
          </div>
          <div class="storyImage" v-lazy-container="{ selector: 'img' }">
            <img
              :data-src="getUrl(story.storyImage.url)"
              :data-srcset="getSrcSet(story.storyImage.url)"
            />
          </div>
        </figure>
      </article>
    </section>
    <section class="story-link">
      <div class="heading">
        <div>
          <router-link :to="{ name: 'OnDuty' }">
            <h3>View all</h3>
          </router-link>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import imgix from "@/utils/imgix";
import marked from "marked";
export default {
  name: "StoryList",
  props: ["stories"],
  data() {
    return {
      title: "Stories",
      hover: false
    };
  },
  methods: {
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
