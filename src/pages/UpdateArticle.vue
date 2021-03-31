<template>
  <div id="listeArticle">
    HELLO
    <UpdateArticle
      v-bind:titre="article.titre"
      v-bind:contenu="article.contenu"
      v-bind:key="article._id"
    />
  </div>
</template>

<script>
import axios from "axios";
import UpdateArticle from "../components/UpdateArticle";

export default {
  name: "UpdateArticles",
  components: {
    UpdateArticle,
  },
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    axios
      .get("https://brach-node.herokuapp.com/article/" + this.$route.params.id)
      .then((response) => {
        const article = response.data;
        this.titre = article.titre;
        this.contenu = article.contenu;
        this.user = article.user;
        this.isLoading = false;
      });
  },
};
</script>