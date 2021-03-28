<template>
  <div id="listeArticle">
    <Article
      v-for="article in articles"
      v-bind:titre="article.titre"
      v-bind:contenu="article.contenu"
      v-bind:key="article.id"
    />
  </div>
</template>

<script>
import store from "../store/store";
import axios from "axios";
import Article from "../components/Article";

export default {
  name: "Article",
  components: {
    Article,
  },
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    axios
      .get("https://brach-node.herokuapp.com/article")
      .then((response) => (this.articles = response.data.data))
      .catch((error) => console.log(error));
  },
};
</script>