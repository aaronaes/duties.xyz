<template>
  <section class="outer-margin stories">
    <section class="outer-margin story-title">
      <div class="heading">
        <div>
          <h1 class="title">News & stuff</h1>
        </div>
      </div>
      <div class="heading hide">
        <div class="ticker">
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
          <h2 class="title">News & stuff &</h2>
        </div>
      </div>
    </section>
    <section class="outer-margin story-list">
      <article
        class="story fade-in"
        v-in-viewport.once
        v-for="(story, i) in stories"
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
          </div>
        </figure>
      </article>
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
  },
  computed: {
    isOpen() {
      return this.$route.name === "Project";
    }
  }
};
</script>
