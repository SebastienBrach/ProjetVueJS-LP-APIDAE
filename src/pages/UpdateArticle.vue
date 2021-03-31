<template>
  <div id="listeArticle">
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
      titre: "",
      contenu: "",
      id: "",
      isLoading: true,
    };
  },
  mounted() {
    axios
      .get("https://brach-node.herokuapp.com/article/" + this.$route.params.id)
      .then((response) => {
        const article = response.data;
        this.titre = article.titre;
        this.contenu = article.contenu;
        this.id = article._id;
        this.isLoading = false;
      });
  },
};
</script>