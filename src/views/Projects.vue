<template>
  <section class="projectList ">
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div
          class="cell small-12 medium-5 large-1"
          v-for="(project, i) in projects"
          :key="i"
          :id="`project-${project.id}`"
          :open="active === project.id"
        >
          <img
            class="cover"
            :src="project.projectThumbnail.url"
            v-show="project.projectThumbnail.url != ''"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";

export default {
  name: "ProjectList",
  props: ["projects"],
  data() {
    return {
      title: "Projects",
      active: ""
    };
  },
  async created() {
    this.projects = await this.getProjects();
  },
  methods: {
    async getProjects() {
      const { data } = await getData({
        query: gql`
          query {
            frontpage {
              projects {
                id
                title
                subtitle
                backgroundColor {
                  hex
                }
                siteLink
                slug
                readMore
                categories {
                  categoryType
                }
                client {
                  name
                }
                blocks {
                  ... on SingleImageRecord {
                    id
                    _modelApiKey
                    description
                    full
                    image {
                      url
                    }
                  }
                  ... on QuoteRecord {
                    id
                    _modelApiKey
                    text
                  }
                  ... on DoubleImageRecord {
                    id
                    _modelApiKey
                    firstImage {
                      url
                    }
                    lastImage {
                      url
                    }
                  }
                  ... on ImageCarouselRecord {
                    id
                    _modelApiKey
                    imageCarouselAsset {
                      id
                      url
                    }
                  }
                }
                description
                coverSize
                projectThumbnail {
                  url
                }
              }
            }
          }
        `
      });
      return data.frontpage.projects;
    }
  }
};
</script>
