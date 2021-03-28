<template>
  <div>{{ titre }}<br />{{ contenu }}</div>
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