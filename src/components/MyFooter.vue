<template>
  <div>
    <hr />
    <router-link to="/"> Accueil ||</router-link>
    <router-link to="/article"> Article ||</router-link>
    <router-link to="/login"> Login ||</router-link>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {
      article: "",
    };
  },
};
</script>

<style lang="scss">
</style>