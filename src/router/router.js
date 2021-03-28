import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Article from "../pages/Article";

import axios from "axios";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/register", component: Register, name: "register" },
  { path: "/login", component: Login, name: "login" },
  { path: "/article", component: Article, name: "article" }
];

Vue.prototype.$axios = axios;

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;
