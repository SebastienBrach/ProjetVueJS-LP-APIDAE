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
      /*const bodyFormData = new FormData();
      bodyFormData.append("titre", this.titre);
      bodyFormData.append("contenu", this.contenu);
      bodyFormData.append("mail", this.mail);*/

      axios({
        method: "post",
        url: "https://brach-node.herokuapp.com/addarticle",
        data: data,
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