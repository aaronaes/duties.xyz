import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

// Projects
import Project1 from "@/projects/Project1.vue";
import Project2 from "@/projects/Project2.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,

  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
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
