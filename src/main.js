import Vue from "vue";
import App from "./App.vue";

import router from "./router/router";

Vue.config.productionTip = false;
//je suis la
new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
