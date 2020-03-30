<template>
  <section id="go" class="grid-container projectList">
    <figure class="grid-x ongoing">
      <h3>Ongoing projects &searr;</h3>
      <!-- Upcoming work -->
      <details class="cell" onclick="return false">
        <summary class="coming">
          <h2 class="cell auto title">A new way to get your take-out</h2>
          <div class="cell shrink soon">
            <img src="/images/assets/locked.svg" alt="" />
          </div>
        </summary>
      </details>
      <details class="cell" onclick="return false">
        <summary class="coming">
          <h2 class="cell auto title">No more lines at the bar</h2>
          <div class="cell shrink soon">
            <img src="/images/assets/locked.svg" alt="" />
          </div>
        </summary>
      </details>
      <details class="cell" onclick="return false">
        <summary class="coming">
          <h2>
            <span class="dot">●</span>
            <span class="title">Sport club app</span>
          </h2>
          <div class="soon">
            <img src="/images/assets/locked.svg" alt="" />
          </div>
        </summary>
      </details>
    </figure>

    <figure class="grid-x projects" id="projectList">
      <h3>Project Index &searr;</h3>

      <!-- All work -->
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
        const el = document.querySelector("#projectList");
        this.scrollTo(el);
      } else {
        const el = document.querySelector("#" + name);
        this.scrollTo(el);
        setTimeout(() => {
          this.active = name;
        }, 500);
      }
    },
    scrollTo(el) {
      window.scrollTo({
        top: window.pageYOffset + el.getBoundingClientRect().top - 10,
        behavior: "smooth"
      });
    },
    mouseOver: function() {
      this.active = !this.active;
    }
  }
};
</script>
