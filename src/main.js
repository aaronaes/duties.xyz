// Vue libraries
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollReveal from "vue-scroll-reveal";
import "./assets/scripts/main.js";

// ScrollReveal
Vue.use(VueScrollReveal, {
  scale: 1,
  duration: 500,
  delay: 500,
  distance: "60px",
  viewFactor: 0.2,
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
  opacity: 0,
  mobile: false,
  viewOffset: {
    top: 0,
    bottom: 0
  },
  reset: false
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
