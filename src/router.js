import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  hashbag: true,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ x: 0, y: 0 });
        }, 500);
      });
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
      path: "/projects",
      name: "Projects",
      component: () =>
        import(/* webpackChunkName: "About" */ "./views/Projects.vue")
    },
    {
      path: "/imprint",
      name: "Imprint",
      component: () =>
        import(/* webpackChunkName: "About" */ "./views/Imprint.vue")
    }
  ]
});
