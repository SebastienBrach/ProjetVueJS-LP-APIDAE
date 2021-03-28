<template>
  <div>{{ titre }}<br />{{ contenu }}</div>
</template>

<script>
export default {
  name: "Article",
  props: {
    idArticle: Number,
    titre: String,
    contenu: String,
  },
};
</script>