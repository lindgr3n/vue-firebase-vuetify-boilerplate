import {
  signInUser,
  signupUser,
  signOutUser,
  addUser,
  fetchUser,
  signInWithSocial
} from "@/firebase";

const state = {
  user: null,
  user_request: null,
  user_success: null,
  user_error: null,
  loading: true
};

const getters = {};

const mutations = {
  USER_UPDATE(state, { user }) {
    state.loading = false;
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
  },
  USER_CLEAR_REQUEST(state) {
    state.user_request = null;
    state.user_success = null;
    state.user_error = null;
  },
  USER_LOADING(state, payload) {
    state.loading = payload;
  }
};

const actions = {
  USER_SIGNIN({ commit, dispatch }, payload) {
    commit("USER_REQUEST");
    const loginPromise = signInUser(payload);
    loginPromise
      .then(user => {
        dispatch("USER_FETCH", user);
      })
      .catch(error => {
        commit("USER_ERROR", { message: error.message });
      });
  },

  USER_SIGNIN_SOCIAL({ commit, dispatch }, { provider }) {
    commit("USER_REQUEST");
    const loginPromise = signInWithSocial({ provider });
    loginPromise
      .then(user => {
        user.provider = provider;
        const addUserPromise = addUser(user);
        addUserPromise
          .then(() => {
            // TODO: Check if user exist before create?
            // Could be nice to always add (merge) so we fetch user changes from social login
            dispatch("USER_FETCH", user);
          })
          .catch(error => {
            commit("USER_ERROR", { message: error.message });
          });
      })
      .catch(error => {
        commit("USER_ERROR", { message: error.message });
      });
  },

  USER_SIGNUP({ commit, dispatch }, { email, password }) {
    commit("USER_REQUEST");
    const createdUserPromise = signupUser({ email, password });
    createdUserPromise
      .then(user => {
        // Store user to datbase
        user.provider = "email";
        const addUserPromise = addUser(user);
        addUserPromise
          .then(() => {
            dispatch("USER_FETCH", user);
          })
          .catch(error => {
            commit("USER_ERROR", { message: error.message });
          });
      })
      .catch(error => {
        commit("USER_ERROR", { message: error.message });
      });
  },

  USER_FETCH({ commit }, { user }) {
    commit("USER_REQUEST");
    const fetchedUserPromise = fetchUser(user);
    fetchedUserPromise
      .then(user => {
        commit("USER_UPDATE", { user });
        commit("USER_SUCCESS");
      })
      .catch(error => {
        commit("USER_ERROR", error.message);
      });
  },

  USER_SIGNOUT({ commit }) {
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
