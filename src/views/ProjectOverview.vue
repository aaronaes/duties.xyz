<template>
  <section class="content-block projectOverview">
    <figure class="align-center hero">
      <h1>
        Duties is a full service micro studio based in Oslo.
      </h1>

      <router-link to="/about">
        <p>More about us</p>
      </router-link>
    </figure>

    <figure class="align-center project-grid">
      <div
        class="box project-item"
        v-in-viewport.once
        v-for="(project, index) in projectOverview.projects"
        :key="project.id"
      >
        <a :href="project.siteLink" v-if="project.readMore === false">
          <!-- <div class="project-img">
          <img
            :src="getUrl(project.projectThumbnail.url)"
            :srcset="getSrcSet(project.projectThumbnail.url)"
          />
        </div> -->
          <div class="project-counter">
            <h1>0{{ index + 1 }}</h1>
          </div>
          <div class="project-content">
            <h3 class="project-title markdown" v-html="project.title"></h3>
            <p class="project-subtitle markdown">
              A full service micro studio
            </p>
            <p>{{ project.category }}</p>
            <!-- <p
                class="project-subtitle markdown"
                v-html="project.subtitle"
              ></p> -->
            <p class="project-link">View project</p>
          </div>
        </a>

        <a
          :href="'/projects/' + project.slug"
          v-if="project.readMore === true"
          @click="e => handleProject(e, project)"
        >
          <div class="project-img">
            <img
              :src="getUrl(project.projectThumbnail.url)"
              :srcset="getSrcSet(project.projectThumbnail.url)"
            />
          </div>
          <div class="project-counter">
            <h1>0{{ index + 1 }}</h1>
          </div>
          <div class="project-content">
            <h3 class="project-title markdown" v-html="project.title"></h3>
            <p class="project-subtitle markdown">
              A full service micro studio
            </p>
            <!-- <p
                class="project-subtitle markdown"
                v-html="project.subtitle"
              ></p> -->
            <p class="project-link">View project</p>
          </div>
        </a>
      </div>
    </figure>
  </section>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";

export default {
  name: "projects",
  async created() {
    this.projectOverview = await this.getProjectOverview();
  },
  data() {
    return {
      isMini: false,

      projectOverview: {
        projects: {
          readMore: "",
          title: "",
          subtitle: "",
          slug: "",
          siteLink: "",
          description: "",
          id: "",
          coverSize: "",
          projectThumbnail: {
            url: ""
          },
          categories: {
            categoryType: ""
          }
        }
      }
    };
  },
  methods: {
    async getProjectOverview() {
      const { data } = await getData({
        query: gql`
          query {
            projectOverview {
              projects {
                readMore
                title
                subtitle
                slug
                siteLink
                description
                id
                coverSize
                projectThumbnail {
                  url
                }
                categories {
                  categoryType
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
    scrollTo(el) {
      window.scrollTo({
        top: window.pageYOffset + el.getBoundingClientRect().top,
        behavior: "smooth"
      });
    },
    myFilter: function() {
      this.isActive = !this.isActive;
    },
    getSrcSet(url) {
      return `
      ${imgix({ url: url, w: 640, q: 60 })} 640w,
      ${imgix({ url: url, w: 768, q: 60 })} 768w,
      ${imgix({ url: url, w: 1024, q: 60 })} 1024w,
      ${imgix({ url: url, w: 1366, q: 60 })} 1366w,
      ${imgix({ url: url, w: 1600, q: 60 })} 1600w,
      ${imgix({ url: url, w: 1920, q: 60 })} 1920w,
      `;
    }
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  },
  beforeCreate: function() {
    document.body.className = "projects";
  }
};
</script>
