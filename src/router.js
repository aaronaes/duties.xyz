import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  hashbag: true,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
        //offset: { x: 0, y: 10 }
      };
    }
    if (savedPosition) {
      return savedPosition;
    } else {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ x: 0, y: 0 });
        }, 250);
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
    }
  ]
});
