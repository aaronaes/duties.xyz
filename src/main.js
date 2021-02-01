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
import CursorFx from "@luxdamore/vue-cursor-fx";
import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";

import "./assets/scripts/main.js";
import "./assets/styles/main.scss";
import "swiper/css/swiper.css";

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(VueScrollTo);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  listenEvents: ["scroll"]
});

Vue.directive("in-viewport", inViewportDirective);
inViewportDirective.defaults.margin = "10% 10%";

Vue.use(vueScrollBehavior, {
  router: router, // The router instance
  el: "#app", // Custom element
  ignore: [/\/about/, /\/projects/] // ignore some routes, they will directly scroll to the top
});

Vue.use(CursorFx);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
