<template>
  <div>
    <h1>Liste des articles</h1>
    <Article />
  </div>
</template>

<script>
import store from "../store/store";
import Article from "../components/Article";

export default {
  name: "Article",
  components: {
    Article,
  },
  data() {
    return {
      isLoading: true,
      store,
    };
  },
};
</script>