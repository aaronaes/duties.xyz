<template>
  <section class="projectList">
    <figure class="grid-container" id="projects top">
      <div
        v-for="(project, i) in projects"
        :key="i"
        :id="project.name"
        class="details"
        :open="active === project.name"
        :class="{ loaded: project.name === active }"
        :style="[
          project.name === active
            ? {
                'background-color': project.data().bg
              }
            : { 'background-color': 'initial' }
        ]"
      >
        <h1 class="closeBtn" @click="() => toggle(project.name)">
          Close
        </h1>
        <div id="summaryTop" class="summary">
          <div class="imgBox">
            <img
              class="cover"
              @click="() => toggle(project.name)"
              :src="project.data().image"
              v-show="project.data().image != ''"
              :class="project.data().coverSize"
              v-if="!active"
            />
            <img
              class="cover"
              :src="project.data().image"
              v-show="project.data().image != ''"
              :class="project.data().coverSize"
              v-if="active"
            />

            <h1 v-if="!active" @click="() => toggle(project.name)">
              {{ project.data().title }}
            </h1>
          </div>
        </div>
        <transition name="content" mode="out-in">
          <div class="grid-x align-center align-middle content" v-if="active">
            <component :is="project"></component>
            <div
              class="grid-x align-center align-middle similarList"
              data-color="#16A085"
            >
              <ul>
                <p class="cell">Selected Works</p>
                <br />
                <li
                  v-for="(project, i) in projects"
                  :key="i"
                  :class="{ isOpen: project.name === active }"
                  :id="project.name"
                >
                  <h1
                    @click="
                      toggle(project.name);
                      scrollToTop();
                    "
                  >
                    {{ project.data().title }}
                  </h1>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </figure>
  </section>
</template>

<script>
import GL from "@/projects/gl.vue";
import Ogle from "@/projects/ogle.vue";
import Humid from "@/projects/humid.vue";
import Eika from "@/projects/eika.vue";
import Gro from "@/projects/gro.vue";
import Marks from "@/projects/marks.vue";

export default {
  name: "ProjectList",
  data() {
    return {
      title: "Projects",
      active: "",
      projects: [GL, Ogle, Gro, Humid, Eika, Marks],
      scrollPosition: null
    };
  },

  methods: {
    toggle(name) {
      if (name === this.active) {
        const el = document.querySelector("#" + name);
        this.scrollTo(el);

        setTimeout(() => {
          this.active = "";
        }, 1000);

        setTimeout(() => {
          document.body.classList.remove("active");
        }, 1000);
      } else {
        const el = document.querySelector("#" + name);
        this.scrollTo(el);

        setTimeout(() => {
          this.active = name;
          document.body.classList.add("active");
        }, 1000);
      }
    },
    scrollTo(el) {
      window.scrollTo({
        top: window.pageYOffset + el.getBoundingClientRect().top,
        behavior: "smooth"
      });
    },
    scrollToTop() {
      const el = document.querySelector("#projects");
      this.scrollTo(el);
    }
  },
  mounted() {
    //
  }
};
</script>
