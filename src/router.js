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
      path: "/projects/project1",
      name: "Threatlevel: Midnight",
      component: () =>
        import(/* webpackChunkName: "Project1" */ "./projects/Project1.vue")
    },
    {
      path: "/projects/project2",
      name: "Threatlevel: Midnight, part II",
      component: () =>
        import(/* webpackChunkName: "Project2" */ "./projects/Project2.vue")
    }
  ]
});
