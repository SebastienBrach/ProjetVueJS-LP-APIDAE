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
      var bodyFormData = new FormData();
      bodyFormData.append("titre", this.titre);
      bodyFormData.append("contenu", this.contenu);
      bodyFormData.append("mail", this.mail);
      console.log(bodyFormData);
      axios
        .post("https://brach-node.herokuapp.com/addArticle", bodyFormData, {
          "Content-Type": "multipart/form-data",
        })
        .then((response) => {
          console.log(response.data);
          /*this.$myRouter.push("/article");*/
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