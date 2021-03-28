import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    article: [
      {
        titre: ""
      }
    ]
  },
  mutations: {
    FETCH_ARTICLE(state, payload) {
      state.titre = payload;
    }
  },
  actions: {
    fetchArticle({ commit }) {
      axios.get("https://brach-node.herokuapp.com/article").then((response) => {
        commit("FETCH_SKILL", response.data[0].titre);
        console.log(response.data[0].titre);
      });
    }
  }
});

export default store;
