<template>
  <div>
    <h1>Se connecter</h1>
    <label for="email">E-mail : </label>
    <input type="text" name="email" v-bind:value="email" />
    <br />
    <label for="password">Mot de passe : </label>
    <input type="password" name="password" v-bind:value="password" />

    <pre>data : {{ email }}</pre>

    <button @click="changeData">Se connecter</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    changeData() {
      this.email = "";
    },
  },
};
</script>