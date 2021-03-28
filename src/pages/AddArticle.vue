<template>
  <AddArticle />
</template>

<script>
import store from "../store/store";
import axios from "axios";
import AddArticle from "../components/AddArticle";

export default {
  name: "AddArticles",
  components: {
    AddArticle,
  },
};
</script>