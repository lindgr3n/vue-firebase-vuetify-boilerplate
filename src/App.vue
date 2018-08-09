<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/sign-in">Sign in</router-link> |
      <router-link to="/sign-up">Sign up</router-link> |
      <button @click="onLogOut">Logout</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    onLogOut() {
      this.$store.dispatch("signOutUser");
      this.$router.replace("sign-in");
    }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
