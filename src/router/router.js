import Home from "../pages/Home";
import Register from "../pages/RegisterForm";
import Login from "../pages/LoginForm";
import Article from "../pages/Articles";
import AddArticle from "../pages/AddArticle";
import UpdateArticle from "../pages/UpdateArticle";

import axios from "axios";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/register", component: Register, name: "register" },
  { path: "/login", component: Login, name: "login" },
  { path: "/article", component: Article, name: "article" },
  { path: "/add/article", component: AddArticle, name: "addArticle" },
  {
    path: "/update/article/:id",
    component: UpdateArticle,
    name: "updateArticle"
  }
];

Vue.prototype.$axios = axios;

const router = new VueRouter({
  routes // short for `routes: routes`
});

Vue.prototype.$myRouter = router;

export default router;
