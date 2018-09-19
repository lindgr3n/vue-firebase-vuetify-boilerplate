<template>
  <v-app>
    <v-toolbar
      color="primary"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Awesome application!</span>
      </v-toolbar-title>
      <v-spacer/>
      <div 
        v-if="user" 
        id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <user-settings v-if="user" />
    </v-toolbar>
    <v-content>
      <v-layout 
        justify-content-center 
        fill-height>
        <v-flex fill-height>
          <router-view/>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import UserSettings from "@/components/UserSettings";
export default {
  components: {
    UserSettings
  },

  computed: {
    user() {
      return this.$store.state.user.user;
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
