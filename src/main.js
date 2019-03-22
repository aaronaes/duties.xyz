// Vue libraries
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollReveal from "vue-scroll-reveal";
import "./assets/scripts/main.js";

// ScrollReveal
Vue.use(VueScrollReveal, {
  duration: 600,
  delay: 200,
  viewFactor: 0,
  distance: "10px",
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
  opacity: 0,
  viewOffset: {
    top: 0,
    bottom: 0
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
