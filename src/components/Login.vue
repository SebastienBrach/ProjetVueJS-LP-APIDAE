<template>
  <form>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="email"
              placeholder="Email"
              type="email"
              class="validate"
              v-model="email"
            />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="password"
              placeholder="Mot de passe"
              type="password"
              class="validate"
              v-model="password"
            />
          </div>
        </div>
        <div class="row">
          <div class="col s1">
            <button
              class="btn btn-primary"
              type="submit"
              name="action"
              v-on:click="connexion"
            >
              Connexion
            </button>
          </div>
        </div>
      </form>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      jwt: "",
    };
  },
  methods: {
    connexion() {
      const data = { email: this.email, password: this.password };
      axios
        .post("https://brach-node.herokuapp.com/login", data)
        .then((response) => {
          localStorage.setItem("jwt", response.data.jwt);
          console.log(response.data.jwt);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>