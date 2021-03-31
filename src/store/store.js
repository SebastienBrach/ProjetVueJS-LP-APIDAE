import axios from "axios";
import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex);

Vue.prototype.articlesBDD = function () {
  axios.get("https://brach-node.herokuapp.com/article/").then((response) => {
    this.$store.dispatch("articleInStore", response.data);
  });
};

const store = new vuex.Store({
  state: {
    articles: {}
  },
  articleInStore: {
    storeArticles(state, articles) {
      state.articles = articles;
    }
  },
  namespaced: true
});
Vue.prototype.$store = store;

export default store;
