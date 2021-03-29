<template>
  <div></div>
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
        .put("https://brach-node.herokuapp.com/article/" + this._id, {
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