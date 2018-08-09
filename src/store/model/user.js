import { signInUser, signupUser, signOutUser, addUser } from "@/firebase";

const state = {
  user: null,
  request: null,
  success: null,
  error: null
};

export const getters = {};

export const mutations = {
  setUser(state, { user }) {
    console.log("Setting user");

    state.user = user;
  },
  clearUser(state) {
    state.user = null;
  },
  request(state) {
    state.request = true;
    state.success = null;
    state.error = null;
  },
  success(state) {
    state.request = null;
    state.success = true;
    state.error = null;
  },
  error(state, { message }) {
    state.request = null;
    state.success = null;
    state.error = message;
  }
};

export const actions = {
  signInUser({ commit, dispatch }, payload) {
    commit("request");
    // TODO: Trigger application loading
    const loginPromise = signInUser(payload);
    loginPromise
      .then(user => {
        dispatch("setUser", { user });
        commit("success");
      })
      .catch(error => {
        commit("error", { message: error.message });
      });
  },

  signupUser({ commit, dispatch }, { email, password }) {
    commit("request");
    const createdUserPromise = signupUser({ email, password });
    createdUserPromise
      .then(user => {
        // Store user to datbase
        const addUserPromise = addUser(user);
        addUserPromise
          .then(() => {
            dispatch("setUser", { user });
            commit("success");
          })
          .catch(error => {
            commit("error", { message: error.message });
          });
      })
      .catch(error => {
        commit("error", { message: error.message });
      });
  },

  signOutUser({ commit }) {
    // commit("clearErrorMessage");
    const signOutPromise = signOutUser();
    signOutPromise
      .then(() => {
        commit("clearUser");
      })
      .catch(error => {
        // commit("setErrorMessage", error.message);
      });
  },

  setUser({ commit }, { user }) {
    // TODO: update database latest login
    commit("setUser", { user });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
