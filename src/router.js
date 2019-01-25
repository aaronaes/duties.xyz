import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

// Projects
import Project1 from "./projects/Project1.vue";
import Project2 from "./projects/Project2.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: () =>
        import(/* webpackChunkName: "About" */ "./views/About.vue")
    },
    {
      path: "/projects/project1",
      name: "Project1",
      component: () =>
        import(/* webpackChunkName: "Project1" */ "./projects/Project1.vue")
    },
    {
      path: "/projects/project2",
      name: "Project2",
      component: () =>
        import(/* webpackChunkName: "Project2" */ "./projects/Project2.vue")
    }
  ]
});
