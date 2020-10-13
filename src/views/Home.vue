<template>
  <transition name="page" mode="out-in">
    <main class="feed">
      <!-- Masthead -->
      <Masthead></Masthead>

      <!-- Project List -->
      <ProjectList :projects="projects" />

      <!-- About -->
      <section class="content-block viewAll">
        <article>
          <figure>
            <div class="nav-item">
              <h2>
                <router-link :to="{ name: 'Projects' }">
                  All work

                  <svg
                    width="525"
                    height="146"
                    viewBox="0 0 525 146"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M203.038 5.71637C207.038 5.71637 489.038 -13.2836 519.038 49.2164C549.038 111.716 296.538 139.716 252.038 141.216C207.538 142.716 6.53841 148.716 3.03841 93.2163C0.238414 48.8163 151.205 26.383 227.038 20.7163C281.705 18.383 401.338 19.9163 442.538 44.7163"
                      stroke="#E5594D"
                      class="path"
                      stroke-width="6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </router-link>
              </h2>
            </div>
          </figure>
        </article>
      </section>
      <section class="content-block studio-block">
        <article>
          <figure class="studio-image">
            <img
              src="https://img2.storyblok.com/1300x0/filters:quality(85):format(webp)/f/69091/2814x4200/0af3e7802e/20200127-bedow000280-11a.jpg"
              alt=""
            />
          </figure>
          <figure class="text-container">
            <div class="text-block">
              <h2 class="body">
                We work at the intersection of visual and functional design;
                focusing on brand identity design, product strategy, web and
                native application development plus a bit of xyz…
              </h2>
            </div>
            <div class="text-block align-bottom">
              <p>
                <a href="#">Read more</a>
              </p>
            </div>
          </figure>
        </article>
      </section>
      <section class="content-block summary">
        <article class="align-center">
          <figure class="block-inner">
            <!-- <h3 class="markdown" v-html="frontpage.summary"></h3> -->
            <ul>
              <li>
                <p>
                  <router-link :to="{ name: 'Home' }">Home</router-link>
                </p>
              </li>
              <li>
                <p>
                  <router-link :to="{ name: 'Projects' }"
                    >Project Index</router-link
                  >
                </p>
              </li>
              <li>
                <p>
                  <router-link :to="{ name: 'About' }">Studio</router-link>
                </p>
              </li>
              <li>
                <p>
                  <router-link :to="{ name: 'Imprint' }">Imprint</router-link>
                </p>
              </li>
            </ul>
          </figure>
          <figure class="block-inner">
            <p class="markdown">
              Want to work with us on your next project?
              <br />We’d love to hear from you.
            </p>
          </figure>
          <figure class="block-inner">
            <div class="contact">
              <p>
                <a href="#" target="_blank">new@duties.xyz</a>
              </p>
              <p>
                <a href="#" target="_blank">+47 986 60 788</a>
              </p>
            </div>
          </figure>
          <figure class="block-inner links">
            <div class="links">
              <p v-for="link in frontpage.contact" :key="link.id">
                <a :href="link.linkUrl" target="_blank">{{ link.linkTitle }}</a>
              </p>
            </div>
          </figure>
        </article>
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
    this.frontpage = await this.getFrontpage();
  },
  data() {
    return {
      title: "Home",
      frontpage: [],
      projects: [],
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
              summary
              contact {
                linkTitle
                linkUrl
              }
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
                roles {
                  name
                  link
                  role
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
                    centerImage {
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
                isDevice
                isWebsite
              }
            }
          }
        `
      });
      return data.frontpage.projects;
    },
    async getFrontpage() {
      const { data } = await getData({
        query: gql`
          query {
            frontpage {
              summary(markdown: true)
              contact {
                linkTitle
                linkUrl
              }
            }
          }
        `
      });
      return data.frontpage;
    }
  },
  beforeCreate: function() {
    document.body.className = "home";
  }
};
</script>
