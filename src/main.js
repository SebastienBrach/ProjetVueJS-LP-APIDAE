import Vue from "vue";
import App from "./App.vue";

import router from "./router/router";

Vue.config.productionTip = false;
//bite
new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
