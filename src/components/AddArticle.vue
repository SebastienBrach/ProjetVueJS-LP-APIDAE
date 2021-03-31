<template>
  <form>
    <label for="">Titre de l'article</label>
    <input type="text" v-model="titre" />
    <br />
    <label for="">Contenue de l'article</label>
    <input type="text" v-model="contenu" />
    <br />
    <label for="">Votre mail</label>
    <input type="text" v-model="mail" />
    <br />
    <input type="submit" v-on:click="ajouter" />
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "AddArticle",
  data() {
    return {
      titre: "",
      contenu: "",
      mail: "",
    };
  },
  methods: {
    ajouter() {
      const dataArticle = new URLSearchParams();
      dataArticle.append("titre", this.titre);
      dataArticle.append("contenu", this.contenu);
      dataArticle.append("mail", this.mail);
      axios({
        method: "post",
        url: "https://brach-node.herokuapp.com/addarticle",
        config: {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
        },
        data: dataArticle,
      }).then((response) => {
        console.log(response.data);
        this.$myRouter.push("/article");
      });
    },
  },
};
</script>

<style>
.article {
  margin-bottom: 2vw;
}
</style>