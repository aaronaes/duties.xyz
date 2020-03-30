<template>
  <section id="go" class="grid-container projectList">
    <figure class="grid-x">
      <!-- Upcoming work -->
      <!-- <details class="cell coming" onclick="return false">
        <summary class="grid-x">
          <h2 class="cell auto title">A new way to get your take-out</h2>
          <div class="cell shrink soon">
            <img src="/images/assets/locked.svg" alt="" />
          </div>
        </summary>
      </details> -->
      <!-- <details class="cell coming" onclick="return false">
        <summary class="grid-x">
          <h2 class="cell auto title">No more lines at the bar</h2>
          <div class="cell shrink soon">
            <img src="/images/assets/locked.svg" alt="" />
          </div>
        </summary>
      </details> -->
      <details class="cell" onclick="return false">
        <summary class="grid-x coming">
          <h2 class="cell auto title">Sport club app</h2>
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
        <summary @click="() => toggle(project.name)">
          <h2>
            <span class="dot">●</span
            ><span class="title">{{ project.data().title }}</span>
          </h2>
          <div class="togl">
            <img src="/images/assets/close.svg" alt="Close" />
          </div>
        </summary>
        <component :is="project"></component>
      </details>
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
          top: window.pageYOffset + el.getBoundingClientRect().top - 10,
          behavior: "smooth"
        });

        setTimeout(() => {
          this.active = name;
        }, 500);
      }
    },
    mouseOver: function() {
      this.active = !this.active;
    }
  }
};
</script>
