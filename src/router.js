import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  hashbag: true,
  scrollBehavior(to, from, savedPosition) {
    if (to.matched.some(m => m.meta.disableScroll)) return;
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  },
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        disableScroll: true
      },
      children: [
        {
          path: "./projects/:slug",
          name: "Project",
          component: () =>
            import(
              /* webpackChunkName: "SingleProject" */
              "./views/SingleProject.vue"
            )
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
      name: "ProjectOverview",
      component: () =>
        import(
          /* webpackChunkName: "ProjectOverview" */ "./views/ProjectOverview.vue"
        )
    },
    {
      path: "/imprint",
      name: "Imprint",
      component: () =>
        import(/* webpackChunkName: "About" */ "./views/Imprint.vue")
    }
  ]
});
