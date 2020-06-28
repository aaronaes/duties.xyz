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
      path: "/gl",
      name: "Godt Levert",
      component: () => import(/* webpackChunkName: "GL" */ "./projects/gl.vue")
    },
    {
      path: "/eika",
      name: "Eika Gruppen",
      component: () =>
        import(/* webpackChunkName: "Eika" */ "./projects/eika.vue")
    },
    {
      path: "/gro",
      name: "Gro Grønt",
      component: () =>
        import(/* webpackChunkName: "Gro Gront" */ "./projects/gro.vue")
    },
    {
      path: "/ogle",
      name: "Ogle Image",
      component: () =>
        import(/* webpackChunkName: "Eika" */ "./projects/ogle.vue")
    },
    {
      path: "/humid",
      name: "Humid Mag",
      component: () =>
        import(/* webpackChunkName: "Eika" */ "./projects/humid.vue")
    },
    {
      path: "/marks",
      name: "Logos and wordmarks",
      component: () =>
        import(/* webpackChunkName: "Eika" */ "./projects/humid.vue")
    }
  ]
});
