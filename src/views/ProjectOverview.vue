<template
  ><transition name="global" mode="out-in">
    <section class="projectOverview content-block">
      <figure class="grid-container">
        <div class="grid-x grid-margin-x grid-padding-x align-middle">
          <button class="cell shrink" v-on:click="showListView = !showListView">
            <p>Switch layout</p>
          </button>
        </div>
        <div
          class="grid-x grid-margin-x grid-padding-x align-middle"
          v-bind:class="{ listView: showListView }"
        >
          <div
            v-for="(project, i) in projectOverview.projects"
            :key="i"
            class="cell small-12 medium-6 large-4 project-card"
          >
            <a
              :href="project.slug"
              @click="e => handleProjectClick(e, project)"
            >
              <div class="img-container">
                <img
                  :src="getUrl(project.projectThumbnail.url)"
                  :srcset="getSrcSet(project.projectThumbnail.url)"
                />
              </div>
              <p class="image-title" v-html="project.subtitle"></p>
              <p class="image-title" v-html="project.title"></p>
            </a>
          </div>
        </div>
      </figure>
    </section>
  </transition>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";

export default {
  mixins: [
    // eslint-disable-next-line
    require("@/mixins/foundation")
  ],
  async created() {
    this.projectOverview = await this.getProjectOverview();
  },
  data() {
    return {
      showListView: false,
      projectOverview: {
        project: {
          heading: "",
          title: "",
          subtitle: "",
          slug: "",
          description: "",
          coverSize: "",
          projectThumbnail: { url: "" }
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
              _modelApiKey
              id
              projects {
                title
                subtitle
                slug
                projectThumbnail {
                  url
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
  }
};
</script>
