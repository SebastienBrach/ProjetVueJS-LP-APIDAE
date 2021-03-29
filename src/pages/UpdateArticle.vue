<template>
  <div id="listeArticle">
    <Article
      v-bind:titre="article.titre"
      v-bind:contenu="article.contenu"
      v-bind:key="article._id"
    />
  </div>
</template>

<script>
import store from "../store/store";
import axios from "axios";
import Article from "../components/Article";

export default {
  name: "UpdateArticles",
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
      .then((response) =>
        console.log(response.data)((this.articles = response.data))
      )
      .catch((error) => console.log(error));
  },
};
</script>