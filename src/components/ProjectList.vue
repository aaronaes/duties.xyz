<template>
  <section class="outer-margin projects">
    <img
      class="default hide"
      :class="{ isVisible: isVisible, showMe: viewMore }"
      src="https://images.prismic.io/instrument-v5/90185ceb-7a82-44b4-81af-11b622f9f86e_process-one-flipped.jpg?auto=compress,format&w=1920"
    />
    <img
      class="default viewMore"
      :class="{ showMe: viewMore }"
      src="https://cdn.dribbble.com/users/1710340/screenshots/3874818/bnsyy____.gif"
    />
    <section class="project-list">
      <!-- New shit -->
      <article class="row">
        <figure class="column">
          <h3>
            We have designed websites, apps, UX, identities for
          </h3>
          <a
            @click="e => handleProjectClick(e, project)"
            class="clicky"
            v-for="(project, i) in projects"
            :key="i"
            :id="`project-${project.id}`"
            @mouseover="isVisible = true"
            @mouseout="isVisible = false"
          >
            <div class="item">
              <h3>
                <span
                  class="markdown icon"
                  v-show="project.icon.length > 0"
                  v-html="project.icon"
                ></span>
                <span
                  class="markdown name"
                  v-show="project.title.length > 0"
                  v-html="project.title"
                ></span>
              </h3>
              <img
                class="sticker one"
                :src="getUrl(project.projectThumbnail.url)"
                :srcset="getSrcSet(project.projectThumbnail.url)"
              />
            </div>
          </a>
          <h3>
            and
            <router-link to="Projects">
              <span @mouseover="viewMore = true" @mouseout="viewMore = false">
                more
              </span> </router-link
            >.
          </h3>
        </figure>
      </article>
      <article
        class="project fade-in hide"
        v-in-viewport.once
        v-for="(project, i) in projects"
        :key="i"
        :id="`project-${project.id}`"
        :class="{
          isMini: project.readMore === false
        }"
      >
        <figure class="column summary">
          <a class="imgBox" @click="e => handleProjectClick(e, project)">
            <div class="image" v-if="project.projectThumbnail">
              <img
                :src="getUrl(project.projectThumbnail.url)"
                :srcset="getSrcSet(project.projectThumbnail.url)"
              />
            </div>
            <div class="caption">
              <div class="heading">
                <h2
                  class="markdown title"
                  v-show="project.title.length > 0"
                  v-html="project.title"
                ></h2>
                <h2>
                  :
                </h2>
                <h3
                  class="markdown"
                  v-show="project.subtitle.length > 0"
                  v-html="project.subtitle"
                ></h3>
              </div>
              <div class="body hide-for-small-only hide">
                <p
                  v-if="project.readMore === true"
                  class="markdown"
                  v-show="project.subtitle.length > 0"
                  v-html="project.subtitle"
                ></p>
                <p
                  v-if="project.readMore === false"
                  class="markdown"
                  v-show="project.subtitle.length > 0"
                  v-html="project.subtitle"
                ></p>
              </div>
              <div
                class="tags hide-for-small-only hide"
                v-if="project.readMore === true"
              >
                <p
                  class="body-text markdown"
                  v-for="(category, i) in project.categories"
                  :key="i"
                >
                  {{ category.categoryType }}
                </p>
              </div>
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
      isVisible: false,
      viewMore: false
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
        }, 300);
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
