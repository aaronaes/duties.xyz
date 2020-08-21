<template>
  <section class="projectList">
    <figure class="grid-container">
      <div
        v-for="(project, i) in projects"
        :key="i"
        :id="`project-${project.id}`"
        class="ping"
        :open="active === project.id"
      >
        <div>
          <img
            class="cover"
            :src="project.projectThumbnail.url"
            v-show="project.projectThumbnail.url != ''"
          />
          <div class="project-title" v-if="!active">
            <p v-if="project.readMore === true"><b>Case — </b></p>
            <p v-html="project.subtitle"></p>
          </div>
        </div>
      </div>
    </figure>
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
                    centered
                    left
                    right
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
