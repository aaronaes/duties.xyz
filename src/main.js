// Vue libraries
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "foundation-sites/dist/css/foundation.min.css";
import "./assets/scripts/main.js";
import "./assets/styles/main.scss";
import "swiper/css/swiper.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import VueLazyload from "vue-lazyload";
import { VueMasonryPlugin } from "vue-masonry";

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(VueMasonryPlugin);

Vue.use(VueLazyload);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
