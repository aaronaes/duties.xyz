<template>
  <transition>
    <main class="feed">
      <!-- Masthead -->
      <Masthead></Masthead>

      <!-- Project List -->

      <ProjectList :projects="projects" />

      <!-- About -->
      <section class="grid-container clients">
        <figure class="grid-x grid-margin-x grid-padding-x align-center">
          <div class="cell small-12 medium-10 large-8">
            <h3 class="title">Clients &amp; friends</h3>
          </div>
        </figure>
        <figure
          class="grid-x grid-margin-x grid-padding-x align-center client-grid"
        >
          <div class="cell small-12 medium-10 large-8">
            <h1 v-for="client in clientList" :key="client.id">
              {{ client.name }}.
            </h1>
          </div>
        </figure>
        <figure class="grid-x grid-margin-x grid-padding-x align-center">
          <div class="cell small-12 medium-10 large-8">
            <h2 class="cell">
              We have worked with a range of excellent companies and people
              throughout the years and we are always excited to hear from future
              collaborators about exciting ventures, new opportunities and
              problems to solve.
            </h2>
          </div>
        </figure>
        <figure class="grid-x grid-margin-x grid-padding-x align-center">
          <div class="cell small-12 medium-10 large-8">
            <h2 class="cell small-12 medium-10 large-8">
              Got something for us?
              <a href="mailto:new@duties.xyz?subject=Hi there" target="_blank"
                >Let’s chat</a
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
    this.clientList = await this.getClientList();
  },
  data() {
    return {
      projects: [],
      clientList: [],
      title: "Home",
      heading:
        "A creative partner and design studio for thoughtfully crafted products.",
      carouselData: 0,
      hooperSettings: {
        transition: 500,
        wheelControl: false,
        trimWhiteSpace: false,
        breakpoints: {
          1220: {
            itemsToShow: 4.25
          },
          768: {
            itemsToShow: 3.25
          },
          576: {
            itemsToShow: 2.25
          },
          0: {
            itemsToShow: 1.25
          }
        }
      }
    };
  },
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData);
    }
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
                    caption
                    _modelApiKey
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
                  ... on TwoUpRecord {
                    id
                    _modelApiKey
                    firstImage {
                      url
                    }
                    lastImage {
                      url
                    }
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
    },
    async getClientList() {
      const { data } = await getData({
        query: gql`
          query {
            frontpage {
              clientList {
                name
              }
            }
          }
        `
      });
      return data.frontpage.clientList;
    }
  },
  beforeCreate: function() {
    document.body.className = "home";
  }
};
</script>
