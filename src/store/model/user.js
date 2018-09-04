import { signInUser, signupUser, signOutUser, addUser } from "@/firebase";

const state = {
  user: null,
  user_request: null,
  user_success: null,
  user_error: null
};

export const getters = {};

export const mutations = {
  USER_UPDATE(state, { user }) {
    state.user = user;
  },
  USER_CLEAR(state) {
    state.user = null;
  },
  USER_REQUEST(state) {
    state.user_request = true;
    state.user_success = null;
    state.user_error = null;
  },
  USER_SUCCESS(state) {
    state.user_request = null;
    state.user_success = true;
    state.user_error = null;
  },
  USER_ERROR(state, { message }) {
    state.user_request = null;
    state.user_success = null;
    state.user_error = message;
  }
};

export const actions = {
  signInUser({ commit }, payload) {
    commit("request");
    // TODO: Trigger application loading
    const loginPromise = signInUser(payload);
    loginPromise
      .then(user => {
        commit("USER_UPDATE", { user });
        commit("USER_SUCCES");
      })
      .catch(error => {
        commit("USER_ERROR", { message: error.message });
      });
  },

  signupUser({ commit }, { email, password }) {
    commit("request");
    const createdUserPromise = signupUser({ email, password });
    createdUserPromise
      .then(user => {
        // Store user to datbase
        const addUserPromise = addUser(user);
        addUserPromise
          .then(() => {
            commit("USER_UPDATE", { user });
            commit("USER_SUCCESS");
          })
          .catch(error => {
            commit("USER_ERROR", { message: error.message });
          });
      })
      .catch(error => {
        commit("USER_ERROR", { message: error.message });
      });
  },

  signOutUser({ commit }) {
    const signOutPromise = signOutUser();
    signOutPromise
      .then(() => {
        commit("USER_CLEAR");
      })
      .catch(error => {
        commit("USER_ERROR", error.message);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
