import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.directive("sticky", function(el, binding) {
  const loc = binding.arg === "bottom" ? "bottom" : "top";
  el.style.position = "fixed";
  el.style[loc] = 0;
  if (loc === "bottom") {
    el.style.background = "#FFFFFF";
  } else {
    el.style.background = "#FFFFFF";
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
