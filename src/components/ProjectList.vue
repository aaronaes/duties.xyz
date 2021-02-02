<template>
  <section class="outer-margin project-list">
    <article
      class="row fade-in"
      v-in-viewport.once
      v-for="(block, i) in projects"
      :key="i"
      :id="`project-${block.id}`"
      :class="{
        isMini: block.readMore === false,
        project: block._modelApiKey === 'project',
        story: block._modelApiKey === 'story'
      }"
    >
      <figure class="column summary" v-if="block._modelApiKey === 'project'">
        <a class="imgBox" @click="e => handleProjectClick(e, project)">
          <div
            class="image"
            :class="{
              device: block.isDevice,
              website: block.isWebsite
            }"
          >
            <img
              :src="getUrl(block.projectThumbnail.url)"
              :srcset="getSrcSet(block.projectThumbnail.url)"
            />
          </div>
          <div class="caption">
            <div class="heading">
              <h2
                v-if="block.readMore === true"
                class="title"
                v-show="block.title.length > 0"
                v-html="block.title"
              >
                :
              </h2>
            </div>
            <div class="body">
              <div
                v-if="block.readMore === true"
                class="markdown"
                v-show="block.subtitle.length > 0"
                v-html="block.subtitle"
              ></div>
              <div
                v-if="block.readMore === false"
                class="markdown"
                v-show="block.subtitle.length > 0"
                v-html="block.subtitle"
              ></div>
            </div>
            <div class="tags" v-if="block.readMore === true">
              <p
                class="body-text markdown"
                v-for="(category, i) in block.categories"
                :key="i"
              >
                {{ category.categoryType }}
              </p>
            </div>
          </div>
        </a>
      </figure>

      <figure class="column summary test" v-if="block._modelApiKey === 'story'">
        <div class="heading">
          <p>&rarr; Thoughts</p>
        </div>
        <div class="storyImage" v-if="hasContent">
          <img
            :src="getUrl(block.storyImage.url)"
            :srcset="getSrcSet(block.storyImage.url)"
          />
        </div>
        <div class="heading">
          <h2 class="title" v-html="block.title"></h2>
        </div>
        <div class="body">
          <p class="markdown" v-html="block.description"></p>
        </div>
      </figure>
    </article>

    <article class="project-wrap" v-if="isOpen" :key="$route.params.id">
      <router-view :key="'a' + $route.params"></router-view>
    </article>
  </section>
</template>

<script>
import imgix from "@/utils/imgix";
import marked from "marked";

export default {
  name: "ProjectList",
  props: ["projects"],
  data() {
    return {
      title: "Projects",
      hasContent: false,
      active: "",
      isMini: false,
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
    toggle(id) {
      if (id === this.active) {
        setTimeout(() => {
          this.active = "";
          document.body.classList.remove("active");
        }, 500);
      } else {
        const el = document.querySelector("#project-" + id);
        this.scrollTo(el);

        setTimeout(() => {
          this.active = id;
          document.body.classList.add("active");
        }, 250);
      }
    },
    handleProjectClick(e, project) {
      if (project.readMore === true) {
        e.preventDefault();
        this.toggle(project.id);
        setTimeout(() => {
          this.$router.push("/projects/" + project.slug);
        }, 1000);
      }
      document.body.classList.add("active");
    },
    scrollTo(el) {
      window.scrollTo({
        top: window.pageYOffset + el.getBoundingClientRect().top,
        behavior: "smooth"
      });
    },
    getMarkdown(content) {
      return marked(content);
    }
  },
  watch: {
    isOpen: {
      handler: val => {
        if (val) document.body.classList.add("active");
        else document.body.classList.remove("active");
      },
      immediate: true
    }
  },
  computed: {
    isOpen() {
      return this.$route.name === "Project";
    }
  }
};
</script>
