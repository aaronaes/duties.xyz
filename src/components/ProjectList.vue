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
      <div class="summary-block">
        <a
          :href="project.siteLink"
          @click="e => handleProjectClick(e, project)"
        >
          <figure
            class="imgBox fade-up"
            :class="project.coverSize"
            v-in-viewport.once
          >
            <div
              class="img"
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
                  <h2
                    class="markdown title"
                    v-show="project.title.length > 0"
                    v-html="project.title"
                  ></h2>
                </blockquote>
                <div class="tags float-left">
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
          </figure>
        </a>
      </div>
    </article>
    <div v-if="isOpen" :key="$route.params.id">
      <router-view :key="'a' + $route.params"></router-view>
    </div>
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
        ${imgix({ url: url, w: 640, q: 60 })} 640w,
        ${imgix({ url: url, w: 768, q: 60 })} 768w,
        ${imgix({ url: url, w: 1024, q: 60 })} 1024w,
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
