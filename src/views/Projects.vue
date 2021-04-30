<template>
  <div id="content">
    <section
      class="outer-margin section header-pad"
      v-if="$route.name === 'Projects'"
    >
      <article class="row">
        <figure class="column">
          <h3>
            We have been lucky enough to work with a variety of ambitious
            companies and talented people throughout the years.
          </h3>
        </figure>
        <figure class="column heading hide">
          <h1 class="title">On-Duty</h1>
        </figure>
      </article>
    </section>
    <section
      class="outer-margin project-grid"
      v-if="$route.name !== 'Projects'"
    >
      <article
        v-for="project in projectOverview.projects.slice(3, 9999999)"
        :key="project.id"
        class="main project"
        value="project.category.categoryType"
      >
        <a
          :href="'/projects/' + project.slug"
          @click="e => handleProject(e, project)"
        >
          <figure class="column">
            <div class="project-content">
              <p class="name">
                <span class="markdown icon" v-html="project.icon"></span>
                {{ project.subtitle }}
              </p>

              <div class="image follow">
                <img
                  :src="getUrl(project.projectThumbnail.url)"
                  :srcset="getSrcSet(project.projectThumbnail.url)"
                />
              </div>
              <div class="categories show-for-medium">
                <p
                  class="number"
                  v-for="(category, i) in project.categories"
                  :key="i"
                >
                  <span class="markdown" v-html="category.categoryNumber">
                  </span>
                  <span class="show-for-medium">{{
                    category.categoryType
                  }}</span>
                </p>
              </div>
            </div>
          </figure>
        </a>
      </article>
    </section>
    <section class="outer-margin section project-grid">
      <article
        v-for="(project, index) in projectOverview.projects"
        :key="project.id"
        class="main row project fade-in"
        :style="`--item-order:${index + 1}`"
        v-in-viewport.once
      >
        <a
          :href="'/projects/' + project.slug"
          @click="e => handleProject(e, project)"
        >
          <figure class="column">
            <div class="project-content">
              <div class="info">
                <h3 class="project-icon">
                  <span class="markdown icon" v-html="project.icon"></span>
                </h3>
                <h3 class="project-title" v-html="project.title"></h3>
                <h3
                  class="project-subtitle markdown"
                  v-html="project.subtitle"
                ></h3>
              </div>

              <div class="image" v-lazy-container="{ selector: 'img' }">
                <img
                  :data-src="getUrl(project.projectThumbnail.url)"
                  :data-srcset="getSrcSet(project.projectThumbnail.url)"
                />
              </div>
              <div class="categories hide show-for-medium">
                <h3
                  class="number"
                  v-for="(category, i) in project.categories"
                  :key="i"
                >
                  <span class="markdown" v-html="category.categoryNumber">
                  </span>
                  <span class="show-for-medium">{{
                    category.categoryType
                  }}</span>
                </h3>
              </div>
            </div>
          </figure>
        </a>
      </article>
    </section>
    <ClientList />
  </div>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";
import ClientList from "@/components/ClientList.vue";

export default {
  name: "Index",
  components: {
    ClientList
  },
  data() {
    return {
      title: "Index",
      isMini: false,
      isHovering: false,
      projectOverview: {
        projects: []
      },
      selectedCategory: "All"
    };
  },
  async created() {
    this.projectOverview = await this.getProjectOverview();
  },
  methods: {
    addDarkmode() {
      document.body.classList.add("darkmode");
    },
    removeDarkmode() {
      document.body.classList.remove("darkmode");
    },
    async getProjectOverview() {
      const { data } = await getData({
        query: gql`
          query {
            projectOverview {
              projects {
                readMore
                icon
                title
                subtitle
                slug
                siteLink
                description
                year
                id
                projectThumbnail {
                  url
                }
                categories {
                  categoryType
                  categoryNumber
                }
              }
            }
          }
        `
      });
      return data.projectOverview;
    },
    getUrl(url) {
      return imgix({ url: url });
    },
    handleProject(e, project) {
      if (project.readMore) {
        this.toggle(project.id);
        this.$router.push("/projects/" + project.slug);
      }
    },
    myFilter: function() {
      this.isActive = !this.isActive;
    },
    getSrcSet(url) {
      return `
      ${imgix({ url: url, w: 640, q: 30 })} 640w,
      ${imgix({ url: url, w: 768, q: 30 })} 768w,
      ${imgix({ url: url, w: 1024, q: 40 })} 1024w,
      ${imgix({ url: url, w: 1366, q: 50 })} 1366w,
      ${imgix({ url: url, w: 1600, q: 60 })} 1600w,
      ${imgix({ url: url, w: 1920, q: 70 })} 1920w,
      `;
    }
  },

  mounted: function() {
    $(document).mousemove(function(e) {
      $(".follow").offset({
        left: e.pageX,
        top: e.pageY
      });
    });
  },
  destroyed() {
    document.body.classList.remove("darkmode");
  }
};
</script>
