<template>
  <div class="login">
    <h3>Sign in</h3>
    <input v-model="email" type="text" placeholder="email" /><br/>
    <input v-model="password" type="password" placeholder="password" /><br/>
    <button @click="onLogin">Login</button>
    <p>You don't have an account? You can <router-link to="/sign-up">create one here</router-link></p>
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
    user() {
      return this.$store.state.user.user;
    }
  },
  watch: {
    user(newValue) {
      console.log("Watcher", newValue);
      if (newValue) {
        this.$router.replace("/");
      }
    }
  },
  methods: {
    onLogin() {
      this.$store.dispatch("signInUser", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
</style>
