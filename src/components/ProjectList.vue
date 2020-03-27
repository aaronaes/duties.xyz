<template>
  <section class="grid-container projectList" id="projectList">
    <figure class="grid-x grid-margin-x">
      <!-- Upcoming work -->
      <details class="cell coming" onclick="return false">
        <summary class="grid-x">
          <h2 class="cell auto title">A new way to get your take-out</h2>
          <div class="cell shrink soon">
            <img src="/images/assets/locked.svg" alt="" />
          </div>
        </summary>
      </details>
      <details class="cell coming" onclick="return false">
        <summary class="grid-x">
          <h2 class="cell auto title">No more lines at the bar</h2>
          <div class="cell shrink soon">
            <img src="/images/assets/locked.svg" alt="" />
          </div>
        </summary>
      </details>
      <details class="cell coming" onclick="return false">
        <summary class="grid-x">
          <h2 class="cell auto title">Club managenet app</h2>
          <div class="cell shrink soon">
            <img src="/images/assets/locked.svg" alt="" />
          </div>
        </summary>
      </details>

      <!-- All work -->

      <details
        v-for="(project, i) in projects"
        :key="i"
        :id="project.name"
        class="cell as"
        :open="active === project.name"
      >
        <summary @click="() => toggle(project.name)" class="grid-x">
          <h2 class="cell auto title">
            <span>●</span>{{ project.data().title }}
          </h2>
          <h2 class="togl">
            <span>ESC</span>
          </h2>
        </summary>
        <component :is="project"></component>
      </details>
    </figure>
    <figure class="grid-x connect">
      <h3 class="cell auto large-8 medium-10">
        Want to talk about a project?
        <span><a href="#">Let's talk about it</a></span>
      </h3>
    </figure>
  </section>
</template>

<script>
import GL from "@/projects/gl.vue";
import Ogle from "@/projects/ogle.vue";
import As from "@/projects/as.vue";
import Humid from "@/projects/humid.vue";
import Eika from "@/projects/eika.vue";
import Gro from "@/projects/gro.vue";
import Fetch from "@/projects/fetch.vue";
//import SSF from "@/projects/ssf.vue";
import Marks from "@/projects/marks.vue";

export default {
  name: "ProjectList",

  data() {
    return {
      title: "Project Index",
      active: "",
      projects: [GL, Ogle, As, Humid, Eika, Gro, Fetch, Marks]
    };
  },
  methods: {
    toggle(name) {
      if (name === this.active) {
        this.active = "";
      } else {
        const el = document.querySelector("#" + name);
        window.scrollTo({
          top: window.pageYOffset + el.getBoundingClientRect().top,
          behavior: "smooth"
        });

        setTimeout(() => {
          this.active = name;
        }, 5000);
      }
    },
    mouseOver: function() {
      this.active = !this.active;
    }
  }
};
</script>
