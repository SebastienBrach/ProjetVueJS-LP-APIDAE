<template>
  <form>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="titre"
              placeholder="Email"
              type="text"
              v-model="titre"
            />{{ titre }}
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="contenu"
              placeholder="contenu"
              type="text"
              v-model="contenu"
            />{{ contenu }}
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="user" placeholder="user" type="text" v-model="user" />{{
              user
            }}
          </div>
        </div>
        <div class="row">
          <div class="col s1">
            <button
              class="btn btn-primary"
              type="submit"
              name="action"
              v-on:click="connexion"
            >
              Connexion
            </button>
          </div>
        </div>
      </form>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "UpdateArticle",
  data() {
    return {
      titre: "",
      contenu: "",
      user: "",
      isLoading: true,
    };
  },
  methods: {
    modifier() {
      axios
        .put(
          "https://brach-node.herokuapp.com/article/" + this.$route.params.id,
          {
            "Content-Type": "application/x-www-form-urlencoded",
          }
        )
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