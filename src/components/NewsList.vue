<template>
  <section class="outer-margin news-list">
    <section class="news-title">
      <div class="heading">
        <div>
          <h1 class="title big outlined">On-Duty</h1>
        </div>
      </div>
      <div class="body">
        <div>
          <h3>
            We believe it’s our duty as designers to provide the world with
            thoughtfully designed products that are functional, accessible and
            visually appealing. Sometimes we write the occasional article on
            <i>Medium</i> too.
          </h3>
        </div>
      </div>
    </section>
    <section class="news-grid">
      <article
        class="story fade-in"
        v-in-viewport.once
        v-for="(story, i) in stories.slice(0, 3)"
        :key="i"
      >
        <figure class="column">
          <div class="storyImage">
            <img
              :src="getUrl(story.storyImage.url)"
              :srcset="getSrcSet(story.storyImage.url)"
            />
          </div>
          <div class="body">
            <p class="markdown" v-html="story.description"></p>
            <div
              class="categories"
              v-for="item in story.categories"
              :key="item.id"
            >
              <p>{{ item.categoryType }}</p>
            </div>
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
