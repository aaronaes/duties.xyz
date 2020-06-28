// Vue libraries
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueAwesomeSwiper from "vue-awesome-swiper";
import VueLazyload from "vue-lazyload";
import VueScrollTo from "vue-scrollto";

import "foundation-sites/dist/css/foundation.min.css";
import "./assets/scripts/main.js";
import "./assets/styles/main.scss";
import "swiper/css/swiper.css";

Vue.config.productionTip = false;
Vue.use(VueScrollTo);
Vue.use(VueLazyload);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
