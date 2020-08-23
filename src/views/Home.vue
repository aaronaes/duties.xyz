<template>
  <main id="home">
    <!-- Masthead -->
    <Masthead :heading="heading"></Masthead>

    <!-- Project List -->
    <ProjectList :projects="projects" />

    <!-- About -->
    <section class="grid-container clients">
      <figure class="grid-x grid-padding-x align-center">
        <div class="cell large-7 medium-10 small-12">
          <h2 class="section-title">Clients &amp; friends</h2>
        </div>
      </figure>
      <figure class="grid-x grid-padding-x align-center client-grid">
        <div class="cell large-7 medium-10 small-12">
          <h2 v-for="project in projects" :key="project.id" class="float-left">
            {{ project.title }}
          </h2>
        </div>
      </figure>
      <figure class="grid-x grid-padding-x align-center">
        <div class="cell large-7 medium-10 small-12">
          <h2 class="cell">
            We have worked with a range of excellent companies and people
            throughout the years and we are always excited to hear from future
            collaborators about exciting ventures, new opportunities and
            problems to solve.
          </h2>
        </div>
      </figure>
      <figure class="grid-x grid-padding-x align-center">
        <div class="cell large-7 medium-10 small-12">
          <h2 class="cell large-8 medium-10 small-12">
            Got something for us?
            <a href="mailto:new@duties.xyz?subject=Hi there" target="_blank"
              >Let’s chat</a
            >
          </h2>
        </div>
      </figure>
    </section>
  </main>
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
    },
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    }
  },
  beforeCreate: function() {
    document.body.className = "home";
  }
};
</script>
