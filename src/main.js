// Vue libraries
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./../node_modules/foundation-sites/dist/css/foundation.min.css";
import "./../node_modules/foundation-sites/dist/js/foundation.min.js";
import "./assets/scripts/main.js";
import "./assets/styles/main.scss";
import vueScrollto from "vue-scrollto";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;
Vue.use(vueScrollto);
Vue.use(VueLazyload);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
