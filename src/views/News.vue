<template>
  <div>
    <section class="outer-margin news">
      <article class="intro">
        <figure class="column heading">
          <h3>
            Our daily duties include helping our clients and friends with
            website design, apps, UX, brand identities and a bit of XYZ.
            Sometimes we write the occasional article on Medium too.
          </h3>
        </figure>
      </article>

      <section class="stories news-grid">
        <article class="story" v-for="(story, i) in onDuty" :key="i">
          <figure class="column">
            <div class="storyImage">
              <img
                :src="getUrl(story.storyImage.url)"
                :srcset="getSrcSet(story.storyImage.url)"
              />
            </div>
            <div class="body">
              <p class="markdown" v-html="story.description"></p>
              <div
                class="categories"
                v-for="item in story.categories"
                :key="item.id"
              >
                <p>
                  <span class="number">{{ item.categoryNumber }}</span
                  >{{ item.categoryType }}
                </p>
              </div>
            </div>
          </figure>
        </article>
      </section>
    </section>
    <Footer />
  </div>
</template>

<script>
import gql from "graphql-tag";
import getData from "@/utils/getData";
import imgix from "@/utils/imgix";
import marked from "marked";
import Footer from "@/components/Footer.vue";

export default {
  name: "OnDuty",
  components: {
    Footer
  },
  async created() {
    this.onDuty = await this.getOnDuty();
  },
  data() {
    return {
      title: "OnDuty",
      onDuty: {
        singleDuty: []
      }
    };
  },
  methods: {
    async getOnDuty() {
      const { data } = await getData({
        query: gql`
          query {
            allStories {
              storyImage {
                url
              }
              title
              description
              categories {
                categoryNumber
                categoryType
              }
            }
          }
        `
      });
      return data.allStories;
    },
    getMarkdown(content) {
      return marked(content);
    },
    getUrl(url) {
      return imgix({ url: url });
    },
    getSrcSet(url) {
      return `
      ${imgix({ url: url, w: 640, q: 60 })} 640w,
      ${imgix({ url: url, w: 768, q: 60 })} 768w,
      ${imgix({ url: url, w: 1024, q: 80 })} 1024w,
      ${imgix({ url: url, w: 1366, q: 80 })} 1366w,
      ${imgix({ url: url, w: 1600, q: 80 })} 1600w,
      ${imgix({ url: url, w: 1920, q: 80 })} 1920w,
      `;
    }
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  },
  beforeCreate: function() {
    document.body.className = "onDuty";
  }
};
</script>
