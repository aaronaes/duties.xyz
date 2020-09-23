<template>
  <transition>
    <main class="feed">
      <!-- Masthead -->
      <Masthead></Masthead>

      <!-- Project List -->
      <ProjectList :projects="projects" />

      <!-- About -->
      <section class="grid-container footer">
        <figure class="grid-x align-center">
          <div class="cell shrink">
            <h2>
              <router-link to="/imprint">Imprint</router-link>
            </h2>
            <h2>
              <a href="mailto:new@duties.xyz?subject=Hi there" target="_blank"
                >Connect</a
              >
            </h2>
          </div>
        </figure>
      </section>
    </main>
  </transition>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import Masthead from "@/components/Masthead.vue";
import ProjectList from "@/components/ProjectList.vue";

export default {
  name: "Home",
  components: {
    Masthead,
    ProjectList
  },
  async created() {
    this.projects = await this.getProjects();
  },
  data() {
    return {
      projects: [],
      title: "Home",
      heading:
        "A creative partner and design studio for thoughtfully crafted products."
    };
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
                slug
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
                    caption
                    full
                    image {
                      url
                    }
                  }
                  ... on QuoteRecord {
                    id
                    _modelApiKey
                    title
                    text
                  }
                  ... on TwoUpRecord {
                    id
                    _modelApiKey
                    firstImage {
                      url
                    }
                    lastImage {
                      url
                    }
                    flip
                  }
                  ... on ThreeUpRecord {
                    id
                    _modelApiKey
                    leftImage {
                      url
                    }
                    middleImage {
                      url
                    }
                    rightImage {
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
  },
  beforeCreate: function() {
    document.body.className = "home";
  }
};
</script>
