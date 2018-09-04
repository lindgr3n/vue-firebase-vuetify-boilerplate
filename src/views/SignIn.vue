<template>
 <v-container>
   <v-layout justify-center>
     <v-flex xs12>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login</v-toolbar-title>
          <v-spacer></v-spacer>
          
        </v-toolbar>
        <v-container fill-height>
          <v-layout>
            <v-flex>
              <v-btn class="social-icon twitter" round>
                <v-icon>fab fa-twitter-square</v-icon>
                <span>Twitter</span>
              </v-btn>
              <br />
              <v-btn class="social-icon facebook" round>
                <v-icon class="facebook">fab fa-facebook-square</v-icon>
                <span>Facebook</span>
              </v-btn>
              <br />
              <v-btn class="social-icon github" round>
                <v-icon>fab fa-github-square</v-icon>
                <span>Github</span>
              </v-btn>
              <br />
              <v-btn class="social-icon google" round>
                <v-icon>fab fa-google-plus-square</v-icon>
                <span>Google</span>
              </v-btn>
            </v-flex>
          </v-layout>
          <div class="wrapper">
            <div class="vertical-line" color="primary"></div> 
            <div class="circle">
              <h5>OR</h5>
            </div>
            <div class="vertical-line"></div> 
          </div>
          <v-layout class="verticalLine" align-center justify-center>
            <v-flex xs8 >
              <v-form>
                <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
              </v-form>
              <v-spacer></v-spacer>
              <v-layout column>
                <v-btn color="primary" @click="onLogin">Login</v-btn>
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
/* .social-icons {
  padding: 0 1%;
}
.social-icons i {
  font-size: 18px;
}
.facebook,
.twitter,
.google,
.linkedin,
.foursquare,
.vimeo,
.flickr,
.pinterest,
.instagram,
.tumblr {
  width: 100%;
  height: 40px;
  padding-top: 2%;
  margin-top: 2%;
}
.modal-icons {
  margin-left: -10px;
  margin-right: 20px;
} */

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

.social-icon {
  width: 50%;
}

.google {
  background-color: #dd4b39;
  border: 2px solid #dd4b39;
  color: #fff;
}
.twitter {
  background-color: #00aced;
  border: 2px solid #00aced;
  color: #fff;
}
.facebook {
  background-color: #3b5999;
  border: 2px solid #3b5999;
  color: #fff;
}
/* .linkedin,
.linkedin:hover {
  background-color: #007bb6;
  border: 2px solid #007bb6;
  color: #fff;
}
.vimeo,
.vimeo:hover {
  background-color: #aad450;
  border: 2px solid #aad450;
  color: #fff;
}
.flickr,
.flickr:hover {
  background-color: #ff0084;
  border: 2px solid #ff0084;
  color: #fff;
}
.foursquare,
.foursquare:hover {
  background-color: #0072b1;
  border: 2px solid #0072b1;
  color: #fff;
}
.pinterest,
.pinterest:hover {
  background-color: #cb2027;
  border: 2px solid #cb2027;
  color: #fff;
}
.instagram,
.instagram:hover {
  background-color: #517fa4;
  border: 2px solid #517fa4;
  color: #fff;
}
.tumblr,
.tumblr:hover {
  background-color: #32506d;
  border: 2px solid #32506d;
  color: #fff;
} */
</style>
