<template>
  <div>
    <section class="content-block projectOverview">
      <article class="project-grid">
        <figure
          class="project-item"
          v-for="project in projectOverview.projects"
          :key="project.id"
        >
          <ul>
            <li>
              <a
                :href="project.siteLink"
                target="_blank"
                v-if="project.readMore === false"
              >
                <div class="project-content heading">
                  <h1
                    class="float-left title markdown"
                    v-html="project.title"
                  ></h1>
                  <div class="tags">
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

              <a
                :href="'/projects/' + project.slug"
                v-if="project.readMore === true"
                @click="e => handleProject(e, project)"
              >
                <div class="project-content heading">
                  <h1 class="markdown title" v-html="project.title"></h1>
                  <div class="tags">
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
            </li>
          </ul>
        </figure>
      </article>
    </section>
  </div>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";

export default {
  name: "Overview",
  components: {},
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
    document.body.className = "overview";
  }
};
</script>
