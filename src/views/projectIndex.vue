<template>
  <div>
    <section class="outer-margin project-intro">
      <article>
        <figure>
          <h3>
            We have been lucky enough to work with a variety of ambitious
            companies and talented people throughout the years. You can learn
            more about who we are and what we do over here.
          </h3>
        </figure>
      </article>
    </section>
    <section class="outer-margin project-legend show-for-small-only">
      <article>
        <figure>
          <p :class="{ highlight: isHovering }" id="1">
            <span class="number">1</span>
            <span class="caption">Product design</span>
          </p>
          <p :class="{ highlight: isHovering }" id="2">
            <span class="number">2</span>
            <span class="caption">UX</span>
          </p>
          <p :class="{ highlight: isHovering }" id="3">
            <span class="number">3</span>
            <span class="caption">Content</span>
          </p>
          <p :class="{ highlight: isHovering }" id="4">
            <span class="number">4</span>
            <span class="caption">Strategy</span>
          </p>
          <p :class="{ highlight: isHovering }" id="5">
            <span class="number">5</span>
            <span class="caption">Branding</span>
          </p>
        </figure>
      </article>
    </section>
    <section class="outer-margin projectOverview project-grid">
      <article
        v-for="project in projectOverview.projects"
        :key="project.id"
        class="project"
      >
        <figure>
          <a
            :href="'/projects/' + project.slug"
            @click="e => handleProject(e, project)"
          >
            <div class="project-content">
              <p class="name">
                <span class="markdown icon" v-html="project.icon"></span>
                {{ project.title }}
              </p>
              <div class="image hide-for-small-only">
                <img
                  :src="getUrl(project.projectThumbnail.url)"
                  :srcset="getSrcSet(project.projectThumbnail.url)"
                />
              </div>
              <div class="categories">
                <p
                  v-for="(category, i) in project.categories"
                  :key="i"
                  @mouseover="isHovering = true"
                  @mouseout="isHovering = false"
                  :id="category.categoryNumber"
                >
                  <span class="number" v-html="category.categoryNumber"></span>
                  <span
                    class="caption show-for-large"
                    v-html="category.categoryType"
                  ></span>
                </p>
              </div>
              <p class="year hide show-for-large">
                {{ project.year }}
              </p>
            </div>
          </a>
        </figure>
      </article>
    </section>
    <section class="outer-margin clientOverview">
      <article class="row">
        <figure class="header">
          <p>❤️ Our clients & friends</p>
        </figure>
        <figure class="body">
          <ul>
            <li v-for="(client, i) in allClients" :key="i">
              <p class="markdown" v-html="client.name"></p>
            </li>
          </ul>
        </figure>
      </article>
    </section>
    <Footer />
  </div>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";
import Footer from "@/components/Footer.vue";

export default {
  name: "Index",
  async created() {
    this.projectOverview = await this.getProjectOverview();
    this.allClients = await this.getAllClients();
  },
  components: {
    Footer
  },
  data() {
    return {
      isMini: false,
      isHovering: false,
      projectOverview: {
        projects: []
      },
      allClients: {
        client: []
      }
    };
  },
  methods: {
    async getAllClients() {
      const { data } = await getData({
        query: gql`
          query {
            allClients(orderBy: name_ASC) {
              name
            }
          }
        `
      });
      return data.allClients;
    },
    async getProjectOverview() {
      const { data } = await getData({
        query: gql`
          query {
            projectOverview {
              projects {
                readMore
                icon
                title
                subtitle
                slug
                siteLink
                description
                year
                id
                projectThumbnail {
                  url
                }
                categories {
                  categoryType
                  categoryNumber
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
    handleProject(e, project) {
      if (project.readMore) {
        this.toggle(project.id);
        this.$router.push("/projects/" + project.slug);
      }
    },
    scrollTo(el) {
      window.scrollTo({
        top: window.pageYOffset + el.getBoundingClientRect().top,
        behavior: "smooth"
      });
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
  },
  beforeCreate: function() {
    document.body.className = "overview";
  }
};
</script>
