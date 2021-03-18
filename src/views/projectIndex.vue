<template>
  <div id="content">
    <section
      class="outer-margin section header-pad"
      v-if="$route.name === 'Projects'"
    >
      <article class="row">
        <figure class="column">
          <h3>
            We have been lucky enough to work with a variety of ambitious
            companies and talented people throughout the years.
          </h3>
        </figure>
        <figure class="column heading hide">
          <h1 class="title">On-Duty</h1>
        </figure>
      </article>
    </section>
    <section
      class="outer-margin project-grid"
      v-if="$route.name !== 'Projects'"
    >
      <article
        v-for="project in projectOverview.projects.slice(3, 9999999)"
        :key="project.id"
        class="main project"
      >
        <a
          :href="'/projects/' + project.slug"
          @click="e => handleProject(e, project)"
        >
          <figure id="dildo" class="column">
            <div class="project-content">
              <p class="name">
                <span class="markdown icon" v-html="project.icon"></span>
                {{ project.title }}
              </p>
              <div class="image follow">
                <img
                  :src="getUrl(project.projectThumbnail.url)"
                  :srcset="getSrcSet(project.projectThumbnail.url)"
                />
              </div>
              <div class="categories show-for-medium">
                <p
                  class="number"
                  v-for="(category, i) in project.categories"
                  :key="i"
                >
                  <span class="markdown" v-html="category.categoryNumber">
                  </span>
                  <span class="show-for-medium">{{
                    category.categoryType
                  }}</span>
                </p>
              </div>
            </div>
          </figure>
        </a>
      </article>
    </section>
    <section class="outer-margin project-grid" v-else>
      <article
        v-for="project in projectOverview.projects"
        :key="project.id"
        class="main project fadeIn"
        v-in-viewport.once
      >
        <a
          :href="'/projects/' + project.slug"
          @click="e => handleProject(e, project)"
        >
          <figure id="dildo" class="column">
            <div class="project-content">
              <p class="name">
                <span class="markdown icon" v-html="project.icon"></span>
                {{ project.title }}
              </p>
              <div class="image follow">
                <img
                  :src="getUrl(project.projectThumbnail.url)"
                  :srcset="getSrcSet(project.projectThumbnail.url)"
                />
              </div>
              <div class="categories show-for-medium">
                <p
                  class="number"
                  v-for="(category, i) in project.categories"
                  :key="i"
                >
                  <span class="markdown" v-html="category.categoryNumber">
                  </span>
                  <span class="show-for-medium">{{
                    category.categoryType
                  }}</span>
                </p>
              </div>
            </div>
          </figure>
        </a>
      </article>
    </section>
    <section class="outer-margin client-overview">
      <article class="row">
        <figure class="header">
          <h3>
            Our clients <br />
            & friends
          </h3>
        </figure>
        <figure class="body">
          <h3>
            We have been lucky enough to work with a variety of ambitious
            companies and talented people throughout the years.
          </h3>
          <ul>
            <li v-for="(client, i) in allClients" :key="i">
              <p>{{ client.name }}</p>
            </li>
          </ul>
          <p class="link" v-if="$route.name !== 'Projects'">
            Check out
            <router-link to="projects">our work</router-link> we have done or
            catch up on the latest news
            <router-link to="news">here</router-link>.
          </p>
          <p class="link" v-if="$route.name === 'Projects'">
            You can learn more about who we are and what we do over
            <router-link to="/studio">here</router-link>.
            <br />
            Catch up on the latest news in the studio
            <router-link to="news">here</router-link>.
          </p>
        </figure>
      </article>
    </section>
  </div>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";

export default {
  name: "Index",
  async created() {
    this.projectOverview = await this.getProjectOverview();
    this.allClients = await this.getAllClients();
  },
  components: {},
  data() {
    return {
      title: "Index",
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
    addDarkmode() {
      document.body.classList.add("darkmode");
    },
    removeDarkmode() {
      document.body.classList.remove("darkmode");
    },
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
  mounted: function() {
    $(document).mousemove(function(e) {
      $(".follow").offset({
        left: e.pageX,
        top: e.pageY
      });
    });
  },
  destroyed() {
    document.body.classList.remove("darkmode");
  }
};
</script>
