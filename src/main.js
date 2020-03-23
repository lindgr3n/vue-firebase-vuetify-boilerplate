import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";
import firebase, { onAuthenticationChanged } from "./firebase";

Vue.config.productionTip = false;

if (process.env.NODE_ENV === "production" && process.env.VUE_APP_SENTRYEY) {
  Sentry.init({
    dsn: process.env.VUE_APP_SENTRYKEY,
    integrations: [new Integrations.Vue({ Vue, attachProps: true })]
  });
}

new Vue({
  router,
  store,
  vuetify,
  data: {
    firebase
  },
  created() {
    onAuthenticationChanged().then(user => {
      this.$store.commit("USER_LOADING", false);
      if (user) {
        this.$store.dispatch("USER_FETCH", { user });
        this.$router.push("/");
      } else {
        if (this.$route.name !== "SignIn") {
          this.$router.push("/sign-in");
        }
      }
    });
  },
  render: h => h(App)
}).$mount("#app");
