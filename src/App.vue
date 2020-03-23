<template>
  <v-app>
    <v-app-bar color="primary" dense fixed clipped-left app>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Build something great!</span>
      </v-toolbar-title>
      <v-spacer />
      <div v-if="user" id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <user-settings v-if="user" />
    </v-app-bar>
    <v-content>
      <v-container v-if="loading" fluid class="fill-height">
        <v-row align="center" justify="center">
          <v-col>
            <loading-screen class="loading-screen" />
          </v-col>
        </v-row>
      </v-container>
      <router-view v-else />
    </v-content>
  </v-app>
</template>

<script>
import UserSettings from "@/components/UserSettings";
import LoadingScreen from "@/components/LoadingScreen";

export default {
  name: "App",

  components: {
    UserSettings,
    LoadingScreen
  },

  data: () => ({
    //
  }),
  computed: {
    user() {
      return this.$store.state.user.user;
    },
    loading() {
      return !!this.$store.state.user.loading;
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

.loading-screen {
  padding-bottom: 10%;
}
</style>
