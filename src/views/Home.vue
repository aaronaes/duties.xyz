<template>
  <transition>
    <main class="feed">
      <!-- Masthead -->
      <Masthead></Masthead>

      <!-- Project List -->

<<<<<<< HEAD
    <!-- About -->
    <section class="grid-container clients">
      <figure class="grid-x grid-padding-x align-center">
        <div class="cell large-7 medium-10 small-12">
          <h2 class="section-title">Clients &amp; friends</h2>
        </div>
      </figure>
      <figure class="grid-x grid-padding-x align-center client-grid">
        <div class="cell large-7 medium-10 small-12">
          <h2 v-for="client in clients" :key="client.id" class="float-left">
            {{ client.name }}
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

    <!-- About -->
    <section class="grid-container footer">
      <figure class="grid-x grid-padding-x align-center">
        <div class="cell large-7 medium-10 small-12">
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
=======
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
>>>>>>> routing
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
<<<<<<< HEAD
    this.clients = await this.getClients();
=======
    this.clientList = await this.getClientList();
>>>>>>> routing
  },
  data() {
    return {
      projects: [],
<<<<<<< HEAD
      clients: [],
=======
      clientList: [],
>>>>>>> routing
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
              clients {
                name
              }
            }
          }
        `
      });
      return data.frontpage.projects;
    },
<<<<<<< HEAD
    async getClients() {
=======
    async getClientList() {
>>>>>>> routing
      const { data } = await getData({
        query: gql`
          query {
            frontpage {
<<<<<<< HEAD
              clients {
=======
              clientList {
>>>>>>> routing
                name
              }
            }
          }
        `
      });
<<<<<<< HEAD
      return data.frontpage.clients;
    },
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
=======
      return data.frontpage.clientList;
>>>>>>> routing
    }
  },
  beforeCreate: function() {
    document.body.className = "home";
  }
};
</script>
