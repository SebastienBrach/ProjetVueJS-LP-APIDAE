<template>
  <div class="card text-center article">
    <div class="card-header"></div>
    <div class="card-body">
      <h5 class="card-title">{{ titre }}</h5>
      <p class="card-text">{{ contenu }}</p>
      <button
        class="btn btn-success"
        type="submit"
        name="action"
        v-bind="_id"
        v-on:click="modifier"
      >
        Modifier</button
      ><br /><br />
      <button
        class="btn btn-danger"
        type="submit"
        name="action"
        v-on:click="supprimer"
      >
        Supprimer
      </button>
    </div>
    <div class="card-footer"></div>
  </div>
</template>



<script>
import axios from "axios";

export default {
  name: "Article",
  props: {
    _id: String,
    titre: String,
    contenu: String,
  },
  methods: {
    modifier() {
      axios
        .put("https://brach-node.herokuapp.com/article", {
          "Content-Type": "application/x-www-form-urlencoded",
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
    supprimer() {
      axios
        .delete("https://brach-node.herokuapp.com/article", {
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