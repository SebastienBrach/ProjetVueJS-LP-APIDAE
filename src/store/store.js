import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    jwt: ""
  },
  mutations: {
    setJWT(state, jwt) {
      state.jwt = jwt;
    }
  },
  actions: {
    fetchJWT({ commit }, { mail, password }) {
      const jwt = axios
        .post("https://brach-node.herokuapp.com/login", { mail, password })
        .then((response) => {
          console.log(response.data);
          commit("setJWT", jwt);
        });
    }
  }
});

export default store;
