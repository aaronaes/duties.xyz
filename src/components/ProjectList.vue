<template>
  <section class="projectList">
    <figure class="grid-container" id="projects">
      <div
        v-for="(project, i) in projects"
        :key="i"
        :id="`project-${project.id}`"
        class="details"
        :open="active === project.id"
        :class="{
          loaded: project.id === active
        }"
        :style="[
          project.id === active
            ? {
                'background-color': project.backgroundColor || 'white'
              }
            : { 'background-color': 'initial' }
        ]"
      >
        <div class="inner">
          <div class="closeBtn">
            <p @click="() => toggle(project.id)">Close</p>
          </div>
          <div class="summary grid-container">
            <a
              target="_blank"
              style="display: block"
              :href="project.siteLink"
              @click="e => handleProjectClick(e, project)"
              class="imgBox"
              :class="project.coverSize"
            >
              <img
                class="cover"
                :src="project.projectThumbnail.url"
                v-show="project.projectThumbnail.url != ''"
                v-if="!active"
              />
              <img
                class="cover"
                :src="project.projectThumbnail.url"
                v-show="project.projectThumbnail.url != ''"
                :class="project.coverSize"
                v-if="active"
              />
            </a>
            <div class="project-title show-for-small-only">
              <h1>{{ project.title }}</h1>
              <p>{{ project.subtitle }}</p>
            </div>
          </div>
          <transition name="content" mode="out-in">
            <div class="grid-x align-center align-middle content" v-if="active">
              <ProjectLightBox :project="project" />
            </div>
          </transition>
        </div>
        <div class="grid-x align-center align-middle content" v-if="active">
          <div
            class="grid-x align-center align-middle similarList"
            :style="[
              project.id === active
                ? {
                    'background-color': project.backgroundColor || 'white'
                  }
                : { 'background-color': 'initial' }
            ]"
          >
            <ul>
              <p class="cell">Selected Works</p>
              <li
                v-for="(project, i) in projects"
                :key="i"
                :class="{ isOpen: project.id === active }"
                :id="project.id"
              >
                <h1
                  v-if="project.readMore"
                  class="jump"
                  @click="toggle(project.id)"
                >
                  {{ project.title }}
                </h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </figure>
  </section>
</template>

<script>
import ProjectLightBox from "@/components/ProjectLightBox";

export default {
  name: "ProjectList",
  props: ["projects"],
  components: { ProjectLightBox },
  data() {
    return {
      title: "Projects",
      active: ""
    };
  },
  methods: {
    toggle(id) {
      if (id === this.active) {
        const el = document.querySelector("#project-" + id);
        this.scrollTo(el);

        setTimeout(() => {
          this.active = "";
          document.body.classList.remove("active");
        }, 1000);
      } else {
        const el = document.querySelector("#project-" + id);
        this.scrollTo(el);

        setTimeout(() => {
          this.active = id;
          document.body.classList.add("active");
        }, 1000);
      }
    },
    handleProjectClick(e, project) {
      if (project.readMore) {
        e.preventDefault();
        this.toggle(project.id);
      }
    },
    scrollTo(el) {
      window.scrollTo({
        top: window.pageYOffset + el.getBoundingClientRect().top,
        behavior: "smooth"
      });
    }
  }
};
</script>
