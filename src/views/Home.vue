/* eslint-disable no-undef */
<template>
  <main>
    <!-- Masthead -->
    <section class="outer-margin hero">
      <article class="row">
        <figure class="heading">
          <h1 class="markdown title">
            A digital design partner and creative studio for ambitious
            businesses.
          </h1>
        </figure>
      </article>
    </section>

    <!-- Project List -->
    <ProjectList :projects="projects" />

    <!-- About Block -->
    <section class="outer-margin studio fade-in" v-in-viewport.once>
      <article class="row">
        <figure class="text-header show-for-small-only">
          <div class="heading">
            <h1 class="title">On-duty</h1>
          </div>
        </figure>
        <figure class="studio-image">
          <img src="/images/about/studio-03.png" />
        </figure>
        <figure class="text-container">
          <div class="text">
            <div class="heading hide-for-small-only">
              <h1 class="title">On-duty</h1>
            </div>
            <p>
              We allow businesses to achieve their potential through considered
              design solutions.
            </p>

            <router-link class="link" :to="{ name: 'About' }">
              <p>
                Read more
              </p>
            </router-link>
          </div>
        </figure>
      </article>
    </section>

    <!-- Off-duty Block -->
    <section class="outer-margin off-duty fade-in" v-in-viewport.once>
      <article class="row">
        <figure class="text-header">
          <div class="heading">
            <h1 class="title">
              Off-duty <br />
              Weekends
            </h1>
          </div>
        </figure>
        <figure class="text-container">
          <div class="text">
            <p>
              When we are off-duty, you can find us creating experimental
              typefaces, studio merch and curating our studio playlists.
            </p>
          </div>
        </figure>
        <figure class="image-carousel">
          <swiper ref="mySwiper" :options="swiperOptions" :auto-update="true">
            <swiper-slide>
              <div class="slide-text">
                <a href="#" target="_blank">
                  <p>
                    ♫ Listen to on Spotify
                  </p>
                </a>
              </div>
              <div class="slide-img">
                <img src="/images/offduty/offduty-01@2x.jpg" alt="Test" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-img">
                <img src="/images/offduty/offduty-03@2x.jpg" alt="Test" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-img">
                <img src="/images/offduty/offduty-02@2x.jpg" alt="Test" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-text">
                <a href="#" target="_blank">
                  <p>
                    $ Buy a print
                  </p>
                </a>
              </div>
              <div class="slide-img">
                <img src="/images/offduty/offduty-04@2x.jpg" alt="Test" />
              </div>
            </swiper-slide>
          </swiper>
          <!-- Add Arrows -->
          <div
            class="swiper-button-next"
            v-bind:style="{ cursor: cursorNext }"
          ></div>
          <div
            class="swiper-button-prev"
            v-bind:style="{ cursor: cursorPrev }"
          ></div>
        </figure>
        <figure class="swiper-pagination"></figure>
      </article>
    </section>
    <Footer />
  </main>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import ProjectList from "@/components/ProjectList.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Footer,
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
        "A creative partner and design studio for thoughtfully crafted products.",
      swiperOptions: {
        speed: 200,
        loop: true,
        slidesPerView: "auto",
        grabCursor: "true",
        simulateTouch: "true",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        }
      },
      cursorPrev: `url("data:image/svg+xml,%3Csvg width='26' height='21' viewBox='0 0 26 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.2388 2.10976C11.6294 1.71923 11.6294 1.08607 11.2388 0.695542C10.8483 0.305018 10.2152 0.305018 9.82463 0.695542L0.824632 9.69554C0.434107 10.0861 0.434107 10.7192 0.824632 11.1098L9.82463 20.1098C10.2152 20.5003 10.8483 20.5003 11.2388 20.1098C11.6294 19.7192 11.6294 19.0861 11.2388 18.6955L3.94595 11.4026H24.5317C25.084 11.4026 25.5317 10.9549 25.5317 10.4026C25.5317 9.85036 25.084 9.40265 24.5317 9.40265H3.94595L11.2388 2.10976Z' fill='black'/%3E%3C/svg%3E%0A"), pointer`,
      cursorNext: `url("data:image/svg+xml,%3Csvg width='26' height='21' viewBox='0 0 26 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.5167 0.695542C16.1262 0.305018 15.493 0.305018 15.1025 0.695542C14.7119 1.08607 14.7119 1.71923 15.1025 2.10976L22.3954 9.40265H1.80957C1.25729 9.40265 0.80957 9.85036 0.80957 10.4026C0.80957 10.9549 1.25729 11.4026 1.80957 11.4026H22.3954L15.1025 18.6955C14.7119 19.0861 14.7119 19.7192 15.1025 20.1098C15.493 20.5003 16.1262 20.5003 16.5167 20.1098L25.5167 11.1098C25.9072 10.7192 25.9072 10.0861 25.5167 9.69554L16.5167 0.695542Z' fill='black'/%3E%3C/svg%3E%0A"), pointer`
    };
  },
  methods: {
    async getProjects() {
      const { data } = await getData({
        query: gql`
          query {
            frontpage {
              summary
              projects {
                updatedAt
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
                    full
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
                projectThumbnail {
                  url
                }
                projectBanner {
                  url
                }
                isDevice
                isWebsite
              }
              contact {
                linkTitle
                linkUrl
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
              projects(orderBy: position_ASC){[]}
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
  computed: {
    pageName() {
      return this.$route.name;
    }
  },
  beforeCreate: function() {
    document.body.className = "home";
  }
};
</script>
