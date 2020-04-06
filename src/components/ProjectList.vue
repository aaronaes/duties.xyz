<template>
  <section id="go" class="grid-container projectList">
    <figure class="grid-x projects" id="projects">
      <h3 class="section-title">Project Index &searr;</h3>
      <details
        v-for="(project, i) in projects"
        :key="i"
        :id="project.name"
        class="cell"
        :open="active === project.name"
      >
        <summary
          class="grid-x align-middle"
          @click="() => toggle(project.name)"
        >
          <h2>
            <span class="dot">●</span>
            <span class="title">{{ project.data().title }}</span>
          </h2>

          <h2 class="togl arrow"></h2>
        </summary>
        <component :is="project"></component>
      </details>
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
      title: "Project Index",
      active: "",
      projects: [GL, Ogle, Gro, Humid, Eika, Marks]
    };
  },
  methods: {
    toggle(name) {
      if (name === this.active) {
        this.active = "";
        const el = document.querySelector("#projects");
        this.scrollTo(el);
      } else {
        this.active = name;
        const el = document.querySelector("#" + name);
        this.scrollTo(el);
      }
    },
    scrollTo(el) {
      window.scrollTo({
        top: window.pageYOffset + el.getBoundingClientRect().top - 15,
        behavior: "smooth"
      });
    },
    mouseOver: function() {
      this.active = !this.active;
    }
  }
};
</script>
