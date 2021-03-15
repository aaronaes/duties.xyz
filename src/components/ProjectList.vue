<template>
  <section class="outer-margin projects">
    <section class="project-feed">
      <article
        class="project"
        v-for="(project, i) in projects"
        :key="i"
        :id="`project-${project.id}`"
      >
        <figure class="column summary">
          <a @click="e => handleProjectClick(e, project)">
            <div class="project-info">
              <h3 class="name">
                <span class="markdown icon" v-html="project.icon"></span>
                {{ project.title }}
              </h3>
              <p class="description">
                {{ project.subtitle }}
              </p>
              <div class="categories">
                <p v-for="(category, i) in project.categories" :key="i">
                  <span class="number" v-html="category.categoryNumber"></span>
                  <span class="caption" v-html="category.categoryType"></span>
                </p>
              </div>
            </div>
            <div class="image" v-if="project.projectThumbnail">
              <img
                :src="getUrl(project.projectThumbnail.url)"
                :srcset="getSrcSet(project.projectThumbnail.url)"
              />
            </div>
          </a>
        </figure>
      </article>

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
          document.body.classList.remove("active");
        }, 600);
      } else {
        const el = document.querySelector("#project-" + id);
        this.scrollTo(el);
        setTimeout(() => {
          this.active = id;
          document.body.classList.add("active");
        }, 0);
      }
    },
    handleProjectClick(e, project) {
      if (project.readMore) {
        e.preventDefault();
        this.toggle(project.id);
        setTimeout(() => {
          this.$router.push("/projects/" + project.slug);
        }, 2000);
      }
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
  computed: {
    isOpen() {
      return this.$route.name === "Project";
    }
  }
};
</script>
