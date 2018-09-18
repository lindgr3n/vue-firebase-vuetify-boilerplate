import Vue from "vue";
import Vuetify from "vuetify";
import Raven from "raven-js";
import RavenVue from "raven-js/plugins/vue";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase, { onAuthenticationChanged } from "./firebase";

Vue.config.productionTip = false;

Vue.use(Vuetify);

if (process.env.NODE_ENV === "production" && process.env.VUE_APP_RAVENKEY) {
  Raven.config(process.env.VUE_APP_RAVENKEY)
    .addPlugin(RavenVue, Vue)
    .install();
}

new Vue({
  router,
  store,
  data: {
    firebase
  },
  created() {
    onAuthenticationChanged().then(user => {
      if (user) {
        console.log("Auth changed found user", user);

        this.$store.dispatch("USER_FETCH", { user });
        this.$router.push("/");
      } else {
        this.$router.push("/sign-in");
      }
    });
  },
  render: h => h(App)
}).$mount("#app");
