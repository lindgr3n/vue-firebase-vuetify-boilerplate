import { signInUser, signupUser, signOutUser, addUser } from "@/firebase";

const state = {
  user: null
};

export const getters = {};

export const mutations = {
  setUser(state, { user }) {
    console.log("Setting user");

    state.user = user;
  },
  clearUser(state) {
    state.user = null;
  }
};

export const actions = {
  signInUser({ commit, dispatch }, payload) {
    // commit("clearError");
    // TODO: commit loading
    const loginPromise = signInUser(payload);
    loginPromise
      .then(user => {
        dispatch("setUser", { user });
        // TODO: commit success
      })
      .catch(error => {
        // commit("setError", error.message);
      });
  },

  signupUser({ commit, dispatch }, { email, password }) {
    // commit("clearError");
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
            // commit("setError", error.message);
          });
      })
      .catch(error => {
        // commit("setError", error.message);
      });
  },

  signOutUser({ commit }) {
    // commit("clearError");
    const signOutPromise = signOutUser();
    signOutPromise
      .then(() => {
        commit("clearUser");
      })
      .catch(error => {
        // commit("setError", error.message);
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
