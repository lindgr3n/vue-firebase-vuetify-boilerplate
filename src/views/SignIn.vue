<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12>
        <v-card class="elevation-12">
          <v-toolbar 
            dark 
            color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer/>
          </v-toolbar>
          <v-container fill-height>
            <v-layout>
              <v-flex 
                mr-5 
                ml-5>
                <v-btn 
                  class="social twitter" 
                  round 
                  block>
                  <v-icon class="social-icon" >fab fa-twitter-square</v-icon>
                  <span class="social-label">Twitter</span>
                </v-btn>
                <br >
                <v-btn 
                  class="social facebook" 
                  round 
                  block>
                  <v-icon class="social-icon">fab fa-facebook-square</v-icon>
                  <span class="social-label">Facebook</span>
                </v-btn>
                <br >
                <v-btn 
                  class="social github" 
                  round 
                  block>
                  <v-icon class="social-icon" >fab fa-github-square</v-icon>
                  <span class="social-label">Github</span>
                </v-btn>
                <br >
                <v-btn 
                  class="social google" 
                  round 
                  block>
                  <v-icon class="social-icon" >fab fa-google-plus-square</v-icon>
                  <span class="social-label">Google</span>
                </v-btn>
              </v-flex>
            </v-layout>
            <div class="wrapper">
              <div 
                class="vertical-line" 
                color="primary"/> 
              <div class="circle">
                <h5>OR</h5>
              </div>
              <div class="vertical-line"/> 
            </div>
            <v-layout 
              class="verticalLine" 
              align-center 
              justify-center
            >
              <v-flex xs12 >
                <v-form>
                  <v-text-field 
                    v-model="email" 
                    prepend-icon="mail" 
                    name="login" 
                    label="Login" 
                    type="text"/>
                  <v-text-field 
                    v-model="password" 
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
                    :loading="loading" 
                    color="primary"
                    @click="onLogin">Login</v-btn>
                  <p>Don't got an account? Signup here <router-link to="/sign-up">Signup</router-link></p>
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
    },

    loading() {
      return this.$store.state.user.user_request;
    }
  },
  watch: {
    user(newValue) {
      if (newValue) {
        this.$router.replace("/");
      }
    }
  },
  methods: {
    onLogin() {
      this.$store.dispatch("USER_SIGNIN", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
.circle {
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 100px;
  border-style: solid;
  border-width: 1px;
  /* border-color: #1976d2; */
  border-color: #fff;
  position: relative;
  margin: 10px auto 0 auto;
}
.vertical-line {
  width: 1px;
  height: 50px;
  background: #dcdcdc;
  margin: 10px auto 0 auto;
}

h5 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  color: #000;
}

.social {
  width: 200px;
  text-align: left;
}
.social > div.v-btn__content {
  display: flex;
  justify-content: flex-start !important;
}

.social-icon {
  border-right: 1px solid;
  padding-right: 5px;
}

.social-label {
  padding-left: 10px;
}

.google {
  background-color: #dd4b39 !important;
  border: 2px solid #dd4b39;
  color: #fff;
}
.twitter {
  background-color: #55acee !important;
  border: 2px solid #55acee;
  color: #fff;
}
.facebook {
  background-color: #3b5998 !important;
  border: 2px solid #3b5998;
  color: #fff;
}

.github {
  background-color: #444 !important;
  border: 2px solid #444;
  color: #fff;
}
</style>
