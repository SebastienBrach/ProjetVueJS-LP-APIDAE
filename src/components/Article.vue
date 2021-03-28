<template>
  <div class="card text-center article">
    <div class="card-body">
      <h5 class="card-title">{{ titre }}</h5>
      <p class="card-text">{{ contenu }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted">2 days ago</div>
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