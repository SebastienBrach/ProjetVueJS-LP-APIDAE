<template>
  <div>{{ titre }}<br /></div>
</template>

<script>
export default {
  name: "Article",
  props: {
    titre: String,
  },
};
</script>