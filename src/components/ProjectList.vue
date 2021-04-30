<template>
  <section class="outer-margin section projects">
    <section class="project-feed row">
      <article
        class="project fade-in"
        v-in-viewport.once
        v-for="(project, i) in projects"
        :key="i"
        :id="`project-${project.id}`"
      >
        <div class="column summary">
          <a
            :href="'/projects/' + project.slug"
            @click="e => handleProject(e, project)"
          >
            <div class="project-info">
              <div
                class="media aspect-ratio fade-img"
                v-in-viewport.once
                style="--aspect-ratio: 2/3"
                v-if="project.projectThumbnail"
                v-lazy-container="{ selector: 'img' }"
              >
                <img
                  :data-src="getUrl(project.projectThumbnail.url)"
                  :data-srcset="getSrcSet(project.projectThumbnail.url)"
                />
              </div>
              <p class="label">
                <span class="markdown icon" v-html="project.icon"></span>
                <span class="markdown title" v-html="project.title"></span>
                <span
                  class="markdown subtitle"
                  v-html="project.subtitle"
                ></span>
              </p>
              <p class="description hide">
                {{ project.subtitle }}
              </p>
              <div class="categories hide">
                <p
                  class="number"
                  v-for="(category, i) in project.categories"
                  :key="i"
                >
                  <span v-html="category.categoryNumber"></span>
                  <span class="caption" v-html="category.categoryType"></span>
                </p>
              </div>
            </div>
          </a>
        </div>
      </article>
      <section class="row bottom">
        <figure class="column">
          <router-link :to="{ name: 'Projects' }">
            <p>Jump to Projects &rarr;</p>
          </router-link>
        </figure>
      </section>

      <article class="project-wrap" v-if="isOpen" :key="$route.params.id">
        <router-view :key="'a' + $route.params"></router-view>
      </article>
    </section>
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
      isMini: false,
      isVisible: false
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
        }, 600);
      } else {
        setTimeout(() => {
          this.active = id;
        }, 0);
      }
    },
    handleProjectClick(e, project) {
      e.preventDefault();
      this.toggle(project.id);
      setTimeout(() => {
        this.$router.push("/projects/" + project.slug);
      }, 0);
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
