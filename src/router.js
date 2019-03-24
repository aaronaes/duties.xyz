import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

// Projects

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "Home",
      component: Home
    }
    // {
    //   path: "/about",
    //   name: "About",
    //   component: () =>
    //     import( /* webpackChunkName: "About" */ "./views/About.vue")
    // },
    // {
    //   path: "/journal",
    //   name: "Journal",
    //   component: () =>
    //     import( /* webpackChunkName: "Journal" */ "./views/Journal.vue")
    // }
  ]
});
