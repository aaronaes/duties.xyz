<template>
  <main>
    <!-- Masthead -->
    <Masthead></Masthead>

    <!-- Project List -->
    <ProjectList :projects="projects" />

    <!-- About Block -->
    <section class="content-block studio-block">
      <article>
        <figure class="studio-image">
          <img
            src="https://img2.storyblok.com/1300x0/filters:quality(85):format(webp)/f/69091/2814x4200/0af3e7802e/20200127-bedow000280-11a.jpg"
            alt=""
          />
        </figure>
        <figure class="text-container">
          <blockquote class="text-block">
            <h2 class="body-text">
              We work at the intersection of visual and functional design;
              focusing on brand identity design, product strategy, web and
              native application development plus a bit of xyz…
            </h2>
          </blockquote>
          <blockquote class="link-block">
            <router-link :to="{ name: 'About' }">
              <p>
                Read more
              </p>
            </router-link>
          </blockquote>
        </figure>
      </article>
    </section>

    <!-- About Block -->
    <section class="content-block test-block">
      <article>
        <figure class="text-container">
          <blockquote class="title-block heading">
            <h1 class="title">Approach</h1>
          </blockquote>
          <div class="text-block">
            <!-- <h2 class="title">
              We work at the intersection of visual and functional design.
            </h2> -->
            <h3 class="body">
              We focus on brand identity design, product strategy, web and
              native application development plus a bit of xyz. We focus on
              brand identity design, product strategy, web and native
              application development plus a bit of xyz.
            </h3>
            <router-link :to="{ name: 'About' }">
              <p class="body">
                Read more
              </p>
            </router-link>

            <div class="image-carousel">
              <swiper
                ref="mySwiper"
                :options="swiperOptions"
                :auto-update="true"
                :auto-destroy="true"
                :effect="fade"
              >
                <swiper-slide>
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
                  <div class="slide-img">
                    <img src="/images/offduty/offduty-04@2x.jpg" alt="Test" />
                  </div>
                </swiper-slide>
              </swiper>
              <!-- Add Arrows -->
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </figure>
      </article>
    </section>
    <Footer />
  </main>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import Masthead from "@/components/Masthead.vue";
import ProjectList from "@/components/ProjectList.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Footer,
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
        "A creative partner and design studio for thoughtfully crafted products.",
      swiperOptions: {
        speed: 300,
        loop: true,
        centeredSlides: false,
        slidesPerView: "auto",
        updateOnImagesReady: true,
        lazyLoadingInPrevNext: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
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
                coverSize
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
