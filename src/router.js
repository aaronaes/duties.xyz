/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  hashbag: true,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [{
      path: "/",
      name: "Home",
      component: Home,
      children: [{
        path: "projects/:slug",
        name: "Project",
        component: () =>
          import(
            /* webpackChunkName: "projectSingle" */
            "./views/projectSingle.vue"
          )
      }]
    },
    {
      path: "/projects/",
      name: "Projects",
      component: () =>
        import( /* webpackChunkName: "projectIndex" */ "./views/projectIndex.vue")
    },
    {
      path: "/about",
      name: "About",
      component: () =>
        import( /* webpackChunkName: "About" */ "./views/About.vue")
    },
    {
      path: "/news",
      name: "News",
      component: () =>
        import( /* webpackChunkName: "News" */ "./views/News.vue")
    },
    {
      path: "/xyz",
      name: "XYZ",
      component: () =>
        import( /* webpackChunkName: "XYZ" */ "./views/XYZ.vue")
    },
    {
      path: "/imprint",
      name: "Imprint",
      component: () =>
        import( /* webpackChunkName: "Imprint" */ "./views/Imprint.vue")
    }
  ]
});
