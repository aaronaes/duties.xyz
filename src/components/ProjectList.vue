<template>
  <section class="projectList">
    <figure class="grid-container" id="projects">
      <div
        v-for="(project, i) in projects"
        :key="i"
        :id="`project-${project.id}`"
        class="details"
        :class="{ isMini: project.readMore !== true }"
      >
        <div class="summary-block grid-container">
          <a
            target="_blank"
            style="display: block"
            :href="project.siteLink"
            @click="e => handleProjectClick(e, project)"
            class="imgBox"
            :class="project.coverSize"
          >
            <img class="cover" :src="getUrl(project.projectThumbnail.url)" />
            <div class="project-title">
              <p v-if="project.readMore === true"><b>Case — </b></p>
              <p v-html="project.subtitle"></p>
            </div>
          </a>
        </div>
      </div>
      <div class="closeBtn" @click.native="$moveTo()">
        <router-link to="/">
          <p>
            Close
          </p>
        </router-link>
      </div>
      <transition name="modal" mode="in-out" :transition="$route.transition">
        <div
          class="grid-x align-center align-middle content-block"
          v-if="isOpen"
        >
          <router-view />
        </div>
      </transition>
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
      isMini: false
    };
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
  },
  methods: {
    moveTo() {
      let to = this.moveToDown ? this.$refs.description.offsetTop - 60 : 0;

      window.scroll({
        top: to,
        left: 0,
        behavior: "smooth"
      });

      this.moveToDown = !this.moveToDown;
    },
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
        const el = document.querySelector("#projects");
        this.scrollTo(el);

        setTimeout(() => {
          this.active = "";
          document.body.classList.remove("active");
        }, 1000);
      } else {
        const el = document.querySelector("#project-" + id);
        this.scrollTo(el);
        this.active = id;

        setTimeout(() => {
          document.body.classList.add("active");
        }, 1000);
      }
    },
    handleProjectClick(e, project) {
      if (project.readMore) {
        e.preventDefault();
        this.toggle(project.id);
        setTimeout(() => {
          this.$router.push("/project/" + project.slug);
        }, 1000);
      }
    },
    scrollTo(el) {
      window.scrollTo({
        top: window.pageYOffset + el.getBoundingClientRect().top,
        behavior: "smooth"
      });
    }
  }
};
</script>
