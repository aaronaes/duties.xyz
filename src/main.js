// The Vue build version to load with the `import` command
import "script-loader!jquery/dist/jquery.min";
import "script-loader!foundation-sites/dist/js/foundation.min";

// Vue libraries
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueMeta from "vue-meta";
import VueLazyload from "vue-lazyload";
import VueScrollTo from "vue-scrollto";
import VueAwesomeSwiper from "vue-awesome-swiper";
import vueScrollBehavior from "vue-scroll-behavior";
import inViewportDirective from "vue-in-viewport-directive";

import "./assets/scripts/main.js";
import "./assets/styles/main.scss";
import "swiper/css/swiper.css";

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});

Vue.use(VueScrollTo);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
});

Vue.directive("in-viewport", inViewportDirective);
inViewportDirective.defaults.margin = "10% 10%";

Vue.use(vueScrollBehavior, {
  router: router, // The router instance
  el: "#app" // Custom element
});

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

router.afterEach((to, from, next) => {
  const foo = document.getElementsByTagName("body")[0];
  if (from !== undefined) {
    foo.classList.remove("page-" + from.meta.title.toLowerCase());
  }
  foo.classList.add("page-" + to.meta.title.toLowerCase());
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
