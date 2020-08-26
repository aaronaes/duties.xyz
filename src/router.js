import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Project from "./views/Project";

Vue.use(Router);

export default new Router({
  mode: "history",
  hashbag: true,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
  },
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "/project/:slug",
          name: "Project",
          component: Project,
          transition: "modal"
        }
      ]
    },
    {
      path: "/about",
      name: "About",
      component: () =>
        import(/* webpackChunkName: "About" */ "./views/About.vue")
    },
    {
      path: "/projects",
      name: "Projects",
      component: () =>
        import(/* webpackChunkName: "About" */ "./views/Projects.vue")
    }
  ]
});
