<template>
  <section class="projectList">
    <figure class="grid-container" id="projects">
      <div class="grid-x grid-margin-x large-up-4 medium-up-3 small-up-1">
        <div
          v-for="(project, i) in projects"
          :key="i"
          :id="project.name"
          class="cell"
        >
          <div class="summary">
            <div class="imgBox">
              <img
                class="cover"
                :src="project.data().image"
                v-show="project.data().image != ''"
              />
              <p>{{ project.data().title }}</p>
            </div>
          </div>
        </div>
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
      projects: [GL, Ogle, Gro, Humid, Eika, Marks]
    };
  },

  methods: {
    toggle(name) {
      if (name === this.active) {
        const el = document.querySelector("#top");
        this.scrollTo(el);

        setTimeout(() => {
          this.active = "";
          document.body.classList.remove("active");
          document.body.style.overflow = "visible";
        }, 1000);
      } else {
        const el = document.querySelector("#" + name);
        this.scrollTo(el);

        setTimeout(() => {
          document.body.classList.add("active");
          this.active = name;
        }, 1000);

        setTimeout(() => {
          document.body.style.overflow = "hidden";
        }, 2000);
      }
    },
    scrollTo(el) {
      setTimeout(() => {
        window.scrollTo({
          top: window.pageYOffset + el.getBoundingClientRect().top,
          behavior: "smooth"
        });
      }, 250);
    }
  }
};
</script>
