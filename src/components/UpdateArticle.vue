<template>
  <form>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="titre" placeholder="Email" type="text" v-model="titre" />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="contenu"
              placeholder="contenu"
              type="text"
              v-model="contenu"
            />
          </div>
        </div>
        <div class="row">
          <div class="col s1">
            <button
              class="btn btn-primary"
              type="submit"
              name="action"
              v-on:click="modifier"
            >
              Modifier
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
      isLoading: true,
    };
  },
  mounted() {
    axios
      .get("https://brach-node.herokuapp.com/article/" + this.$route.params.id)
      .then((response) => {
        const article = response.data[0];
        this.titre = article.titre;
        this.contenu = article.contenu;
        this.id = article._id;
        this.isLoading = false;
      });
  },
  methods: {
    modifier() {
      const data = {
        titre: this.titre,
        contenu: this.contenu,
      };
      console.log(data);

      axios
        .put(
          "https://brach-node.herokuapp.com/article/" + this.$route.params.id,
          data,
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