<template>
  <div class="card text-center article">
    <div class="card-header"></div>
    <div class="card-body">
      <h5 class="card-title">{{ titre }}</h5>
      <p class="card-text">{{ contenu }}</p>
      <button
        class="btn btn-primary"
        type="submit"
        name="action"
        v-on:click="connexion"
      >
        Connexion
      </button>
    </div>
    <div class="card-footer"></div>
  </div>
</template>



<script>
export default {
  name: "Article",
  props: {
    _id: Number,
    titre: String,
    contenu: String,
  },
};
</script>

<style>
.article {
  margin-bottom: 2vw;
}
</style>