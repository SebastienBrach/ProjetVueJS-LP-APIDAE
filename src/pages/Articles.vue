<template>
  <div id="listeArticle">
    <Article
      v-for="article in articles"
      v-bind:key="article._id"
      v-bind:titre="article.titre"
      v-bind:contenu="article.contenu"
      v-bind:_id="article._id"
    />
  </div>
</template>

<script>
import Article from "../components/Article";
import axios from "axios";

export default {
  name: "Articles",
  components: {
    Article,
  },
  data() {
    return {
      articles: [],
      isLoading: true,
    };
  },
  mounted() {
    //this.articlesBDD();
    axios
      .get("https://brach-node.herokuapp.com/article")
      .then((response) =>
        console.log(response.data)((this.articles = response.data))
      )
      .catch((error) => console.log(error));
  },
  /*computed: {
    article() {
      console.log(this.$store.state.articles);
      return this.$store.state.articles;
    },
  },*/
};
</script>