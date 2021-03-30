<template>
  <div>
    <h1>Créer un compte</h1>
    <!-- <form action="" method="post"> -->
    <label for="email">E-mail : </label>
    <input type="text" name="email" v-model="email" />
    <br />
    <label for="password">Mot de passe : </label>
    <input type="password" name="password" v-model="password" />

    <button @click="createAccount">S'incrire</button>
    <!-- </form> -->
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    createAccount() {},
  },
};
</script>