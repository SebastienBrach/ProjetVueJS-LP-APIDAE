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
      const data = {
        titre: this.titre,
        contenu: this.contenu,
        mail: this.mail,
      };
      console.log(data);
      axios
        .post("https://brach-node.herokuapp.com/article", data, {
          "Content-Type": "application/x-www-form-urlencoded",
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
.article {
  margin-bottom: 2vw;
}
</style>