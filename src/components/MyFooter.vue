<template>
  <div id="footer">
    <hr />
    <router-link to="/"> Accueil ||</router-link>
    <router-link to="/article"> Article ||</router-link>
    <router-link to="/login"> Login ||</router-link>
    <router-link to="/add/article"> Ajout un article ||</router-link>
    <br />
    <img
      src="https://www.radioclassique.fr/wp-content/thumbnails/uploads/2019/05/bieres-article-tt-width-978-height-383-crop-1-bgcolor-ffffff.jpg"
      width="100px"
      height="70px"
    />
  </div>
</template>

<script>
export default {
  name: "MyFooter",
};
</script>

<style>
#footer {
  background-color: lightgrey;
}
</style>