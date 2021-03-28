import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/*const store = new Vuex.Store({
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
*/

const store = new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    loadArticles(state) {
      axios
        .get("https://brach-node.herokuapp.com/article")
        .then((response) => {
          state.article = [];
          for (let i = 0; i < response.data.length; i++) {
            console.log(response.data[i]);
          }
        })
        .then((response) => {
          state.article = [];
          for (let i = 0; i < response.data.length; i++) {
            state.article.push(response.data[i]);
          }
        })
        .catch((error) => console.log(error));
    }
  }
});

export default store;
