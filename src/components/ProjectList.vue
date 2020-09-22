<template>
  <section class="projectList">
    <figure id="projects">
      <div
        v-for="(project, i) in projects"
        :key="i"
        :id="`project-${project.id}`"
        class="details grid-container"
      >
        <div class="summary-block">
          <a
            :href="project.siteLink"
            @click="e => handleProjectClick(e, project)"
          >
            <div class="cell imgBox" :class="project.coverSize">
              <img
                :src="getUrl(project.projectThumbnail.url)"
                :srcset="getSrcSet(project.projectThumbnail.url)"
              />
              <div class="title">
                <p v-if="project.readMore === true"><b>Case — </b></p>
                <p v-html="project.title"></p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div v-if="isOpen" :key="$route.params.id">
        <router-view :key="'a' + $route.params"></router-view>
      </div>
    </figure>
  </section>
</template>

<script>
import imgix from "@/utils/imgix";

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
          this.$router.replace("/projects/" + project.slug);
        }, 1000);
      }
    },
    scrollTo(el) {
      window.scrollTo({
        top: window.pageYOffset + el.getBoundingClientRect().top,
        behavior: "smooth"
      });
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
