import Vue from "vue";
import Vuex from "vuex";

import user from "./model/user";

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    user
  }
  // strict: false  // strict true throws dont mutate errors
});
