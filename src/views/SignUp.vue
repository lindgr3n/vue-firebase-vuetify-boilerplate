<template>
  <div class="login">
    <h3>Create a new account</h3>
    <input v-model="email" type="text" placeholder="email" /><br/>
    <input v-model="password" type="password" placeholder="password" /><br/>
    <button @click="onSignUp">Sign up</button>
    <p v-if="error">{{error}}</p>
    <p>Got an account? <router-link to="/sign-in">login here</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    error() {
      return this.$store.state.user.error;
    }
  },
  methods: {
    onSignUp() {
      this.$store.dispatch("signupUser", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
</style>
