<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12>
        <v-card class="elevation-12">
          <v-toolbar 
            dark 
            color="primary">
            <v-toolbar-title>Signup</v-toolbar-title>
            <v-spacer/>
          </v-toolbar>
          <v-container fill-height>
            <v-layout 
              class="verticalLine" 
              align-center 
              justify-center>
              <v-flex xs8 >
                <v-form 
                  v-model="valid" 
                  lazy-validation>
                  <v-text-field 
                    v-model="email" 
                    :rules="emailRules" 
                    prepend-icon="mail" 
                    name="email" 
                    label="Email" 
                    type="text" />
                  <v-text-field 
                    v-model="password" 
                    :rules="[v => !!v || 'Password is required']" 
                    prepend-icon="lock" 
                    name="password" 
                    label="Password" 
                    type="password"/>
                </v-form>
                <v-alert
                  :value="error"
                  type="error"
                >
                  {{ error }}
                </v-alert>
                <v-spacer/>
                <v-layout column>
                  <v-btn 
                    :disabled="!valid" 
                    color="primary" 
                    class="test" 
                    @click="onSignUp">Signup</v-btn>
                  <p>Got an account? Login here <router-link to="/sign-in">Login</router-link></p>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "E-mail is invalid"
      ]
    };
  },
  computed: {
    error() {
      return this.$store.state.user.user_error;
    },

    loading() {
      return this.$store.state.user.user_request;
    }
  },
  methods: {
    onSignUp() {
      this.$store.dispatch("USER_SIGNUP", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
</style>
