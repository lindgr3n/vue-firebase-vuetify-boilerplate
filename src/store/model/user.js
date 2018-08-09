import { signInUser, signupUser, signOutUser, addUser } from "@/firebase";

const state = {
  user: null,
  errorMessage: null
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
  setErrorMessage(state, { message }) {
    state.errorMessage = message;
  },
  clearErrorMessage(state) {
    state.errorMessage = null;
  }
};

export const actions = {
  signInUser({ commit, dispatch }, payload) {
    commit("clearErrorMessage");
    // TODO: Trigger application loading
    const loginPromise = signInUser(payload);
    loginPromise
      .then(user => {
        dispatch("setUser", { user });
        // TODO: commit success
      })
      .catch(error => {
        console.log(error);
        commit("setErrorMessage", { message: error.message });
      });
  },

  signupUser({ commit, dispatch }, { email, password }) {
    // commit("clearErrorMessage");
    const createdUserPromise = signupUser({ email, password });
    createdUserPromise
      .then(user => {
        // Store user to datbase
        const addUserPromise = addUser(user);
        addUserPromise
          .then(() => {
            dispatch("setUser", { user });
          })
          .catch(error => {
            // commit("setErrorMessage", error.message);
          });
      })
      .catch(error => {
        // commit("setErrorMessage", error.message);
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
