<template>
  <v-content>
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Login form</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn fab small>Signup</v-btn>
      </v-toolbar>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <v-btn color="primary" round>
              <v-icon>fab fa-twitter-square</v-icon>
              <span>Twitter</span>
            </v-btn>
            <br />
            <v-btn color="primary" round>
              <v-icon>fab fa-facebook-square</v-icon>
              <span>Facebook</span>
            </v-btn>
            <br />
            <v-btn color="primary" round>
              <v-icon>fab fa-github-square</v-icon>
              <span>Github</span>
            </v-btn>
            <br />
            <v-btn color="primary">
              <v-icon>fab fa-google-plus-square</v-icon>
              <span>Google</span>
            </v-btn>
          </v-flex>
        </v-layout>
        <hr />
        <v-layout>
          <v-flex xs8>
            <v-form>
              <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
              <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
            </v-form>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="onLogin">Login</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-content>
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
    },

    error() {
      return this.$store.state.user.user_error;
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
