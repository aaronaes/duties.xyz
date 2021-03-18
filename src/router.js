/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  hashbag: true,
  scrollBehavior(to, from, savedPosition) {
    let position = {
      x: 0,
      y: 0
    }
    // Keep scroll position when using browser buttons
    if (savedPosition) {
      position = savedPosition
    }

    // Workaround for transitions scrolling to the top of the page
    // However, there are still some problems being fixed by the vue team
    return new Promise((resolve) => {
      resolve(position)
    })
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
      path: "/studio",
      name: "Studio",
      component: () =>
        import( /* webpackChunkName: "Studio" */ "./views/Studio.vue")
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
    },
    {
      path: "/links",
      name: "Links",
      component: () =>
        import( /* webpackChunkName: "Links" */ "./views/Links.vue")
    }
  ]
});
