<template>
  <section class="projectList">
    <article
      v-for="(project, i) in projects"
      :key="i"
      :id="`project-${project.id}`"
      class="project-block"
      :class="{
        isMini: project.readMore === false
      }"
    >
      <figure class="summary-block">
        <a @click="e => handleProjectClick(e, project)">
          <div
            class="imgBox fade-in"
            :class="project.coverSize"
            v-in-viewport.once
          >
            <div
              class="img-container"
              :class="{
                device: project.isDevice,
                website: project.isWebsite
              }"
            >
              <img
                :src="getUrl(project.projectThumbnail.url)"
                :srcset="getSrcSet(project.projectThumbnail.url)"
              />
            </div>
            <figcaption>
              <div class="body-text markdown">
                <blockquote class="heading">
                  <p
                    v-if="project.readMore === true"
                    class="title"
                    v-show="project.title.length > 0"
                    v-html="project.title"
                  >
                    :
                  </p>
                  <h2
                    v-if="project.readMore === true"
                    class="markdown title"
                    v-show="project.subtitle.length > 0"
                    v-html="project.subtitle"
                  ></h2>

                  <p
                    v-if="project.readMore === false"
                    class="markdown"
                    v-show="project.subtitle.length > 0"
                    v-html="project.subtitle"
                  ></p>
                </blockquote>
                <div class="tags hide">
                  <p
                    class="body-text markdown"
                    v-for="(category, i) in project.categories"
                    :key="i"
                  >
                    {{ category.categoryType }}
                  </p>
                </div>
              </div>
            </figcaption>
          </div>
        </a>
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
        }, 500);
      }
    },
    handleProjectClick(e, project) {
      if (project.readMore) {
        e.preventDefault();
        this.toggle(project.id);
        setTimeout(() => {
          this.$router.push("/projects/" + project.slug);
        }, 1000);
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
