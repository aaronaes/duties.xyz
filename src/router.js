import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import VueScrollReveal from "vue-scroll-reveal";
import { VLazyImagePlugin } from "v-lazy-image";

Vue.use(VLazyImagePlugin);

// ScrollReveal
Vue.use(VueScrollReveal, {
  scale: 1,
  duration: 500,
  delay: 500,
  distance: "0px",
  viewFactor: 0.2,
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
  opacity: 0,
  mobile: false,
  viewOffset: {
    top: 0,
    bottom: 0
  },
  reset: false
});

// Projects
import Project1 from "@/projects/Project1.vue";
import Project2 from "@/projects/Project2.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: () =>
        import(/* webpackChunkName: "About" */ "./views/About.vue")
    },
    {
      path: "/journal",
      name: "Journal",
      component: () =>
        import(/* webpackChunkName: "Journal" */ "./views/Journal.vue")
    },
    {
      path: "/project1",
      name: "Project 1",
      component: () =>
        import(/* webpackChunkName: "Project1" */ "./projects/Project1.vue")
    },
    {
      path: "/project2",
      name: "Project 2",
      component: () =>
        import(/* webpackChunkName: "Project2" */ "./projects/Project2.vue")
    }
  ]
});
